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
  source?: string;
  source_platform?: string;
  source_url?: string;
}

const SOURCE_COLORS: Record<string, { name: string; color: string }> = {
  google: { name: 'Google', color: '#4285F4' },
  tripadvisor: { name: 'TripAdvisor', color: '#00AF87' },
  trustpilot: { name: 'Trustpilot', color: '#00B67A' },
  facebook: { name: 'Facebook', color: '#1877F2' },
  yelp: { name: 'Yelp', color: '#D32323' },
  capterra: { name: 'Capterra', color: '#FF9D28' },
  g2: { name: 'G2', color: '#FF492C' },
};

interface WidgetConfig {
  layout: 'carousel' | 'grid' | 'wall' | 'single' | 'badge';
  primary_color: string;
  background_color: string;
  text_color: string;
  theme: 'light' | 'dark';
  border_radius: number;
  show_rating: boolean;
  show_date: boolean;
  show_avatar: boolean;
  show_company: boolean;
  show_branding: boolean;
  font_style: string;
  autoplay_speed?: number;
  video_display_mode?: string;
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
  const count = testimonials.length;

  // Calculate how many slides fit per view (mobile=1, tablet=2, desktop=3)
  // We'll show dots per "page" not per slide - handled in JS
  // Only show nav if there are more testimonials than fit in one view
  const needsNav = count > 1;

  const slides = testimonials.map(
    (t, i) => `<div class="opinafy-carousel-slide" data-index="${i}">${renderCard(t, config)}</div>`
  ).join('');

  // No dots - arrows are sufficient for multi-item carousels

  // Only show arrows if more than 3 (desktop shows 3 at once)
  const showArrows = count > 3;

