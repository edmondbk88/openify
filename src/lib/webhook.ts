export async function triggerWebhook(
  project: { webhook_url: string | null; webhook_events: string[] },
  event: string,
  data: Record<string, unknown>
) {
  if (!project.webhook_url || !project.webhook_events?.includes(event)) return
  try {
    await fetch(project.webhook_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        data,
        timestamp: new Date().toISOString(),
      }),
    })
  } catch {
    /* silent fail */
  }
}
