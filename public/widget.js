"use strict";(()=>{var Y={modern:"'Inter', system-ui, -apple-system, sans-serif",serif:"'Playfair Display', Georgia, 'Times New Roman', serif",rounded:"'Nunito', system-ui, sans-serif",minimal:"'DM Sans', system-ui, sans-serif",bold:"'Space Grotesk', system-ui, sans-serif",handwritten:"'Caveat', cursive",mono:"'JetBrains Mono', 'Fira Code', monospace",elegant:"'Cormorant Garamond', Georgia, serif"};function C(o){let a=o.replace("#","");if(a.length<6)return!1;let i=parseInt(a.slice(0,2),16),n=parseInt(a.slice(2,4),16),d=parseInt(a.slice(4,6),16);return i<245||n<245||d<245}function N(o){let a=o?.primary_color||"#2563eb",i=o?.background_color||"#ffffff",n=o?.text_color||"#1f2937",l=(o?.theme||"light")==="dark",f=o?.font_style||"modern",h=Y[f]||Y.modern,x=l?"#1f2937":(C(i),"#ffffff"),k=l?"#374151":C(i)?"rgba(0,0,0,0.08)":"#e5e7eb",c=l?"0 1px 3px rgba(0,0,0,0.4)":C(i)?"0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)":"0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",t=l?"0 4px 12px rgba(0,0,0,0.5)":C(i)?"0 8px 24px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.06)":"0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)";return`
    :host {
      display: block;
      font-family: ${h};
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
      --opinafy-primary: ${a};
      --opinafy-bg: ${l?"#1f2937":i};
      --opinafy-text: ${l?"#f3f4f6":n};
      --opinafy-text-secondary: ${l?"#9ca3af":"#6b7280"};
      --opinafy-border: ${k};
      --opinafy-card-bg: ${x};
      --opinafy-card-shadow: ${c};
      --opinafy-card-shadow-hover: ${t};
      --opinafy-star-filled: #f59e0b;
      --opinafy-star-empty: ${l?"#4b5563":"#d1d5db"};
      --opinafy-radius: ${o?.border_radius??12}px;
      --opinafy-radius-sm: ${Math.max((o?.border_radius??12)-4,4)}px;

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
  `}var V={google:{name:"Google",color:"#4285F4"},tripadvisor:{name:"TripAdvisor",color:"#00AF87"},trustpilot:{name:"Trustpilot",color:"#00B67A"},facebook:{name:"Facebook",color:"#1877F2"},yelp:{name:"Yelp",color:"#D32323"},capterra:{name:"Capterra",color:"#FF9D28"},g2:{name:"G2",color:"#FF492C"}};function G(o){let{config:a,testimonials:i}=o;if(!i||i.length===0)return'<div class="opinafy-root"><div class="opinafy-error"><p>No hay testimonios para mostrar.</p></div></div>';let n;switch(a.layout){case"carousel":n=K(o);break;case"grid":n=U(o);break;case"wall":n=Q(o);break;case"single":n=Z(o);break;case"badge":n=ee(o);break;case"popup":n=oe(o);break;default:n=U(o)}return`<div class="opinafy-root">${n}${a.show_branding?ne():""}</div>`}function K(o){let{testimonials:a,config:i}=o,n=i.autoplay_speed||5e3,d=a.length,l=d>1,f=a.map((x,k)=>`<div class="opinafy-carousel-slide" data-index="${k}">${H(x,i)}</div>`).join(""),h=d>3;return`
    <div class="opinafy-carousel-wrapper${h?"":" opinafy-no-nav"}" data-autoplay-speed="${n}" data-count="${d}">
      ${h?`<button class="opinafy-carousel-nav opinafy-carousel-prev" data-action="prev" aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>`:""}
      <div class="opinafy-carousel-track">
        ${f}
      </div>
      ${h?`<button class="opinafy-carousel-nav opinafy-carousel-next" data-action="next" aria-label="Siguiente">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>`:""}
    </div>
  `}function U(o){return`<div class="opinafy-grid">${o.testimonials.map(i=>H(i,o.config)).join("")}</div>`}function Q(o){return`<div class="opinafy-wall">${o.testimonials.map(i=>H(i,o.config)).join("")}</div>`}function Z(o){let a=o.testimonials[0];return`<div class="opinafy-single">${H(a,o.config)}</div>`}function ee(o){let{testimonials:a}=o,i=a.reduce((d,l)=>d+l.rating,0)/a.length,n=a[0];return`
    <div class="opinafy-badge">
      <div class="opinafy-badge-score">
        <span class="opinafy-badge-number">${i.toFixed(1)}</span>
        <div class="opinafy-stars opinafy-stars-sm">${O(Math.round(i))}</div>
        <span class="opinafy-badge-count">${a.length} opiniones</span>
      </div>
      ${n?`<div class="opinafy-badge-latest">
        <p class="opinafy-badge-text">"${v(n.content.substring(0,80))}${n.content.length>80?"...":""}"</p>
        <span class="opinafy-badge-author">\u2014 ${v(n.author_name)}</span>
      </div>`:""}
    </div>
  `}function oe(o){let{testimonials:a}=o,i=a.map((n,d)=>{let l=n.author_name.split(" ").map(x=>x[0]).join("").toUpperCase().slice(0,2),f="\u2605".repeat(Math.min(n.rating,5)),h=te(n.created_at);return`
      <div class="opinafy-popup-item" data-popup-index="${d}" style="${d>0?"display:none;":""}">
        <div class="opinafy-popup-card">
          <button class="opinafy-popup-close" data-action="close-popup" aria-label="Cerrar">&times;</button>
          <div class="opinafy-popup-content">
            <div class="opinafy-popup-avatar">${l}</div>
            <div>
              <div class="opinafy-popup-text">${v(n.author_name)} dej\xF3 una rese\xF1a de ${f}</div>
              <div class="opinafy-popup-time">${h}</div>
            </div>
          </div>
        </div>
      </div>
    `}).join("");return`<div class="opinafy-popup" data-popup-count="${a.length}">${i}</div>`}function te(o){try{let a=new Date,i=new Date(o),n=a.getTime()-i.getTime(),d=Math.floor(n/6e4);if(d<1)return"Hace un momento";if(d<60)return`Hace ${d} minuto${d===1?"":"s"}`;let l=Math.floor(d/60);if(l<24)return`Hace ${l} hora${l===1?"":"s"}`;let f=Math.floor(l/24);return f<7?`Hace ${f} d\xEDa${f===1?"":"s"}`:`Hace ${Math.floor(f/7)} semana${Math.floor(f/7)===1?"":"s"}`}catch{return"Hace 2 minutos"}}function H(o,a){let{author_name:i,company:n,role:d,content:l,rating:f,created_at:h,is_company_verified:x,video_url:k}=o,t=`<div class="opinafy-avatar">${i.split(" ").map(L=>L[0]).join("").toUpperCase().slice(0,2)}</div>`,e="";d&&n?e=`${v(d)} en ${v(n)}`:n?e=v(n):d&&(e=v(d)),x&&n&&(e+=' <span class="opinafy-verified" title="Empresa verificada">\u2713</span>');let p="";if(h)try{p=new Date(h).toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"})}catch{}let s=!!k,u=s?`
    <div class="opinafy-video-container">
      <video class="opinafy-video" controls playsinline preload="metadata">
        <source src="${k}" type="video/mp4">
        <source src="${k}" type="video/webm">
      </video>
    </div>`:"",y=a.video_display_mode||"full";if(s&&y!=="full"){if(y==="video_only")return`
        <div class="opinafy-card opinafy-card-has-video opinafy-card-video-only">
          ${u}
        </div>
      `;if(y==="video_stars")return`
        <div class="opinafy-card opinafy-card-has-video">
          ${u}
          <div class="opinafy-card-body">
            <div class="opinafy-author-name">${v(i)}</div>
            ${f>0?`<div class="opinafy-stars">${O(f)}</div>`:""}
          </div>
        </div>
      `;if(y==="video_name")return`
        <div class="opinafy-card opinafy-card-has-video">
          ${u}
          <div class="opinafy-card-body">
            <div class="opinafy-author-name">${v(i)}</div>
            ${n?`<div class="opinafy-author-meta">${v(n)}</div>`:""}
          </div>
        </div>
      `}let _=l.length>250,m=a.show_avatar!==!1,b=a.show_rating!==!1,T=a.show_date!==!1,E=a.show_company!==!1;return`
    <div class="opinafy-card${s?" opinafy-card-has-video":""}">
      ${u}
      <div class="${s?"opinafy-card-body":""}">
        ${b&&f>0?`<div class="opinafy-stars">${O(f)}</div>`:""}
        <div class="opinafy-content"><p>${v(l)}</p></div>
        ${_?`<button class="opinafy-read-more" onclick="var c=this.previousElementSibling;c.classList.toggle('opinafy-content-expanded');this.textContent=c.classList.contains('opinafy-content-expanded')?'Leer menos':'Leer m\xE1s'">Leer m\xE1s</button>`:""}
        <div class="opinafy-card-footer">
          <div class="opinafy-card-header">
            ${m?t:""}
            <div class="opinafy-author">
              <div class="opinafy-author-name">${v(i)}</div>
              ${E&&e?`<div class="opinafy-author-meta">${e}</div>`:""}
            </div>
          </div>
          ${T&&p?`<div class="opinafy-date">${p}</div>`:""}
          ${ae(o)}
        </div>
      </div>
    </div>
  `}function ae(o){let a=o.source_platform||o.source;if(!a||a==="form")return"";let i=V[a];if(!i)return"";let n=i.color;return`<div class="opinafy-source-badge" style="--badge-color: ${n}"><span class="opinafy-source-dot" style="background: ${n}"></span>${v(i.name)}</div>`}function O(o){let a=[];for(let i=1;i<=5;i++)i<=o?a.push('<svg class="opinafy-star opinafy-star-filled" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'):a.push('<svg class="opinafy-star opinafy-star-empty" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>');return a.join("")}function ne(){return`
    <div class="opinafy-branding">
      <a href="https://opinafy.com?ref=widget" target="_blank" rel="noopener noreferrer">
        <svg class="opinafy-branding-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"/></svg>
        Powered by Opinafy
      </a>
    </div>
  `}function v(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}(function(){function o(){let c=document.querySelectorAll("script[src]");for(let t=0;t<c.length;t++){let e=c[t].src;if((e.includes("widget.js")||e.includes("opinafy"))&&(e.includes("localhost")||e.includes("127.0.0.1"))){let p=new URL(e);return`${p.protocol}//${p.host}`}}return"https://opinafy.com"}let a=o(),i={modern:{family:"Inter",weights:"400;500;600;700"},serif:{family:"Playfair+Display",weights:"400;500;600;700"},rounded:{family:"Nunito",weights:"400;500;600;700"},minimal:{family:"DM+Sans",weights:"400;500;600;700"},bold:{family:"Space+Grotesk",weights:"400;500;600;700"},handwritten:{family:"Caveat",weights:"400;500;600;700"},mono:{family:"JetBrains+Mono",weights:"400;500;600;700"},elegant:{family:"Cormorant+Garamond",weights:"400;500;600;700"}};function n(c){let t=c.font_style||"modern",e=i[t];return e?`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${e.family}:wght@${e.weights}&display=swap">`:""}async function d(c){let t=await fetch(`${a}/api/widget/${c}`,{method:"GET",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}function l(c){try{fetch(`${a}/api/widget/${c}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"impression"})}).catch(()=>{})}catch{}}function f(c){let t=c.querySelector(".opinafy-carousel-wrapper");if(!t)return;let e=t.querySelector(".opinafy-carousel-track"),p=t.querySelectorAll(".opinafy-carousel-slide"),s=t.querySelectorAll(".opinafy-dot"),u=t.querySelector('[data-action="prev"]'),y=t.querySelector('[data-action="next"]');if(!e||p.length===0)return;let _=parseInt(t.getAttribute("data-autoplay-speed")||"5000",10),m=0,b=null;function T(){let r=e.scrollLeft,$=0,M=1/0;return p.forEach((X,J)=>{let q=Math.abs(X.offsetLeft-e.offsetLeft-r);q<M&&(M=q,$=J)}),$}function E(){if(s.length===0)return;let r=s.length===p.length?m:Math.min(Math.round(m*(s.length-1)/(p.length-1)),s.length-1);s.forEach(($,M)=>$.classList.toggle("active",M===r))}function L(r){r<0&&(r=p.length-1),r>=p.length&&(r=0),m=r;let $=p[m];e.scrollTo({left:$.offsetLeft-e.offsetLeft,behavior:"smooth"}),E()}function z(){L(m+1)}function w(){L(m-1)}u&&u.addEventListener("click",()=>{w(),D()}),y&&y.addEventListener("click",()=>{z(),D()}),s.forEach((r,$)=>{r.addEventListener("click",()=>{let M=s.length===p.length?$:Math.round($*(p.length-1)/(s.length-1));L(M),D()})});let S=null;e.addEventListener("scroll",()=>{S&&clearTimeout(S),S=setTimeout(()=>{let r=T();r!==m&&(m=r,E())},150)});let g=!1,A=!1,R=0,B=0;function F(r){g=!0,A=!1,R=r,B=e.scrollLeft,e.style.scrollSnapType="none",e.style.scrollBehavior="auto",W()}function P(r){if(!g)return;let $=r-R;Math.abs($)>5&&(A=!0),e.scrollLeft=B-$}function I(){if(!g)return;g=!1,e.style.scrollSnapType="x mandatory",e.style.scrollBehavior="smooth";let r=T();L(r),D()}e.addEventListener("mousedown",r=>{F(r.pageX),r.preventDefault()}),e.addEventListener("mousemove",r=>{g&&(P(r.pageX),r.preventDefault())}),e.addEventListener("mouseup",I),e.addEventListener("mouseleave",()=>{g&&I()}),e.addEventListener("click",r=>{A&&(r.preventDefault(),r.stopPropagation())},!0),e.addEventListener("touchstart",r=>{F(r.touches[0].pageX)},{passive:!0}),e.addEventListener("touchmove",r=>{P(r.touches[0].pageX)},{passive:!0}),e.addEventListener("touchend",I);function j(){b&&clearInterval(b),b=setInterval(z,_)}function W(){b&&(clearInterval(b),b=null)}function D(){j()}t.addEventListener("mouseenter",()=>{g||W()}),t.addEventListener("mouseleave",()=>{g||j()}),j()}function h(c){let t=c.querySelector(".opinafy-popup");if(!t)return;let e="opinafy-popup-dismissed";try{if(sessionStorage.getItem(e)==="1"){t.style.display="none";return}}catch{}let p=parseInt(t.getAttribute("data-popup-count")||"0",10);if(p===0)return;let s=0,u=null,y=null;function _(){return Array.from(t.querySelectorAll(".opinafy-popup-item"))}function m(w){_().forEach((g,A)=>{g.style.display=A===w?"":"none",g.classList.remove("opinafy-popup-hiding")})}function b(w){let g=_()[s];g?(g.classList.add("opinafy-popup-hiding"),setTimeout(()=>{g.style.display="none",g.classList.remove("opinafy-popup-hiding"),w&&w()},400)):w&&w()}function T(){u&&clearTimeout(u),y&&clearInterval(y),b(()=>{t.style.display="none"});try{sessionStorage.setItem(e,"1")}catch{}}function E(){u&&clearTimeout(u),u=setTimeout(()=>{b()},8e3)}function L(){p<=1||(y=setInterval(()=>{b(()=>{s=(s+1)%p,m(s),E()})},15e3))}t.addEventListener("click",w=>{w.target.closest('[data-action="close-popup"]')&&T()}),_().forEach(w=>{w.style.display="none"}),setTimeout(()=>{m(0),E(),L()},3e3)}async function x(c){let t=c.getAttribute("data-project");if(!t){console.warn("[Opinafy] Widget element missing data-project attribute.");return}if(c.shadowRoot)return;let e=c.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        :host { display: block; }
        .opinafy-loading { display: flex; align-items: center; justify-content: center; padding: 48px 16px; }
        .opinafy-spinner { width: 32px; height: 32px; border: 3px solid #e5e7eb; border-top-color: #2563eb; border-radius: 50%; animation: s .7s linear infinite; }
        @keyframes s { to { transform: rotate(360deg); } }
      </style>
      <div class="opinafy-loading"><div class="opinafy-spinner"></div></div>
    `;try{let p,s=window;s.__OPINAFY_PRELOAD__&&typeof s.__OPINAFY_PRELOAD__=="object"?(p=s.__OPINAFY_PRELOAD__,delete s.__OPINAFY_PRELOAD__):p=await d(t);let u=p.config||{},y=n(u),_=N(u),m=G(p);e.innerHTML=`${y}<style>${_}</style>${m}`,p.config?.layout==="carousel"&&f(e),p.config?.layout==="popup"&&h(e),l(t)}catch(p){e.innerHTML=`
        <style>
          :host { display: block; }
          .opinafy-error { text-align: center; padding: 32px 16px; color: #6b7280; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; }
        </style>
        <div class="opinafy-error">
          <p>No se pudieron cargar los testimonios.</p>
          <p>Por favor, intenta de nuevo m\xE1s tarde.</p>
        </div>
      `,console.error("[Opinafy] Error loading widget:",p)}}function k(){document.querySelectorAll("#opinafy-widget, .opinafy-widget").forEach(t=>x(t))}if(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",k):k(),typeof MutationObserver<"u"){let c=new MutationObserver(e=>{for(let p of e)for(let s of Array.from(p.addedNodes))s instanceof HTMLElement&&((s.id==="opinafy-widget"||s.classList.contains("opinafy-widget"))&&s.getAttribute("data-project")&&!s.shadowRoot&&x(s),(s.querySelectorAll?s.querySelectorAll("#opinafy-widget, .opinafy-widget"):[]).forEach(y=>{y instanceof HTMLElement&&y.getAttribute("data-project")&&!y.shadowRoot&&x(y)}))}),t=()=>{document.body&&c.observe(document.body,{childList:!0,subtree:!0})};document.body?t():document.addEventListener("DOMContentLoaded",t)}window.addEventListener("opinafy-init",()=>{document.querySelectorAll("#opinafy-widget, .opinafy-widget").forEach(t=>{t instanceof HTMLElement&&t.getAttribute("data-project")&&!t.shadowRoot&&x(t)})})})();})();