  return `
    <div class="opinafy-carousel-wrapper${showArrows ? '' : ' opinafy-no-nav'}" data-autoplay-speed="${speed}" data-count="${count}">
      ${showArrows ? `<button class="opinafy-carousel-nav opinafy-carousel-prev" data-action="prev" aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>` : ''}
      <div class="opinafy-carousel-track">
        ${slides}
      </div>
      ${showArrows ? `<button class="opinafy-carousel-nav opinafy-carousel-next" data-action="next" aria-label="Siguiente">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>` : ''}
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
  const { testimonials } = data;
  const avgRating = testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length;
  const latest = testimonials[0];

  return `
    <div class="opinafy-badge">
      <div class="opinafy-badge-score">
        <span class="opinafy-badge-number">${avgRating.toFixed(1)}</span>
        <div class="opinafy-stars opinafy-stars-sm">${renderStars(Math.round(avgRating))}</div>
        <span class="opinafy-badge-count">${testimonials.length} opiniones</span>
      </div>
      ${latest ? `<div class="opinafy-badge-latest">
        <p class="opinafy-badge-text">"${escapeHtml(latest.content.substring(0, 80))}${latest.content.length > 80 ? '...' : ''}"</p>
        <span class="opinafy-badge-author">— ${escapeHtml(latest.author_name)}</span>
      </div>` : ''}
    </div>
  `;
}

// ── Card Renderer ──

export function renderCard(testimonial: Testimonial, config: WidgetConfig): string {
  const { author_name, company, role, content, rating, created_at, is_company_verified, video_url } = testimonial;

  // Avatar: initials
  const initials = author_name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  const avatarHtml = `<div class="opinafy-avatar">${initials}</div>`;

  // Author meta line
  let metaHtml = '';
  if (role && company) metaHtml = `${escapeHtml(role)} en ${escapeHtml(company)}`;
  else if (company) metaHtml = escapeHtml(company);
  else if (role) metaHtml = escapeHtml(role);

  if (is_company_verified && company) {
    metaHtml += ` <span class="opinafy-verified" title="Empresa verificada">✓</span>`;
  }

  // Date
  let dateStr = '';
  if (created_at) {
    try {
      const d = new Date(created_at);
      dateStr = d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch { /* ignore */ }
  }

  // Video
  const hasVideo = !!video_url;
  const videoHtml = hasVideo ? `
    <div class="opinafy-video-container">
      <video class="opinafy-video" controls playsinline preload="metadata">
        <source src="${video_url}" type="video/mp4">
        <source src="${video_url}" type="video/webm">
      </video>
    </div>` : '';

  // Video display mode: controls what is shown alongside video
  const videoMode = config.video_display_mode || 'full';

  // If video testimonial with a non-full mode, render a reduced card
  if (hasVideo && videoMode !== 'full') {
    if (videoMode === 'video_only') {
      return `
        <div class="opinafy-card opinafy-card-has-video opinafy-card-video-only">
          ${videoHtml}
        </div>
      `;
    }

    if (videoMode === 'video_stars') {
      return `
        <div class="opinafy-card opinafy-card-has-video">
          ${videoHtml}
          <div class="opinafy-card-body">
            <div class="opinafy-author-name">${escapeHtml(author_name)}</div>
            ${rating > 0 ? `<div class="opinafy-stars">${renderStars(rating)}</div>` : ''}
          </div>
        </div>
      `;
    }

    if (videoMode === 'video_name') {
      return `
        <div class="opinafy-card opinafy-card-has-video">
          ${videoHtml}
          <div class="opinafy-card-body">
            <div class="opinafy-author-name">${escapeHtml(author_name)}</div>
            ${company ? `<div class="opinafy-author-meta">${escapeHtml(company)}</div>` : ''}
          </div>
        </div>
      `;
    }
  }

  // Truncate long text
  const isLong = content.length > 250;

  // Respect config toggles (default to showing if not explicitly false)
  const showAvatar = config.show_avatar !== false;
  const showRating = config.show_rating !== false;
  const showDate = config.show_date !== false;
  const showCompany = config.show_company !== false;

  return `
    <div class="opinafy-card${hasVideo ? ' opinafy-card-has-video' : ''}">
      ${videoHtml}
      <div class="${hasVideo ? 'opinafy-card-body' : ''}">
        ${showRating && rating > 0 ? `<div class="opinafy-stars">${renderStars(rating)}</div>` : ''}
        <div class="opinafy-content"><p>${escapeHtml(content)}</p></div>
        ${isLong ? `<button class="opinafy-read-more" onclick="var c=this.previousElementSibling;c.classList.toggle('opinafy-content-expanded');this.textContent=c.classList.contains('opinafy-content-expanded')?'Leer menos':'Leer más'">Leer más</button>` : ''}
        <div class="opinafy-card-footer">
          <div class="opinafy-card-header">
            ${showAvatar ? avatarHtml : ''}
            <div class="opinafy-author">
              <div class="opinafy-author-name">${escapeHtml(author_name)}</div>
              ${showCompany && metaHtml ? `<div class="opinafy-author-meta">${metaHtml}</div>` : ''}
            </div>
          </div>
          ${showDate && dateStr ? `<div class="opinafy-date">${dateStr}</div>` : ''}
          ${renderSourceBadge(testimonial)}
        </div>
      </div>
    </div>
  `;
}

// ── Source Badge ──

function renderSourceBadge(testimonial: Testimonial): string {
  const platform = testimonial.source_platform || testimonial.source;
  if (!platform || platform === 'form') return '';
  const info = SOURCE_COLORS[platform];
  if (!info) return '';
  const color = info.color;
  return `<div class="opinafy-source-badge" style="--badge-color: ${color}"><span class="opinafy-source-dot" style="background: ${color}"></span>${escapeHtml(info.name)}</div>`;
}

// ── Star SVGs ──

export function renderStars(rating: number): string {
  const stars: string[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(`<svg class="opinafy-star opinafy-star-filled" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`);
    } else {
      stars.push(`<svg class="opinafy-star opinafy-star-empty" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`);
    }
  }
  return stars.join('');
}

// ── Branding ──

export function renderBranding(): string {
  return `
    <div class="opinafy-branding">
      <a href="https://opinafy.com?ref=widget" target="_blank" rel="noopener noreferrer">
        <svg class="opinafy-branding-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"/></svg>
        Powered by Opinafy
      </a>
    </div>
  `;
}

// ── Utilities ──

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
