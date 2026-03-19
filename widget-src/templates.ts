// widget-src/templates.ts
// Render functions for all widget layouts

interface Testimonial {
  id: string;
  author_name: string;
  author_email?: string;
  author_avatar?: string;
  company?: string;
  role?: string;
  rating: number;
  content: string;
  created_at: string;
  is_company_verified?: boolean;
  video_url?: string;
}

interface WidgetConfig {
  layout: 'carousel' | 'grid' | 'wall' | 'single' | 'badge';
  primary_color: string;
  background_color: string;
  text_color: string;
  theme: 'light' | 'dark';
  show_branding: boolean;
  autoplay_speed?: number;
}

export interface WidgetData {
  testimonials: Testimonial[];
  config: WidgetConfig;
  average_rating?: number;
  total_count?: number;
  project_name?: string;
}

// ── Main Dispatcher ──

export function renderWidget(data: WidgetData): string {
  const { config, testimonials } = data;

  if (!testimonials || testimonials.length === 0) {
    return `<div class="opinafy-root"><div class="opinafy-error"><p>No hay testimonios para mostrar.</p></div></div>`;
  }

  let content: string;

  switch (config.layout) {
    case 'carousel':
      content = renderCarousel(data);
      break;
    case 'grid':
      content = renderGrid(data);
      break;
    case 'wall':
      content = renderWall(data);
      break;
    case 'single':
      content = renderSingle(data);
      break;
    case 'badge':
      content = renderBadge(data);
      break;
    default:
      content = renderGrid(data);
  }

  return `<div class="opinafy-root">${content}${config.show_branding ? renderBranding() : ''}</div>`;
}

// ── Carousel Layout ──

export function renderCarousel(data: WidgetData): string {
  const { testimonials, config } = data;
  const speed = config.autoplay_speed || 5000;
  const slides = testimonials.map(
    (t, i) => `<div class="opinafy-carousel-slide" data-index="${i}">${renderCard(t, config)}</div>`
  ).join('');

  const dots = testimonials.map(
    (_, i) => `<button class="opinafy-dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-label="Ir al testimonio ${i + 1}"></button>`
  ).join('');

  return `
    <div class="opinafy-carousel-wrapper" data-autoplay-speed="${speed}">
      <button class="opinafy-carousel-nav opinafy-carousel-prev" data-action="prev" aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="opinafy-carousel-track">
        ${slides}
      </div>
      <button class="opinafy-carousel-nav opinafy-carousel-next" data-action="next" aria-label="Siguiente">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div class="opinafy-carousel-dots">${dots}</div>
      <div class="opinafy-autoplay-bar running" style="--opinafy-autoplay-speed: ${speed}ms"></div>
    </div>
  `;
}

// ── Grid Layout ──

export function renderGrid(data: WidgetData): string {
  const cards = data.testimonials.map(t => renderCard(t, data.config)).join('');
  return `<div class="opinafy-grid">${cards}</div>`;
}

// ── Wall / Masonry Layout ──

export function renderWall(data: WidgetData): string {
  const cards = data.testimonials.map(t => renderCard(t, data.config)).join('');
  return `<div class="opinafy-wall">${cards}</div>`;
}

// ── Single / Featured Layout ──

export function renderSingle(data: WidgetData): string {
  const t = data.testimonials[0];
  return `<div class="opinafy-single">${renderCard(t, data.config)}</div>`;
}

// ── Badge Layout ──

export function renderBadge(data: WidgetData): string {
  const avg = data.average_rating ?? 0;
  const count = data.total_count ?? data.testimonials.length;
  const latest = data.testimonials[0];
  const displayAvg = avg > 0 ? avg.toFixed(1) : '--';

  return `
    <div class="opinafy-badge-container">
      <div class="opinafy-badge-card">
        <div class="opinafy-badge-score">
          <span class="opinafy-badge-number">${displayAvg}</span>
          <div>
            ${renderStars(Math.round(avg))}
            <div class="opinafy-badge-details">${count} opinion${count !== 1 ? 'es' : ''} verificada${count !== 1 ? 's' : ''}</div>
          </div>
        </div>
        ${latest ? `
          <div class="opinafy-badge-snippet">"${escapeHtml(truncate(latest.content, 100))}"</div>
          <div class="opinafy-badge-author">- ${escapeHtml(latest.author_name)}</div>
        ` : ''}
      </div>
    </div>
  `;
}

// ── Individual Testimonial Card ──

export function renderCard(testimonial: Testimonial, config: WidgetConfig): string {
  const { author_name, author_avatar, company, role, rating, content, created_at, video_url } = testimonial;
  const initials = getInitials(author_name);
  const verifiedBadge = company && testimonial.is_company_verified
    ? ' <span class="opinafy-verified" title="Empresa verificada">&#10003;</span>'
    : '';
  const metaParts: string[] = [];
  if (role) metaParts.push(escapeHtml(role));
  if (company) metaParts.push(escapeHtml(company) + verifiedBadge);
  const metaHtml = metaParts.join(' en ');
  const dateStr = formatDate(created_at);

  const avatarHtml = author_avatar
    ? `<div class="opinafy-avatar"><img src="${escapeAttr(author_avatar)}" alt="${escapeAttr(author_name)}" loading="lazy"/></div>`
    : `<div class="opinafy-avatar">${escapeHtml(initials)}</div>`;

  const videoHtml = video_url
    ? `<div class="opinafy-video-container"><video class="opinafy-video" src="${escapeAttr(video_url)}" controls preload="metadata" playsinline></video></div>`
    : '';

  const hasVideo = !!video_url;

  return `
    <div class="opinafy-card${hasVideo ? ' opinafy-card-has-video' : ''}" data-testimonial-id="${escapeAttr(testimonial.id)}">
      ${videoHtml}
      <div class="${hasVideo ? 'opinafy-card-body' : ''}">
        <div class="opinafy-card-header">
          ${avatarHtml}
          <div class="opinafy-author">
            <div class="opinafy-author-name">${escapeHtml(author_name)}</div>
            ${metaHtml ? `<div class="opinafy-author-meta">${metaHtml}</div>` : ''}
          </div>
        </div>
        ${rating > 0 ? `<div class="opinafy-stars">${renderStars(rating)}</div>` : ''}
        <div class="opinafy-content"><p>${escapeHtml(content)}</p></div>
        ${dateStr ? `<div class="opinafy-date">${dateStr}</div>` : ''}
      </div>
    </div>
  `;
}

// ── Star SVGs ──

export function renderStars(rating: number): string {
  const stars: string[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(`<svg class="opinafy-star opinafy-star-filled" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/></svg>`);
    } else {
      stars.push(`<svg class="opinafy-star opinafy-star-empty" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/></svg>`);
    }
  }
  return stars.join('');
}

// ── Branding ──

export function renderBranding(): string {
  return `
    <div class="opinafy-branding">
      <a href="https://opinafy.com?ref=widget" target="_blank" rel="noopener noreferrer">
        <svg class="opinafy-branding-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Powered by Opinafy
      </a>
    </div>
  `;
}

// ── Helpers ──

function escapeHtml(str: string): string {
  const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return str.replace(/[&<>"']/g, c => map[c] || c);
}

function escapeAttr(str: string): string {
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w.charAt(0))
    .join('')
    .toUpperCase();
}

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max).trimEnd() + '...';
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return '';
  }
}
