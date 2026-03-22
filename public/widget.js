"use strict";(()=>{var U={modern:"'Inter', system-ui, -apple-system, sans-serif",serif:"'Playfair Display', Georgia, 'Times New Roman', serif",rounded:"'Nunito', system-ui, sans-serif",minimal:"'DM Sans', system-ui, sans-serif",bold:"'Space Grotesk', system-ui, sans-serif",handwritten:"'Caveat', cursive",mono:"'JetBrains Mono', 'Fira Code', monospace",elegant:"'Cormorant Garamond', Georgia, serif"};function O(e){let t=e.replace("#","");if(t.length<6)return!1;let i=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),c=parseInt(t.slice(4,6),16);return i<245||n<245||c<245}function G(e){let t=e?.primary_color||"#2563eb",i=e?.background_color||"#ffffff",n=e?.text_color||"#1f2937",l=(e?.theme||"light")==="dark",y=e?.font_style||"modern",b=U[y]||U.modern,L=l?"#1f2937":(O(i),"#ffffff"),m=l?"#374151":O(i)?"rgba(0,0,0,0.08)":"#e5e7eb",S=l?"0 1px 3px rgba(0,0,0,0.4)":O(i)?"0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)":"0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",M=l?"0 4px 12px rgba(0,0,0,0.5)":O(i)?"0 8px 24px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.06)":"0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)";return`
    :host {
      display: block;
      font-family: ${b};
      line-height: 1.5;
      color: ${l?"#f3f4f6":n};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* \u2500\u2500 CSS Custom Properties \u2500\u2500 */
    .opinafy-root {
      --opinafy-primary: ${t};
      --opinafy-bg: ${l?"#1f2937":i};
      --opinafy-text: ${l?"#f3f4f6":n};
      --opinafy-text-secondary: ${l?"#9ca3af":"#6b7280"};
      --opinafy-border: ${m};
      --opinafy-card-bg: ${L};
      --opinafy-card-shadow: ${S};
      --opinafy-card-shadow-hover: ${M};
      --opinafy-star-filled: #f59e0b;
      --opinafy-star-empty: ${l?"#4b5563":"#d1d5db"};
      --opinafy-radius: ${e?.border_radius??12}px;
      --opinafy-radius-sm: ${Math.max((e?.border_radius??12)-4,4)}px;

      background: var(--opinafy-bg);
      color: var(--opinafy-text);
      padding: 4px;
    }

    /* \u2500\u2500 Loading Spinner \u2500\u2500 */
    .opinafy-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 48px 16px;
    }

    .opinafy-spinner {
      width: 32px;
      height: 32px;
      border: 3px solid var(--opinafy-border, #e5e7eb);
      border-top-color: var(--opinafy-primary, #2563eb);
      border-radius: 50%;
      animation: opinafy-spin 0.7s linear infinite;
    }

    @keyframes opinafy-spin {
      to { transform: rotate(360deg); }
    }

    /* \u2500\u2500 Error \u2500\u2500 */
    .opinafy-error {
      text-align: center;
      padding: 32px 16px;
      color: var(--opinafy-text-secondary);
      font-size: 14px;
    }

    .opinafy-error p {
      margin-bottom: 8px;
    }

    /* \u2500\u2500 Card Base \u2500\u2500 */
    .opinafy-card {
      background: var(--opinafy-card-bg);
      border: 1px solid var(--opinafy-border);
      border-radius: var(--opinafy-radius);
      padding: 24px;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
      box-shadow: var(--opinafy-card-shadow);
      display: flex;
      flex-direction: column;
      min-height: 220px;
    }

    .opinafy-card:hover {
      box-shadow: var(--opinafy-card-shadow-hover);
      transform: translateY(-1px);
    }

    .opinafy-card-header {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .opinafy-card-footer {
      margin-top: auto;
      padding-top: 12px;
    }

    /* \u2500\u2500 Avatar \u2500\u2500 */
    .opinafy-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;
      background: var(--opinafy-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
    }

    .opinafy-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* \u2500\u2500 Author Info \u2500\u2500 */
    .opinafy-author {
      flex: 1;
      min-width: 0;
    }

    .opinafy-author-name {
      font-weight: 600;
      font-size: 15px;
      color: var(--opinafy-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .opinafy-author-meta {
      font-size: 13px;
      color: var(--opinafy-text-secondary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .opinafy-verified {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: #dcfce7;
      color: #16a34a;
      font-size: 10px;
      font-weight: 700;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-left: 4px;
      vertical-align: middle;
      line-height: 1;
    }

    /* \u2500\u2500 Stars \u2500\u2500 */
    .opinafy-stars {
      display: flex;
      gap: 2px;
      margin-bottom: 10px;
    }

    .opinafy-star {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }

    .opinafy-star-filled {
      color: var(--opinafy-star-filled);
    }

    .opinafy-star-empty {
      color: var(--opinafy-star-empty);
    }

    /* \u2500\u2500 Video in Cards \u2500\u2500 */
    .opinafy-card-has-video {
      padding: 0;
      overflow: hidden;
    }

    .opinafy-card-has-video .opinafy-card-body {
      padding: 24px;
    }

    .opinafy-video-container {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      background: #000;
    }

    .opinafy-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: var(--opinafy-radius) var(--opinafy-radius) 0 0;
    }

    .opinafy-video-vertical .opinafy-video-container {
      aspect-ratio: 9 / 16;
      max-height: 480px;
    }

    .opinafy-card-video-only {
      min-height: auto;
    }

    .opinafy-card-video-only .opinafy-video {
      border-radius: var(--opinafy-radius);
    }

    /* \u2500\u2500 Audio Player \u2500\u2500 */
    .opinafy-audio {
      padding: 16px;
      background: linear-gradient(135deg, var(--opinafy-primary), color-mix(in srgb, var(--opinafy-primary) 70%, #000));
      border-radius: var(--opinafy-radius) var(--opinafy-radius) 0 0;
    }

    .opinafy-audio-player {
      width: 100%;
      height: 40px;
      border-radius: 20px;
    }

    /* \u2500\u2500 Clickable cards (A/B tracking) \u2500\u2500 */
    .opinafy-card[data-testimonial-id] {
      cursor: pointer;
    }

    /* \u2500\u2500 Content \u2500\u2500 */
    .opinafy-content {
      font-size: 14px;
      line-height: 1.65;
      color: var(--opinafy-text);
      margin-bottom: 12px;
      flex: 1;
      overflow: hidden;
      position: relative;
    }

    .opinafy-content p {
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .opinafy-content-expanded p {
      display: block;
      -webkit-line-clamp: unset;
    }

    /* \u2500\u2500 Testimonial Photo \u2500\u2500 */
    .opinafy-photo {
      margin: 8px 0 12px;
      border-radius: var(--opinafy-radius-sm);
      overflow: hidden;
    }

    .opinafy-photo img {
      width: 100%;
      max-height: 240px;
      object-fit: cover;
      display: block;
      border-radius: var(--opinafy-radius-sm);
    }

    /* \u2500\u2500 Owner Reply \u2500\u2500 */
    .opinafy-reply {
      margin: 10px 0 12px;
      padding: 10px 14px;
      background: ${l?"#374151":"#f3f4f6"};
      border-left: 3px solid var(--opinafy-primary);
      border-radius: 0 var(--opinafy-radius-sm) var(--opinafy-radius-sm) 0;
    }

    .opinafy-reply-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--opinafy-primary);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    .opinafy-reply-text {
      font-size: 13px;
      line-height: 1.5;
      color: var(--opinafy-text-secondary);
      margin: 0;
    }

    .opinafy-read-more {
      display: inline-block;
      margin-top: 6px;
      font-size: 13px;
      font-weight: 500;
      color: var(--opinafy-primary);
      cursor: pointer;
      border: none;
      background: none;
      padding: 0;
      text-decoration: none;
    }

    .opinafy-read-more:hover {
      text-decoration: underline;
    }

    .opinafy-date {
      font-size: 12px;
      color: var(--opinafy-text-secondary);
    }

    /* \u2500\u2500 Source Badge \u2500\u2500 */
    .opinafy-source-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      margin-top: 8px;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 500;
      color: var(--badge-color, var(--opinafy-text-secondary));
      background: color-mix(in srgb, var(--badge-color, #6366f1) 10%, transparent);
    }

    .opinafy-source-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    /* \u2500\u2500 Branding \u2500\u2500 */
    .opinafy-branding {
      text-align: center;
      padding: 16px 0 4px;
    }

    .opinafy-branding a {
      font-size: 12px;
      color: var(--opinafy-text-secondary);
      text-decoration: none;
      transition: color 0.15s ease;
    }

    .opinafy-branding a:hover {
      color: var(--opinafy-primary);
    }

    .opinafy-branding-icon {
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: -2px;
      margin-right: 4px;
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       LAYOUT: Carousel
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    .opinafy-carousel-wrapper {
      position: relative;
      overflow: hidden;
      padding: 0 52px;
    }

    .opinafy-carousel-wrapper.opinafy-no-nav {
      padding: 0;
    }

    .opinafy-carousel-track {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      gap: 16px;
      padding: 4px;
    }

    .opinafy-carousel-track::-webkit-scrollbar {
      display: none;
    }

    .opinafy-carousel-slide {
      flex: 0 0 100%;
      scroll-snap-align: start;
      min-width: 0;
    }

    @media (min-width: 640px) {
      .opinafy-carousel-slide {
        flex: 0 0 calc(50% - 8px);
      }
    }

    @media (min-width: 1024px) {
      .opinafy-carousel-slide {
        flex: 0 0 calc(33.333% - 11px);
      }
    }

    .opinafy-carousel-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--opinafy-card-bg);
      border: 1px solid var(--opinafy-border);
      box-shadow: var(--opinafy-card-shadow);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 2;
      transition: background 0.15s ease, box-shadow 0.15s ease;
      color: var(--opinafy-text);
      padding: 0;
      font-size: 0;
    }

    .opinafy-carousel-nav:hover {
      box-shadow: var(--opinafy-card-shadow-hover);
      background: var(--opinafy-primary);
      color: #ffffff;
    }

    .opinafy-carousel-nav svg {
      width: 18px;
      height: 18px;
    }

    .opinafy-carousel-prev {
      left: 0;
    }

    .opinafy-carousel-next {
      right: 0;
    }

    .opinafy-carousel-dots {
      display: flex;
      justify-content: center;
      gap: 8px;
      padding: 16px 0 4px;
    }

    .opinafy-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--opinafy-border);
      border: none;
      padding: 0;
      cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .opinafy-dot:hover {
      transform: scale(1.3);
    }

    .opinafy-dot.active {
      background: var(--opinafy-primary);
      transform: scale(1.2);
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       LAYOUT: Grid
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    .opinafy-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      align-items: stretch;
    }

    .opinafy-grid .opinafy-card {
      height: 100%;
    }

    @media (min-width: 640px) {
      .opinafy-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .opinafy-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       LAYOUT: Wall / Masonry
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    .opinafy-wall {
      columns: 1;
      column-gap: 16px;
    }

    .opinafy-wall .opinafy-card {
      break-inside: avoid;
      margin-bottom: 16px;
      display: inline-block;
      width: 100%;
    }

    @media (min-width: 640px) {
      .opinafy-wall {
        columns: 2;
      }
    }

    @media (min-width: 1024px) {
      .opinafy-wall {
        columns: 3;
      }
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       LAYOUT: Single / Featured
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    .opinafy-single {
      max-width: 640px;
      margin: 0 auto;
    }

    .opinafy-single .opinafy-card {
      padding: 32px;
    }

    .opinafy-single .opinafy-avatar {
      width: 56px;
      height: 56px;
      font-size: 20px;
    }

    .opinafy-single .opinafy-author-name {
      font-size: 17px;
    }

    .opinafy-single .opinafy-content {
      font-size: 16px;
      line-height: 1.7;
    }

    .opinafy-single .opinafy-stars .opinafy-star {
      width: 22px;
      height: 22px;
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       LAYOUT: Badge (floating)
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    .opinafy-badge-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      max-width: 300px;
      animation: opinafy-badge-in 0.4s ease-out;
    }

    @keyframes opinafy-badge-in {
      from {
        opacity: 0;
        transform: translateY(16px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .opinafy-badge-card {
      background: var(--opinafy-card-bg);
      border: 1px solid var(--opinafy-border);
      border-radius: var(--opinafy-radius);
      padding: 16px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      cursor: default;
    }

    .opinafy-badge-score {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 8px;
    }

    .opinafy-badge-number {
      font-size: 28px;
      font-weight: 700;
      color: var(--opinafy-primary);
      line-height: 1;
    }

    .opinafy-badge-details {
      font-size: 12px;
      color: var(--opinafy-text-secondary);
      line-height: 1.4;
    }

    .opinafy-badge-snippet {
      font-size: 13px;
      color: var(--opinafy-text);
      line-height: 1.5;
      margin-top: 8px;
      font-style: italic;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .opinafy-badge-author {
      font-size: 12px;
      color: var(--opinafy-text-secondary);
      margin-top: 6px;
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       LAYOUT: Popup (FOMO)
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    .opinafy-popup {
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 9999;
      max-width: 320px;
      pointer-events: none;
    }

    .opinafy-popup-item {
      pointer-events: auto;
      animation: opinafy-popup-in 0.5s ease-out forwards;
    }

    .opinafy-popup-item.opinafy-popup-hiding {
      animation: opinafy-popup-out 0.4s ease-in forwards;
    }

    @keyframes opinafy-popup-in {
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes opinafy-popup-out {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(-100%);
      }
    }

    .opinafy-popup-card {
      background: var(--opinafy-card-bg);
      border: 1px solid var(--opinafy-border);
      border-radius: var(--opinafy-radius);
      padding: 14px 16px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.15);
      position: relative;
    }

    .opinafy-popup-close {
      position: absolute;
      top: 6px;
      right: 8px;
      background: none;
      border: none;
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
      color: var(--opinafy-text-secondary);
      padding: 0 4px;
      transition: color 0.15s;
    }

    .opinafy-popup-close:hover {
      color: var(--opinafy-text);
    }

    .opinafy-popup-content {
      display: flex;
      align-items: center;
      gap: 12px;
      padding-right: 16px;
    }

    .opinafy-popup-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--opinafy-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase;
      flex-shrink: 0;
    }

    .opinafy-popup-text {
      font-size: 13px;
      font-weight: 500;
      color: var(--opinafy-text);
      line-height: 1.4;
    }

    .opinafy-popup-time {
      font-size: 12px;
      color: var(--opinafy-text-secondary);
      margin-top: 2px;
    }

    @media (max-width: 480px) {
      .opinafy-popup {
        left: 12px;
        right: 12px;
        max-width: none;
      }
    }

    /* \u2500\u2500 Carousel drag/swipe \u2500\u2500 */
    .opinafy-carousel-track {
      cursor: grab;
      -webkit-user-select: none;
      user-select: none;
    }
    .opinafy-carousel-track:active {
      cursor: grabbing;
    }

    /* \u2500\u2500 Equal height cards in carousel \u2500\u2500 */
    .opinafy-carousel-slide .opinafy-card {
      height: 100%;
    }

    /* \u2500\u2500 Equal height cards in grid \u2500\u2500 */
    .opinafy-grid .opinafy-card {
      height: 100%;
    }

    /* \u2500\u2500 Responsive container adjustments \u2500\u2500 */
    @media (max-width: 480px) {
      .opinafy-card {
        padding: 16px;
      }

      .opinafy-avatar {
        width: 36px;
        height: 36px;
        font-size: 14px;
      }

      .opinafy-badge-container {
        left: 12px;
        right: 12px;
        max-width: none;
      }

      .opinafy-carousel-nav {
        display: none;
      }
    }
  `}var Q={google:{name:"Google",color:"#4285F4"},tripadvisor:{name:"TripAdvisor",color:"#00AF87"},trustpilot:{name:"Trustpilot",color:"#00B67A"},facebook:{name:"Facebook",color:"#1877F2"},yelp:{name:"Yelp",color:"#D32323"},capterra:{name:"Capterra",color:"#FF9D28"},g2:{name:"G2",color:"#FF492C"}};function J(e){let{config:t,testimonials:i}=e;if(!i||i.length===0)return'<div class="opinafy-root"><div class="opinafy-error"><p>No hay testimonios para mostrar.</p></div></div>';let n;switch(t.layout){case"carousel":n=Z(e);break;case"grid":n=X(e);break;case"wall":n=ee(e);break;case"single":n=oe(e);break;case"badge":n=ae(e);break;case"popup":n=te(e);break;default:n=X(e)}return`<div class="opinafy-root">${n}${t.show_branding?re():""}</div>`}function Z(e){let{testimonials:t,config:i}=e,n=i.autoplay_speed||5e3,c=t.length,l=c>1,y=t.map((L,m)=>`<div class="opinafy-carousel-slide" data-index="${m}">${j(L,i)}</div>`).join(""),b=c>3;return`
    <div class="opinafy-carousel-wrapper${b?"":" opinafy-no-nav"}" data-autoplay-speed="${n}" data-count="${c}">
      ${b?`<button class="opinafy-carousel-nav opinafy-carousel-prev" data-action="prev" aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>`:""}
      <div class="opinafy-carousel-track">
        ${y}
      </div>
      ${b?`<button class="opinafy-carousel-nav opinafy-carousel-next" data-action="next" aria-label="Siguiente">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>`:""}
    </div>
  `}function X(e){return`<div class="opinafy-grid">${e.testimonials.map(i=>j(i,e.config)).join("")}</div>`}function ee(e){return`<div class="opinafy-wall">${e.testimonials.map(i=>j(i,e.config)).join("")}</div>`}function oe(e){let t=e.testimonials[0];return`<div class="opinafy-single">${j(t,e.config)}</div>`}function ae(e){let{testimonials:t}=e,i=t.reduce((c,l)=>c+l.rating,0)/t.length,n=t[0];return`
    <div class="opinafy-badge">
      <div class="opinafy-badge-score">
        <span class="opinafy-badge-number">${i.toFixed(1)}</span>
        <div class="opinafy-stars opinafy-stars-sm">${F(Math.round(i))}</div>
        <span class="opinafy-badge-count">${t.length} opiniones</span>
      </div>
      ${n?`<div class="opinafy-badge-latest">
        <p class="opinafy-badge-text">"${h(n.content.substring(0,80))}${n.content.length>80?"...":""}"</p>
        <span class="opinafy-badge-author">\u2014 ${h(n.author_name)}</span>
      </div>`:""}
    </div>
  `}function te(e){let{testimonials:t}=e,i=t.map((n,c)=>{let l=n.author_name.split(" ").map(L=>L[0]).join("").toUpperCase().slice(0,2),y="\u2605".repeat(Math.min(n.rating,5)),b=ie(n.created_at);return`
      <div class="opinafy-popup-item" data-popup-index="${c}" style="${c>0?"display:none;":""}">
        <div class="opinafy-popup-card">
          <button class="opinafy-popup-close" data-action="close-popup" aria-label="Cerrar">&times;</button>
          <div class="opinafy-popup-content">
            <div class="opinafy-popup-avatar">${l}</div>
            <div>
              <div class="opinafy-popup-text">${h(n.author_name)} dej\xF3 una rese\xF1a de ${y}</div>
              <div class="opinafy-popup-time">${b}</div>
            </div>
          </div>
        </div>
      </div>
    `}).join("");return`<div class="opinafy-popup" data-popup-count="${t.length}">${i}</div>`}function ie(e){try{let t=new Date,i=new Date(e),n=t.getTime()-i.getTime(),c=Math.floor(n/6e4);if(c<1)return"Hace un momento";if(c<60)return`Hace ${c} minuto${c===1?"":"s"}`;let l=Math.floor(c/60);if(l<24)return`Hace ${l} hora${l===1?"":"s"}`;let y=Math.floor(l/24);return y<7?`Hace ${y} d\xEDa${y===1?"":"s"}`:`Hace ${Math.floor(y/7)} semana${Math.floor(y/7)===1?"":"s"}`}catch{return"Hace 2 minutos"}}function j(e,t){let{author_name:i,company:n,role:c,content:l,rating:y,created_at:b,is_company_verified:L,video_url:m}=e,M=`<div class="opinafy-avatar">${i.split(" ").map(A=>A[0]).join("").toUpperCase().slice(0,2)}</div>`,p="";c&&n?p=`${h(c)} en ${h(n)}`:n?p=h(n):c&&(p=h(c)),L&&n&&(p+=' <span class="opinafy-verified" title="Empresa verificada">\u2713</span>');let a="";if(b)try{a=new Date(b).toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"})}catch{}let o=m?/\.(ogg|webm)$/i.test(m)&&!/video/i.test(m)||/audio/i.test(m)||/testimonio-audio/i.test(m):!1,r=!!m&&!o,d=!!m&&o,u=r?`
    <div class="opinafy-video-container">
      <video class="opinafy-video" controls playsinline preload="metadata">
        <source src="${m}" type="video/mp4">
        <source src="${m}" type="video/webm">
      </video>
    </div>`:"",g=d?`
    <div class="opinafy-audio">
      <audio controls preload="metadata" class="opinafy-audio-player">
        <source src="${m}" type="audio/webm">
        <source src="${m}" type="audio/ogg">
      </audio>
    </div>`:"",w=t.video_display_mode||"full";if(r&&w!=="full"){if(w==="video_only")return`
        <div class="opinafy-card opinafy-card-has-video opinafy-card-video-only" data-testimonial-id="${e.id}">
          ${u}
        </div>
      `;if(w==="video_stars")return`
        <div class="opinafy-card opinafy-card-has-video" data-testimonial-id="${e.id}">
          ${u}
          <div class="opinafy-card-body">
            <div class="opinafy-author-name">${h(i)}</div>
            ${y>0?`<div class="opinafy-stars">${F(y)}</div>`:""}
          </div>
        </div>
      `;if(w==="video_name")return`
        <div class="opinafy-card opinafy-card-has-video" data-testimonial-id="${e.id}">
          ${u}
          <div class="opinafy-card-body">
            <div class="opinafy-author-name">${h(i)}</div>
            ${n?`<div class="opinafy-author-meta">${h(n)}</div>`:""}
          </div>
        </div>
      `}let v=l.length>250,x=t.show_avatar!==!1,k=t.show_rating!==!1,E=t.show_date!==!1,T=t.show_company!==!1;return`
    <div class="opinafy-card${r?" opinafy-card-has-video":""}" data-testimonial-id="${e.id}">
      ${u}
      ${g}
      <div class="${r?"opinafy-card-body":""}">
        ${k&&y>0?`<div class="opinafy-stars">${F(y)}</div>`:""}
        <div class="opinafy-content"><p>${h(l)}</p></div>
        ${v?`<button class="opinafy-read-more" onclick="var c=this.previousElementSibling;c.classList.toggle('opinafy-content-expanded');this.textContent=c.classList.contains('opinafy-content-expanded')?'Leer menos':'Leer m\xE1s'">Leer m\xE1s</button>`:""}
        ${e.photo_url?`<div class="opinafy-photo"><img src="${e.photo_url}" alt="Foto de ${h(i)}" loading="lazy" /></div>`:""}
        ${e.owner_reply?`<div class="opinafy-reply"><div class="opinafy-reply-label">Respuesta del propietario</div><p class="opinafy-reply-text">${h(e.owner_reply)}</p></div>`:""}
        <div class="opinafy-card-footer">
          <div class="opinafy-card-header">
            ${x?M:""}
            <div class="opinafy-author">
              <div class="opinafy-author-name">${h(i)}</div>
              ${T&&p?`<div class="opinafy-author-meta">${p}</div>`:""}
            </div>
          </div>
          ${E&&a?`<div class="opinafy-date">${a}</div>`:""}
          ${ne(e)}
        </div>
      </div>
    </div>
  `}function ne(e){let t=e.source_platform||e.source;if(!t||t==="form")return"";let i=Q[t];if(!i)return"";let n=i.color;return`<div class="opinafy-source-badge" style="--badge-color: ${n}"><span class="opinafy-source-dot" style="background: ${n}"></span>${h(i.name)}</div>`}function F(e){let t=[];for(let i=1;i<=5;i++)i<=e?t.push('<svg class="opinafy-star opinafy-star-filled" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'):t.push('<svg class="opinafy-star opinafy-star-empty" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>');return t.join("")}function re(){return`
    <div class="opinafy-branding">
      <a href="https://opinafy.com?ref=widget" target="_blank" rel="noopener noreferrer">
        <svg class="opinafy-branding-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"/></svg>
        Powered by Opinafy
      </a>
    </div>
  `}function h(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}(function(){function e(){let p=document.querySelectorAll("script[src]");for(let a=0;a<p.length;a++){let o=p[a].src;if((o.includes("widget.js")||o.includes("opinafy"))&&(o.includes("localhost")||o.includes("127.0.0.1"))){let r=new URL(o);return`${r.protocol}//${r.host}`}}return"https://opinafy.com"}let t=e(),i={modern:{family:"Inter",weights:"400;500;600;700"},serif:{family:"Playfair+Display",weights:"400;500;600;700"},rounded:{family:"Nunito",weights:"400;500;600;700"},minimal:{family:"DM+Sans",weights:"400;500;600;700"},bold:{family:"Space+Grotesk",weights:"400;500;600;700"},handwritten:{family:"Caveat",weights:"400;500;600;700"},mono:{family:"JetBrains+Mono",weights:"400;500;600;700"},elegant:{family:"Cormorant+Garamond",weights:"400;500;600;700"}};function n(p){let a=p.font_style||"modern",o=i[a];return o?`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${o.family}:wght@${o.weights}&display=swap">`:""}async function c(p){let a=await fetch(`${t}/api/widget/${p}`,{method:"GET",headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`HTTP ${a.status}`);return a.json()}function l(p,a){try{fetch(`${t}/api/widget/${p}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"impression",testimonialIds:a})}).catch(()=>{})}catch{}}function y(p,a){try{fetch(`${t}/api/widget/${p}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"click",testimonialId:a})}).catch(()=>{})}catch{}}function b(p,a){p.querySelectorAll("[data-testimonial-id]").forEach(r=>{r.addEventListener("click",()=>{let d=r.getAttribute("data-testimonial-id");d&&y(a,d)})})}function L(p){let a=p.querySelector(".opinafy-carousel-wrapper");if(!a)return;let o=a.querySelector(".opinafy-carousel-track"),r=a.querySelectorAll(".opinafy-carousel-slide"),d=a.querySelectorAll(".opinafy-dot"),u=a.querySelector('[data-action="prev"]'),g=a.querySelector('[data-action="next"]');if(!o||r.length===0)return;let w=parseInt(a.getAttribute("data-autoplay-speed")||"5000",10),v=0,x=null;function k(){let s=o.scrollLeft,$=0,D=1/0;return r.forEach((V,K)=>{let N=Math.abs(V.offsetLeft-o.offsetLeft-s);N<D&&(D=N,$=K)}),$}function E(){if(d.length===0)return;let s=d.length===r.length?v:Math.min(Math.round(v*(d.length-1)/(r.length-1)),d.length-1);d.forEach(($,D)=>$.classList.toggle("active",D===s))}function T(s){s<0&&(s=r.length-1),s>=r.length&&(s=0),v=s;let $=r[v];o.scrollTo({left:$.offsetLeft-o.offsetLeft,behavior:"smooth"}),E()}function A(){T(v+1)}function P(){T(v-1)}u&&u.addEventListener("click",()=>{P(),I()}),g&&g.addEventListener("click",()=>{A(),I()}),d.forEach((s,$)=>{s.addEventListener("click",()=>{let D=d.length===r.length?$:Math.round($*(r.length-1)/(d.length-1));T(D),I()})});let z=null;o.addEventListener("scroll",()=>{z&&clearTimeout(z),z=setTimeout(()=>{let s=k();s!==v&&(v=s,E())},150)});let f=!1,C=!1,_=0,H=0;function W(s){f=!0,C=!1,_=s,H=o.scrollLeft,o.style.scrollSnapType="none",o.style.scrollBehavior="auto",Y()}function q(s){if(!f)return;let $=s-_;Math.abs($)>5&&(C=!0),o.scrollLeft=H-$}function R(){if(!f)return;f=!1,o.style.scrollSnapType="x mandatory",o.style.scrollBehavior="smooth";let s=k();T(s),I()}o.addEventListener("mousedown",s=>{W(s.pageX),s.preventDefault()}),o.addEventListener("mousemove",s=>{f&&(q(s.pageX),s.preventDefault())}),o.addEventListener("mouseup",R),o.addEventListener("mouseleave",()=>{f&&R()}),o.addEventListener("click",s=>{C&&(s.preventDefault(),s.stopPropagation())},!0),o.addEventListener("touchstart",s=>{W(s.touches[0].pageX)},{passive:!0}),o.addEventListener("touchmove",s=>{q(s.touches[0].pageX)},{passive:!0}),o.addEventListener("touchend",R);function B(){x&&clearInterval(x),x=setInterval(A,w)}function Y(){x&&(clearInterval(x),x=null)}function I(){B()}a.addEventListener("mouseenter",()=>{f||Y()}),a.addEventListener("mouseleave",()=>{f||B()}),B()}function m(p,a=!1){let o=p.querySelector(".opinafy-popup");if(!o)return;a&&(o.style.position="relative",o.style.bottom="auto",o.style.left="auto",o.style.maxWidth="100%",o.style.pointerEvents="auto");let r="opinafy-popup-dismissed";if(!a)try{if(sessionStorage.getItem(r)==="1"){o.style.display="none";return}}catch{}let d=parseInt(o.getAttribute("data-popup-count")||"0",10);if(d===0)return;let u=0,g=null,w=null;function v(){return Array.from(o.querySelectorAll(".opinafy-popup-item"))}function x(f){v().forEach((_,H)=>{_.style.display=H===f?"":"none",_.classList.remove("opinafy-popup-hiding")})}function k(f){let _=v()[u];_?(_.classList.add("opinafy-popup-hiding"),setTimeout(()=>{_.style.display="none",_.classList.remove("opinafy-popup-hiding"),f&&f()},400)):f&&f()}function E(){g&&clearTimeout(g),w&&clearInterval(w),k(()=>{o.style.display="none"});try{sessionStorage.setItem(r,"1")}catch{}}function T(){g&&clearTimeout(g),g=setTimeout(()=>{k()},8e3)}function A(){d<=1||(w=setInterval(()=>{k(()=>{u=(u+1)%d,x(u),T()})},15e3))}o.addEventListener("click",f=>{f.target.closest('[data-action="close-popup"]')&&E()}),v().forEach(f=>{f.style.display="none"}),setTimeout(()=>{x(0),a||(T(),A())},a?0:3e3)}async function S(p){let a=p.getAttribute("data-project");if(!a){console.warn("[Opinafy] Widget element missing data-project attribute.");return}if(p.shadowRoot)return;let o=p.attachShadow({mode:"open"});o.innerHTML=`
      <style>
        :host { display: block; }
        .opinafy-loading { display: flex; align-items: center; justify-content: center; padding: 48px 16px; }
        .opinafy-spinner { width: 32px; height: 32px; border: 3px solid #e5e7eb; border-top-color: #2563eb; border-radius: 50%; animation: s .7s linear infinite; }
        @keyframes s { to { transform: rotate(360deg); } }
      </style>
      <div class="opinafy-loading"><div class="opinafy-spinner"></div></div>
    `;try{let r,d=!1,u=window;u.__OPINAFY_PRELOAD__&&typeof u.__OPINAFY_PRELOAD__=="object"?(r=u.__OPINAFY_PRELOAD__,d=!0,delete u.__OPINAFY_PRELOAD__):r=await c(a);let g=r.config||{},w=n(g),v=G(g),x=J(r);o.innerHTML=`${w}<style>${v}</style>${x}`,r.config?.layout==="carousel"&&L(o),r.config?.layout==="popup"&&m(o,d),b(o,a);let k=(r.testimonials||[]).map(E=>E.id).filter(Boolean);l(a,k)}catch(r){o.innerHTML=`
        <style>
          :host { display: block; }
          .opinafy-error { text-align: center; padding: 32px 16px; color: #6b7280; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; }
        </style>
        <div class="opinafy-error">
          <p>No se pudieron cargar los testimonios.</p>
          <p>Por favor, intenta de nuevo m\xE1s tarde.</p>
        </div>
      `,console.error("[Opinafy] Error loading widget:",r)}}function M(){document.querySelectorAll("#opinafy-widget, .opinafy-widget").forEach(a=>S(a))}if(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M(),typeof MutationObserver<"u"){let p=new MutationObserver(o=>{for(let r of o)for(let d of Array.from(r.addedNodes))d instanceof HTMLElement&&((d.id==="opinafy-widget"||d.classList.contains("opinafy-widget"))&&d.getAttribute("data-project")&&!d.shadowRoot&&S(d),(d.querySelectorAll?d.querySelectorAll("#opinafy-widget, .opinafy-widget"):[]).forEach(g=>{g instanceof HTMLElement&&g.getAttribute("data-project")&&!g.shadowRoot&&S(g)}))}),a=()=>{document.body&&p.observe(document.body,{childList:!0,subtree:!0})};document.body?a():document.addEventListener("DOMContentLoaded",a)}window.addEventListener("opinafy-init",()=>{document.querySelectorAll("#opinafy-widget, .opinafy-widget").forEach(a=>{a instanceof HTMLElement&&a.getAttribute("data-project")&&!a.shadowRoot&&S(a)})})})();})();
