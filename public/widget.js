"use strict";(()=>{var q={modern:"'Inter', system-ui, -apple-system, sans-serif",serif:"'Playfair Display', Georgia, 'Times New Roman', serif",rounded:"'Nunito', system-ui, sans-serif",minimal:"'DM Sans', system-ui, sans-serif",bold:"'Space Grotesk', system-ui, sans-serif",handwritten:"'Caveat', cursive",mono:"'JetBrains Mono', 'Fira Code', monospace",elegant:"'Cormorant Garamond', Georgia, serif"};function M(o){let n=o.replace("#","");if(n.length<6)return!1;let t=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),p=parseInt(n.slice(4,6),16);return t<245||s<245||p<245}function G(o){let n=o?.primary_color||"#2563eb",t=o?.background_color||"#ffffff",s=o?.text_color||"#1f2937",c=(o?.theme||"light")==="dark",m=o?.font_style||"modern",y=q[m]||q.modern,x=c?"#1f2937":(M(t),"#ffffff"),d=c?"#374151":M(t)?"rgba(0,0,0,0.08)":"#e5e7eb",a=c?"0 1px 3px rgba(0,0,0,0.4)":M(t)?"0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)":"0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",e=c?"0 4px 12px rgba(0,0,0,0.5)":M(t)?"0 8px 24px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.06)":"0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)";return`
    :host {
      display: block;
      font-family: ${y};
      line-height: 1.5;
      color: ${c?"#f3f4f6":s};
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
      --opinafy-primary: ${n};
      --opinafy-bg: ${c?"#1f2937":t};
      --opinafy-text: ${c?"#f3f4f6":s};
      --opinafy-text-secondary: ${c?"#9ca3af":"#6b7280"};
      --opinafy-border: ${d};
      --opinafy-card-bg: ${x};
      --opinafy-card-shadow: ${a};
      --opinafy-card-shadow-hover: ${e};
      --opinafy-star-filled: #f59e0b;
      --opinafy-star-empty: ${c?"#4b5563":"#d1d5db"};
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
      margin-bottom: 12px;
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
  `}var J={google:{name:"Google",color:"#4285F4"},tripadvisor:{name:"TripAdvisor",color:"#00AF87"},trustpilot:{name:"Trustpilot",color:"#00B67A"},facebook:{name:"Facebook",color:"#1877F2"},yelp:{name:"Yelp",color:"#D32323"},capterra:{name:"Capterra",color:"#FF9D28"},g2:{name:"G2",color:"#FF492C"}};function U(o){let{config:n,testimonials:t}=o;if(!t||t.length===0)return'<div class="opinafy-root"><div class="opinafy-error"><p>No hay testimonios para mostrar.</p></div></div>';let s;switch(n.layout){case"carousel":s=V(o);break;case"grid":s=P(o);break;case"wall":s=K(o);break;case"single":s=Q(o);break;case"badge":s=Z(o);break;default:s=P(o)}return`<div class="opinafy-root">${s}${n.show_branding?oe():""}</div>`}function V(o){let{testimonials:n,config:t}=o,s=t.autoplay_speed||5e3,p=n.length,c=p>1,m=n.map((e,i)=>`<div class="opinafy-carousel-slide" data-index="${i}">${A(e,t)}</div>`).join(""),y=p>3,x=Math.min(p,5),d=y?Array.from({length:x},(e,i)=>`<button class="opinafy-dot${i===0?" active":""}" data-dot="${i}" aria-label="Testimonio ${i+1}"></button>`).join(""):"",a=p>3;return`
    <div class="opinafy-carousel-wrapper${a?"":" opinafy-no-nav"}" data-autoplay-speed="${s}" data-count="${p}">
      ${a?`<button class="opinafy-carousel-nav opinafy-carousel-prev" data-action="prev" aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>`:""}
      <div class="opinafy-carousel-track">
        ${m}
      </div>
      ${a?`<button class="opinafy-carousel-nav opinafy-carousel-next" data-action="next" aria-label="Siguiente">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>`:""}
      ${y?`<div class="opinafy-carousel-dots">${d}</div>`:""}
    </div>
  `}function P(o){return`<div class="opinafy-grid">${o.testimonials.map(t=>A(t,o.config)).join("")}</div>`}function K(o){return`<div class="opinafy-wall">${o.testimonials.map(t=>A(t,o.config)).join("")}</div>`}function Q(o){let n=o.testimonials[0];return`<div class="opinafy-single">${A(n,o.config)}</div>`}function Z(o){let{testimonials:n}=o,t=n.reduce((p,c)=>p+c.rating,0)/n.length,s=n[0];return`
    <div class="opinafy-badge">
      <div class="opinafy-badge-score">
        <span class="opinafy-badge-number">${t.toFixed(1)}</span>
        <div class="opinafy-stars opinafy-stars-sm">${B(Math.round(t))}</div>
        <span class="opinafy-badge-count">${n.length} opiniones</span>
      </div>
      ${s?`<div class="opinafy-badge-latest">
        <p class="opinafy-badge-text">"${u(s.content.substring(0,80))}${s.content.length>80?"...":""}"</p>
        <span class="opinafy-badge-author">\u2014 ${u(s.author_name)}</span>
      </div>`:""}
    </div>
  `}function A(o,n){let{author_name:t,company:s,role:p,content:c,rating:m,created_at:y,is_company_verified:x,video_url:d}=o,e=`<div class="opinafy-avatar">${t.split(" ").map(_=>_[0]).join("").toUpperCase().slice(0,2)}</div>`,i="";p&&s?i=`${u(p)} en ${u(s)}`:s?i=u(s):p&&(i=u(p)),x&&s&&(i+=' <span class="opinafy-verified" title="Empresa verificada">\u2713</span>');let l="";if(y)try{l=new Date(y).toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"})}catch{}let v=!!d,f=v?`
    <div class="opinafy-video-container">
      <video class="opinafy-video" controls playsinline preload="metadata">
        <source src="${d}" type="video/mp4">
        <source src="${d}" type="video/webm">
      </video>
    </div>`:"",b=n.video_display_mode||"full";if(v&&b!=="full"){if(b==="video_only")return`
        <div class="opinafy-card opinafy-card-has-video opinafy-card-video-only">
          ${f}
        </div>
      `;if(b==="video_stars")return`
        <div class="opinafy-card opinafy-card-has-video">
          ${f}
          <div class="opinafy-card-body">
            <div class="opinafy-author-name">${u(t)}</div>
            ${m>0?`<div class="opinafy-stars">${B(m)}</div>`:""}
          </div>
        </div>
      `;if(b==="video_name")return`
        <div class="opinafy-card opinafy-card-has-video">
          ${f}
          <div class="opinafy-card-body">
            <div class="opinafy-author-name">${u(t)}</div>
            ${s?`<div class="opinafy-author-meta">${u(s)}</div>`:""}
          </div>
        </div>
      `}let h=c.length>250,w=n.show_avatar!==!1,E=n.show_rating!==!1,S=n.show_date!==!1,$=n.show_company!==!1;return`
    <div class="opinafy-card${v?" opinafy-card-has-video":""}">
      ${f}
      <div class="${v?"opinafy-card-body":""}">
        <div class="opinafy-card-header">
          ${w?e:""}
          <div class="opinafy-author">
            <div class="opinafy-author-name">${u(t)}</div>
            ${$&&i?`<div class="opinafy-author-meta">${i}</div>`:""}
          </div>
        </div>
        ${E&&m>0?`<div class="opinafy-stars">${B(m)}</div>`:""}
        <div class="opinafy-content"><p>${u(c)}</p></div>
        ${h?`<button class="opinafy-read-more" onclick="var c=this.previousElementSibling;c.classList.toggle('opinafy-content-expanded');this.textContent=c.classList.contains('opinafy-content-expanded')?'Leer menos':'Leer m\xE1s'">Leer m\xE1s</button>`:""}
        ${S&&l?`<div class="opinafy-date">${l}</div>`:""}
        ${ee(o)}
      </div>
    </div>
  `}function ee(o){let n=o.source_platform||o.source;if(!n||n==="form")return"";let t=J[n];if(!t)return"";let s=t.color;return`<div class="opinafy-source-badge" style="--badge-color: ${s}"><span class="opinafy-source-dot" style="background: ${s}"></span>${u(t.name)}</div>`}function B(o){let n=[];for(let t=1;t<=5;t++)t<=o?n.push('<svg class="opinafy-star opinafy-star-filled" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'):n.push('<svg class="opinafy-star opinafy-star-empty" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>');return n.join("")}function oe(){return`
    <div class="opinafy-branding">
      <a href="https://opinafy.com?ref=widget" target="_blank" rel="noopener noreferrer">
        <svg class="opinafy-branding-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"/></svg>
        Powered by Opinafy
      </a>
    </div>
  `}function u(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}(function(){function o(){let d=document.querySelectorAll("script[src]");for(let a=0;a<d.length;a++){let e=d[a].src;if((e.includes("widget.js")||e.includes("opinafy"))&&(e.includes("localhost")||e.includes("127.0.0.1"))){let i=new URL(e);return`${i.protocol}//${i.host}`}}return"https://opinafy.com"}let n=o(),t={modern:{family:"Inter",weights:"400;500;600;700"},serif:{family:"Playfair+Display",weights:"400;500;600;700"},rounded:{family:"Nunito",weights:"400;500;600;700"},minimal:{family:"DM+Sans",weights:"400;500;600;700"},bold:{family:"Space+Grotesk",weights:"400;500;600;700"},handwritten:{family:"Caveat",weights:"400;500;600;700"},mono:{family:"JetBrains+Mono",weights:"400;500;600;700"},elegant:{family:"Cormorant+Garamond",weights:"400;500;600;700"}};function s(d){let a=d.font_style||"modern",e=t[a];return e?`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${e.family}:wght@${e.weights}&display=swap">`:""}async function p(d){let a=await fetch(`${n}/api/widget/${d}`,{method:"GET",headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`HTTP ${a.status}`);return a.json()}function c(d){try{fetch(`${n}/api/widget/${d}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"impression"})}).catch(()=>{})}catch{}}function m(d){let a=d.querySelector(".opinafy-carousel-wrapper");if(!a)return;let e=a.querySelector(".opinafy-carousel-track"),i=a.querySelectorAll(".opinafy-carousel-slide"),l=a.querySelectorAll(".opinafy-dot"),v=a.querySelector('[data-action="prev"]'),f=a.querySelector('[data-action="next"]');if(!e||i.length===0)return;let b=parseInt(a.getAttribute("data-autoplay-speed")||"5000",10),h=0,w=null;function E(){let r=e.scrollLeft,g=0,L=1/0;return i.forEach((Y,X)=>{let F=Math.abs(Y.offsetLeft-e.offsetLeft-r);F<L&&(L=F,g=X)}),g}function S(){if(l.length===0)return;let r=l.length===i.length?h:Math.min(Math.round(h*(l.length-1)/(i.length-1)),l.length-1);l.forEach((g,L)=>g.classList.toggle("active",L===r))}function $(r){r<0&&(r=i.length-1),r>=i.length&&(r=0),h=r;let g=i[h];e.scrollTo({left:g.offsetLeft-e.offsetLeft,behavior:"smooth"}),S()}function _(){$(h+1)}function N(){$(h-1)}v&&v.addEventListener("click",()=>{N(),T()}),f&&f.addEventListener("click",()=>{_(),T()}),l.forEach((r,g)=>{r.addEventListener("click",()=>{let L=l.length===i.length?g:Math.round(g*(i.length-1)/(l.length-1));$(L),T()})});let C=null;e.addEventListener("scroll",()=>{C&&clearTimeout(C),C=setTimeout(()=>{let r=E();r!==h&&(h=r,S())},150)});let k=!1,D=!1,H=0,O=0;function I(r){k=!0,D=!1,H=r,O=e.scrollLeft,e.style.scrollSnapType="none",e.style.scrollBehavior="auto",W()}function R(r){if(!k)return;let g=r-H;Math.abs(g)>5&&(D=!0),e.scrollLeft=O-g}function z(){if(!k)return;k=!1,e.style.scrollSnapType="x mandatory",e.style.scrollBehavior="smooth";let r=E();$(r),T()}e.addEventListener("mousedown",r=>{I(r.pageX),r.preventDefault()}),e.addEventListener("mousemove",r=>{k&&(R(r.pageX),r.preventDefault())}),e.addEventListener("mouseup",z),e.addEventListener("mouseleave",()=>{k&&z()}),e.addEventListener("click",r=>{D&&(r.preventDefault(),r.stopPropagation())},!0),e.addEventListener("touchstart",r=>{I(r.touches[0].pageX)},{passive:!0}),e.addEventListener("touchmove",r=>{R(r.touches[0].pageX)},{passive:!0}),e.addEventListener("touchend",z);function j(){w&&clearInterval(w),w=setInterval(_,b)}function W(){w&&(clearInterval(w),w=null)}function T(){j()}a.addEventListener("mouseenter",()=>{k||W()}),a.addEventListener("mouseleave",()=>{k||j()}),j()}async function y(d){let a=d.getAttribute("data-project");if(!a){console.warn("[Opinafy] Widget element missing data-project attribute.");return}if(d.shadowRoot)return;let e=d.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        :host { display: block; }
        .opinafy-loading { display: flex; align-items: center; justify-content: center; padding: 48px 16px; }
        .opinafy-spinner { width: 32px; height: 32px; border: 3px solid #e5e7eb; border-top-color: #2563eb; border-radius: 50%; animation: s .7s linear infinite; }
        @keyframes s { to { transform: rotate(360deg); } }
      </style>
      <div class="opinafy-loading"><div class="opinafy-spinner"></div></div>
    `;try{let i=await p(a),l=i.config||{},v=s(l),f=G(l),b=U(i);e.innerHTML=`${v}<style>${f}</style>${b}`,i.config?.layout==="carousel"&&m(e),c(a)}catch(i){e.innerHTML=`
        <style>
          :host { display: block; }
          .opinafy-error { text-align: center; padding: 32px 16px; color: #6b7280; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; }
        </style>
        <div class="opinafy-error">
          <p>No se pudieron cargar los testimonios.</p>
          <p>Por favor, intenta de nuevo m\xE1s tarde.</p>
        </div>
      `,console.error("[Opinafy] Error loading widget:",i)}}function x(){document.querySelectorAll("#opinafy-widget, .opinafy-widget").forEach(a=>y(a))}if(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x(),typeof MutationObserver<"u"){let d=new MutationObserver(e=>{for(let i of e)for(let l of Array.from(i.addedNodes))l instanceof HTMLElement&&((l.id==="opinafy-widget"||l.classList.contains("opinafy-widget"))&&l.getAttribute("data-project")&&!l.shadowRoot&&y(l),(l.querySelectorAll?l.querySelectorAll("#opinafy-widget, .opinafy-widget"):[]).forEach(f=>{f instanceof HTMLElement&&f.getAttribute("data-project")&&!f.shadowRoot&&y(f)}))}),a=()=>{document.body&&d.observe(document.body,{childList:!0,subtree:!0})};document.body?a():document.addEventListener("DOMContentLoaded",a)}window.addEventListener("opinafy-init",()=>{document.querySelectorAll("#opinafy-widget, .opinafy-widget").forEach(a=>{a instanceof HTMLElement&&a.getAttribute("data-project")&&!a.shadowRoot&&y(a)})})})();})();
