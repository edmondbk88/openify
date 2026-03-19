CREATE TABLE public.support_tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  subject TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('billing', 'technical', 'feature', 'account', 'widget', 'other')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'waiting', 'resolved', 'closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.ticket_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ticket_id UUID REFERENCES public.support_tickets(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  message TEXT NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_tickets_user_id ON public.support_tickets(user_id);
CREATE INDEX idx_tickets_status ON public.support_tickets(status);
CREATE INDEX idx_ticket_messages_ticket_id ON public.ticket_messages(ticket_id);

-- Updated_at trigger
CREATE TRIGGER update_tickets_updated_at BEFORE UPDATE ON public.support_tickets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- RLS
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "tickets_select_own" ON public.support_tickets FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "tickets_insert_own" ON public.support_tickets FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "tickets_update_own" ON public.support_tickets FOR UPDATE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "messages_select_own_ticket" ON public.ticket_messages FOR SELECT TO authenticated USING (EXISTS (SELECT 1 FROM public.support_tickets WHERE support_tickets.id = ticket_messages.ticket_id AND support_tickets.user_id = auth.uid()));
CREATE POLICY "messages_insert_own_ticket" ON public.ticket_messages FOR INSERT TO authenticated WITH CHECK (EXISTS (SELECT 1 FROM public.support_tickets WHERE support_tickets.id = ticket_messages.ticket_id AND support_tickets.user_id = auth.uid()));

-- Grants
GRANT SELECT, INSERT, UPDATE ON public.support_tickets TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.support_tickets TO service_role;
GRANT SELECT, INSERT ON public.ticket_messages TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ticket_messages TO service_role;
