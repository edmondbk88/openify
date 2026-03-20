// widget-src/widget.ts
// Opinafy Embeddable Testimonial Widget - IIFE entry point

import { getStyles } from './styles';
import { renderWidget, WidgetData } from './templates';

(function () {
  // ── Detect base URL ──
  function getBaseUrl(): string {
    const scripts = document.querySelectorAll('script[src]');
    for (let i = 0; i < scripts.length; i++) {
      const src = (scripts[i] as HTMLScriptElement).src;
      if (src.includes('widget.js') || src.includes('opinafy')) {
        if (src.includes('localhost') || src.includes('127.0.0.1')) {
          const url = new URL(src);
          return `${url.protocol}//${url.host}`;
        }
      }
    }
    return 'https://opinafy.com';
  }

  const BASE_URL = getBaseUrl();

  // ── Google Fonts mapping ──
  const FONT_MAP: Record<string, { family: string; weights: string }> = {
    modern: { family: 'Inter', weights: '400;500;600;700' },
    serif: { family: 'Playfair+Display', weights: '400;500;600;700' },
    rounded: { family: 'Nunito', weights: '400;500;600;700' },
    minimal: { family: 'DM+Sans', weights: '400;500;600;700' },
    bold: { family: 'Space+Grotesk', weights: '400;500;600;700' },
    handwritten: { family: 'Caveat', weights: '400;500;600;700' },
    mono: { family: 'JetBrains+Mono', weights: '400;500;600;700' },
    elegant: { family: 'Cormorant+Garamond', weights: '400;500;600;700' },
  };

  function getFontLink(config: Record<string, unknown>): string {
    const fontStyle = (config.font_style as string) || 'modern';
    const font = FONT_MAP[fontStyle];
    if (!font) return '';
    return `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${font.family}:wght@${font.weights}&display=swap">`;
  }

  // ── Fetch widget data ──
  async function fetchWidgetData(projectId: string): Promise<WidgetData> {
    const res = await fetch(`${BASE_URL}/api/widget/${projectId}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return res.json();
  }

  // ── Track impression ──
  function trackImpression(projectId: string): void {
    try {
      fetch(`${BASE_URL}/api/widget/${projectId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'impression' }),
      }).catch(() => { /* silently fail */ });
    } catch {
      // ignore tracking errors
    }
  }

  // ── Carousel interactivity ──
  function initCarousel(shadowRoot: ShadowRoot): void {
    const wrapper = shadowRoot.querySelector('.opinafy-carousel-wrapper') as HTMLElement | null;
    if (!wrapper) return;

    const track = wrapper.querySelector('.opinafy-carousel-track') as HTMLElement;
    const slides = wrapper.querySelectorAll('.opinafy-carousel-slide');
    const dots = wrapper.querySelectorAll('.opinafy-dot');
    const prevBtn = wrapper.querySelector('[data-action="prev"]') as HTMLElement | null;
    const nextBtn = wrapper.querySelector('[data-action="next"]') as HTMLElement | null;

    if (!track || slides.length === 0) return;

    const speed = parseInt(wrapper.getAttribute('data-autoplay-speed') || '5000', 10);
    let currentIndex = 0;
    let autoplayTimer: ReturnType<typeof setInterval> | null = null;

    function updateDots(): void {
      if (dots.length === 0) return;
      // Map currentIndex to dot index (dots may be fewer than slides)
      const dotIndex = Math.min(
        Math.floor(currentIndex * dots.length / slides.length),
        dots.length - 1
      );
      dots.forEach((d, i) => d.classList.toggle('active', i === dotIndex));
    }

    function scrollToIndex(index: number): void {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;

      const slide = slides[currentIndex] as HTMLElement;
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' });
      updateDots();
    }

    function next(): void { scrollToIndex(currentIndex + 1); }
    function prev(): void { scrollToIndex(currentIndex - 1); }

    // Navigation buttons
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });

    // Dot navigation - map dot index back to slide index
    dots.forEach((dot, dotIdx) => {
      dot.addEventListener('click', () => {
        const slideIdx = Math.floor(dotIdx * slides.length / dots.length);
        scrollToIndex(slideIdx);
        resetAutoplay();
      });
    });

    // Sync on manual scroll
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    track.addEventListener('scroll', () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = track.scrollLeft;
        let closest = 0;
        let minDist = Infinity;
        slides.forEach((s, i) => {
          const el = s as HTMLElement;
          const dist = Math.abs(el.offsetLeft - track.offsetLeft - scrollLeft);
          if (dist < minDist) { minDist = dist; closest = i; }
        });
        if (closest !== currentIndex) {
          currentIndex = closest;
          updateDots();
        }
      }, 100);
    });

    // ── Drag / Swipe support ──
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    track.addEventListener('mousedown', (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX;
      scrollStart = track.scrollLeft;
      track.classList.add('dragging');
      pauseAutoplay();
    });

    track.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const dx = e.pageX - startX;
      track.scrollLeft = scrollStart - dx;
    });

    function endDrag(): void {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove('dragging');
      // Snap to nearest slide
      const scrollLeft = track.scrollLeft;
      let closest = 0;
      let minDist = Infinity;
      slides.forEach((s, i) => {
        const el = s as HTMLElement;
        const dist = Math.abs(el.offsetLeft - track.offsetLeft - scrollLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      scrollToIndex(closest);
      resetAutoplay();
    }

    track.addEventListener('mouseup', endDrag);
    track.addEventListener('mouseleave', endDrag);

    // Touch swipe
    track.addEventListener('touchstart', (e: TouchEvent) => {
      startX = e.touches[0].pageX;
      scrollStart = track.scrollLeft;
      pauseAutoplay();
    }, { passive: true });

    track.addEventListener('touchmove', (e: TouchEvent) => {
      const dx = e.touches[0].pageX - startX;
      track.scrollLeft = scrollStart - dx;
    }, { passive: true });

    track.addEventListener('touchend', () => {
      const scrollLeft = track.scrollLeft;
      let closest = 0;
      let minDist = Infinity;
      slides.forEach((s, i) => {
        const el = s as HTMLElement;
        const dist = Math.abs(el.offsetLeft - track.offsetLeft - scrollLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      scrollToIndex(closest);
      resetAutoplay();
    });

    // Autoplay (no progress bar)
    function startAutoplay(): void {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = setInterval(next, speed);
    }

    function pauseAutoplay(): void {
      if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; }
    }

    function resetAutoplay(): void {
      startAutoplay();
    }

    // Pause on hover
    wrapper.addEventListener('mouseenter', pauseAutoplay);
    wrapper.addEventListener('mouseleave', () => { if (!isDragging) startAutoplay(); });

    startAutoplay();
  }

  // ── Initialize a single widget element ──
  async function initWidget(el: HTMLElement): Promise<void> {
    const projectId = el.getAttribute('data-project');
    if (!projectId) {
      console.warn('[Opinafy] Widget element missing data-project attribute.');
      return;
    }

    // Avoid double-init
    if (el.shadowRoot) return;

    // Create Shadow DOM
    const shadow = el.attachShadow({ mode: 'open' });

    // Show loading spinner
    shadow.innerHTML = `
      <style>
        :host { display: block; }
        .opinafy-loading { display: flex; align-items: center; justify-content: center; padding: 48px 16px; }
        .opinafy-spinner { width: 32px; height: 32px; border: 3px solid #e5e7eb; border-top-color: #2563eb; border-radius: 50%; animation: s .7s linear infinite; }
        @keyframes s { to { transform: rotate(360deg); } }
      </style>
      <div class="opinafy-loading"><div class="opinafy-spinner"></div></div>
    `;

    try {
      const data = await fetchWidgetData(projectId);

      // Inject Google Fonts + styles + rendered HTML
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const config = (data.config || {}) as any;
      const fontLink = getFontLink(config);
      const styles = getStyles(config);
      const html = renderWidget(data);

      shadow.innerHTML = `${fontLink}<style>${styles}</style>${html}`;

      // Init carousel interactivity if applicable
      if (data.config?.layout === 'carousel') {
        initCarousel(shadow);
      }

      // Track impression
      trackImpression(projectId);
    } catch (err) {
      shadow.innerHTML = `
        <style>
          :host { display: block; }
          .opinafy-error { text-align: center; padding: 32px 16px; color: #6b7280; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; }
        </style>
        <div class="opinafy-error">
          <p>No se pudieron cargar los testimonios.</p>
          <p>Por favor, intenta de nuevo m\u00e1s tarde.</p>
        </div>
      `;
      console.error('[Opinafy] Error loading widget:', err);
    }
  }

  // ── Boot ──
  function boot(): void {
    const widgets = document.querySelectorAll('#opinafy-widget, .opinafy-widget');
    widgets.forEach(el => initWidget(el as HTMLElement));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // ── Watch for dynamically added widget elements ──
  // This enables re-initialization in SPA environments (e.g. dashboard preview)
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          if (node instanceof HTMLElement) {
            // Check the node itself
            if (
              (node.id === 'opinafy-widget' || node.classList.contains('opinafy-widget')) &&
              node.getAttribute('data-project') &&
              !node.shadowRoot
            ) {
              initWidget(node);
            }
            // Check descendants
            const descendants = node.querySelectorAll
              ? node.querySelectorAll('#opinafy-widget, .opinafy-widget')
              : [];
            descendants.forEach((el) => {
              if (el instanceof HTMLElement && el.getAttribute('data-project') && !el.shadowRoot) {
                initWidget(el);
              }
            });
          }
        }
      }
    });

    // Start observing once the body is available
    const startObserver = (): void => {
      if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
      }
    };

    if (document.body) {
      startObserver();
    } else {
      document.addEventListener('DOMContentLoaded', startObserver);
    }
  }

  // ── Custom re-init event ──
  // Dispatch window event 'opinafy-init' to re-scan and initialize new widgets
  window.addEventListener('opinafy-init', () => {
    const elements = document.querySelectorAll('#opinafy-widget, .opinafy-widget');
    elements.forEach((el) => {
      if (el instanceof HTMLElement && el.getAttribute('data-project') && !el.shadowRoot) {
        initWidget(el);
      }
    });
  });
})();
