"use strict";(()=>{var q={modern:"'Inter', system-ui, -apple-system, sans-serif",serif:"'Playfair Display', Georgia, 'Times New Roman', serif",rounded:"'Nunito', system-ui, sans-serif",minimal:"'DM Sans', system-ui, sans-serif",bold:"'Space Grotesk', system-ui, sans-serif",handwritten:"'Caveat', cursive",mono:"'JetBrains Mono', 'Fira Code', monospace",elegant:"'Cormorant Garamond', Georgia, serif"};function j(o){let t=o.replace("#","");if(t.length<6)return!1;let n=parseInt(t.slice(0,2),16),i=parseInt(t.slice(2,4),16),f=parseInt(t.slice(4,6),16);return n<245||i<245||f<245}function G(o){let t=o?.primary_color||"#2563eb",n=o?.background_color||"#ffffff",i=o?.text_color||"#1f2937",p=(o?.theme||"light")==="dark",v=o?.font_style||"modern",m=q[v]||q.modern,x=p?"#1f2937":(j(n),"#ffffff"),s=p?"#374151":j(n)?"rgba(0,0,0,0.08)":"#e5e7eb",a=p?"0 1px 3px rgba(0,0,0,0.4)":j(n)?"0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)":"0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",e=p?"0 4px 12px rgba(0,0,0,0.5)":j(n)?"0 8px 24px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.06)":"0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)";return`
    :host {
      display: block;
      font-family: ${m};
      line-height: 1.5;
      color: ${p?"#f3f4f6":i};
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
      --opinafy-bg: ${p?"#1f2937":n};
      --opinafy-text: ${p?"#f3f4f6":i};
      --opinafy-text-secondary: ${p?"#9ca3af":"#6b7280"};
      --opinafy-border: ${s};
      --opinafy-card-bg: ${x};
      --opinafy-card-shadow: ${a};
      --opinafy-card-shadow-hover: ${e};
      --opinafy-star-filled: #f59e0b;
      --opinafy-star-empty: ${p?"#4b5563":"#d1d5db"};
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
    }
    .opinafy-carousel-track.dragging {
      cursor: grabbing;
      scroll-behavior: auto;
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
  `}var N={google:{name:"Google",color:"#4285F4"},tripadvisor:{name:"TripAdvisor",color:"#00AF87"},trustpilot:{name:"Trustpilot",color:"#00B67A"},facebook:{name:"Facebook",color:"#1877F2"},yelp:{name:"Yelp",color:"#D32323"},capterra:{name:"Capterra",color:"#FF9D28"},g2:{name:"G2",color:"#FF492C"}};function U(o){let{config:t,testimonials:n}=o;if(!n||n.length===0)return'<div class="opinafy-root"><div class="opinafy-error"><p>No hay testimonios para mostrar.</p></div></div>';let i;switch(t.layout){case"carousel":i=Y(o);break;case"grid":i=P(o);break;case"wall":i=X(o);break;case"single":i=J(o);break;case"badge":i=V(o);break;default:i=P(o)}return`<div class="opinafy-root">${i}${t.show_branding?Q():""}</div>`}function Y(o){let{testimonials:t,config:n}=o,i=n.autoplay_speed||5e3,f=t.length,p=f>1,v=t.map((a,e)=>`<div class="opinafy-carousel-slide" data-index="${e}">${H(a,n)}</div>`).join(""),m=Math.min(f,7),x=f>3,s=x?Array.from({length:m},(a,e)=>`<button class="opinafy-dot${e===0?" active":""}" data-dot="${e}" aria-label="P\xE1gina ${e+1}"></button>`).join(""):"";return`
    <div class="opinafy-carousel-wrapper${p?"":" opinafy-no-nav"}" data-autoplay-speed="${i}" data-count="${f}">
      ${p?`<button class="opinafy-carousel-nav opinafy-carousel-prev" data-action="prev" aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>`:""}
      <div class="opinafy-carousel-track">
        ${v}
      </div>
      ${p?`<button class="opinafy-carousel-nav opinafy-carousel-next" data-action="next" aria-label="Siguiente">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>`:""}
      ${x?`<div class="opinafy-carousel-dots">${s}</div>`:""}
    </div>
  `}function P(o){return`<div class="opinafy-grid">${o.testimonials.map(n=>H(n,o.config)).join("")}</div>`}function X(o){return`<div class="opinafy-wall">${o.testimonials.map(n=>H(n,o.config)).join("")}</div>`}function J(o){let t=o.testimonials[0];return`<div class="opinafy-single">${H(t,o.config)}</div>`}function V(o){let{testimonials:t}=o,n=t.reduce((f,p)=>f+p.rating,0)/t.length,i=t[0];return`
    <div class="opinafy-badge">
      <div class="opinafy-badge-score">
        <span class="opinafy-badge-number">${n.toFixed(1)}</span>
        <div class="opinafy-stars opinafy-stars-sm">${R(Math.round(n))}</div>
        <span class="opinafy-badge-count">${t.length} opiniones</span>
      </div>
      ${i?`<div class="opinafy-badge-latest">
        <p class="opinafy-badge-text">"${u(i.content.substring(0,80))}${i.content.length>80?"...":""}"</p>
        <span class="opinafy-badge-author">\u2014 ${u(i.author_name)}</span>
      </div>`:""}
    </div>
  `}function H(o,t){let{author_name:n,company:i,role:f,content:p,rating:v,created_at:m,is_company_verified:x,video_url:s}=o,e=`<div class="opinafy-avatar">${n.split(" ").map(C=>C[0]).join("").toUpperCase().slice(0,2)}</div>`,r="";f&&i?r=`${u(f)} en ${u(i)}`:i?r=u(i):f&&(r=u(f)),x&&i&&(r+=' <span class="opinafy-verified" title="Empresa verificada">\u2713</span>');let l="";if(m)try{l=new Date(m).toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"})}catch{}let h=!!s,y=h?`
    <div class="opinafy-video-container">
      <video class="opinafy-video" controls playsinline preload="metadata">
        <source src="${s}" type="video/mp4">
        <source src="${s}" type="video/webm">
      </video>
    </div>`:"",w=t.video_display_mode||"full";if(h&&w!=="full"){if(w==="video_only")return`
        <div class="opinafy-card opinafy-card-has-video opinafy-card-video-only">
          ${y}
        </div>
      `;if(w==="video_stars")return`
        <div class="opinafy-card opinafy-card-has-video">
          ${y}
          <div class="opinafy-card-body">
            <div class="opinafy-author-name">${u(n)}</div>
            ${v>0?`<div class="opinafy-stars">${R(v)}</div>`:""}
          </div>
        </div>
      `;if(w==="video_name")return`
        <div class="opinafy-card opinafy-card-has-video">
          ${y}
          <div class="opinafy-card-body">
            <div class="opinafy-author-name">${u(n)}</div>
            ${i?`<div class="opinafy-author-meta">${u(i)}</div>`:""}
          </div>
        </div>
      `}let b=p.length>250,k=t.show_avatar!==!1,M=t.show_rating!==!1,L=t.show_date!==!1,A=t.show_company!==!1;return`
    <div class="opinafy-card${h?" opinafy-card-has-video":""}">
      ${y}
      <div class="${h?"opinafy-card-body":""}">
        <div class="opinafy-card-header">
          ${k?e:""}
          <div class="opinafy-author">
            <div class="opinafy-author-name">${u(n)}</div>
            ${A&&r?`<div class="opinafy-author-meta">${r}</div>`:""}
          </div>
        </div>
        ${M&&v>0?`<div class="opinafy-stars">${R(v)}</div>`:""}
        <div class="opinafy-content"><p>${u(p)}</p></div>
        ${b?`<button class="opinafy-read-more" onclick="var c=this.previousElementSibling;c.classList.toggle('opinafy-content-expanded');this.textContent=c.classList.contains('opinafy-content-expanded')?'Leer menos':'Leer m\xE1s'">Leer m\xE1s</button>`:""}
        ${L&&l?`<div class="opinafy-date">${l}</div>`:""}
        ${K(o)}
      </div>
    </div>
  `}function K(o){let t=o.source_platform||o.source;if(!t||t==="form")return"";let n=N[t];if(!n)return"";let i=n.color;return`<div class="opinafy-source-badge" style="--badge-color: ${i}"><span class="opinafy-source-dot" style="background: ${i}"></span>${u(n.name)}</div>`}function R(o){let t=[];for(let n=1;n<=5;n++)n<=o?t.push('<svg class="opinafy-star opinafy-star-filled" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'):t.push('<svg class="opinafy-star opinafy-star-empty" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>');return t.join("")}function Q(){return`
    <div class="opinafy-branding">
      <a href="https://opinafy.com?ref=widget" target="_blank" rel="noopener noreferrer">
        <svg class="opinafy-branding-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"/></svg>
        Powered by Opinafy
      </a>
    </div>
  `}function u(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}(function(){function o(){let s=document.querySelectorAll("script[src]");for(let a=0;a<s.length;a++){let e=s[a].src;if((e.includes("widget.js")||e.includes("opinafy"))&&(e.includes("localhost")||e.includes("127.0.0.1"))){let r=new URL(e);return`${r.protocol}//${r.host}`}}return"https://opinafy.com"}let t=o(),n={modern:{family:"Inter",weights:"400;500;600;700"},serif:{family:"Playfair+Display",weights:"400;500;600;700"},rounded:{family:"Nunito",weights:"400;500;600;700"},minimal:{family:"DM+Sans",weights:"400;500;600;700"},bold:{family:"Space+Grotesk",weights:"400;500;600;700"},handwritten:{family:"Caveat",weights:"400;500;600;700"},mono:{family:"JetBrains+Mono",weights:"400;500;600;700"},elegant:{family:"Cormorant+Garamond",weights:"400;500;600;700"}};function i(s){let a=s.font_style||"modern",e=n[a];return e?`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${e.family}:wght@${e.weights}&display=swap">`:""}async function f(s){let a=await fetch(`${t}/api/widget/${s}`,{method:"GET",headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`HTTP ${a.status}`);return a.json()}function p(s){try{fetch(`${t}/api/widget/${s}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"impression"})}).catch(()=>{})}catch{}}function v(s){let a=s.querySelector(".opinafy-carousel-wrapper");if(!a)return;let e=a.querySelector(".opinafy-carousel-track"),r=a.querySelectorAll(".opinafy-carousel-slide"),l=a.querySelectorAll(".opinafy-dot"),h=a.querySelector('[data-action="prev"]'),y=a.querySelector('[data-action="next"]');if(!e||r.length===0)return;let w=parseInt(a.getAttribute("data-autoplay-speed")||"5000",10),b=0,k=null;function M(){if(l.length===0)return;let d=Math.min(Math.floor(b*l.length/r.length),l.length-1);l.forEach((c,g)=>c.classList.toggle("active",g===d))}function L(d){d<0&&(d=r.length-1),d>=r.length&&(d=0),b=d;let c=r[b];e.scrollTo({left:c.offsetLeft-e.offsetLeft,behavior:"smooth"}),M()}function A(){L(b+1)}function C(){L(b-1)}h&&h.addEventListener("click",()=>{C(),E()}),y&&y.addEventListener("click",()=>{A(),E()}),l.forEach((d,c)=>{d.addEventListener("click",()=>{let g=Math.floor(c*r.length/l.length);L(g),E()})});let B=null;e.addEventListener("scroll",()=>{B&&clearTimeout(B),B=setTimeout(()=>{let d=e.scrollLeft,c=0,g=1/0;r.forEach((S,T)=>{let $=Math.abs(S.offsetLeft-e.offsetLeft-d);$<g&&(g=$,c=T)}),c!==b&&(b=c,M())},100)});let _=!1,D=0,z=0;e.addEventListener("mousedown",d=>{_=!0,D=d.pageX,z=e.scrollLeft,e.classList.add("dragging"),O()}),e.addEventListener("mousemove",d=>{if(!_)return;d.preventDefault();let c=d.pageX-D;e.scrollLeft=z-c});function W(){if(!_)return;_=!1,e.classList.remove("dragging");let d=e.scrollLeft,c=0,g=1/0;r.forEach((S,T)=>{let $=Math.abs(S.offsetLeft-e.offsetLeft-d);$<g&&(g=$,c=T)}),L(c),E()}e.addEventListener("mouseup",W),e.addEventListener("mouseleave",W),e.addEventListener("touchstart",d=>{D=d.touches[0].pageX,z=e.scrollLeft,O()},{passive:!0}),e.addEventListener("touchmove",d=>{let c=d.touches[0].pageX-D;e.scrollLeft=z-c},{passive:!0}),e.addEventListener("touchend",()=>{let d=e.scrollLeft,c=0,g=1/0;r.forEach((S,T)=>{let $=Math.abs(S.offsetLeft-e.offsetLeft-d);$<g&&(g=$,c=T)}),L(c),E()});function I(){k&&clearInterval(k),k=setInterval(A,w)}function O(){k&&(clearInterval(k),k=null)}function E(){I()}a.addEventListener("mouseenter",O),a.addEventListener("mouseleave",()=>{_||I()}),I()}async function m(s){let a=s.getAttribute("data-project");if(!a){console.warn("[Opinafy] Widget element missing data-project attribute.");return}if(s.shadowRoot)return;let e=s.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        :host { display: block; }
        .opinafy-loading { display: flex; align-items: center; justify-content: center; padding: 48px 16px; }
        .opinafy-spinner { width: 32px; height: 32px; border: 3px solid #e5e7eb; border-top-color: #2563eb; border-radius: 50%; animation: s .7s linear infinite; }
        @keyframes s { to { transform: rotate(360deg); } }
      </style>
      <div class="opinafy-loading"><div class="opinafy-spinner"></div></div>
    `;try{let r=await f(a),l=r.config||{},h=i(l),y=G(l),w=U(r);e.innerHTML=`${h}<style>${y}</style>${w}`,r.config?.layout==="carousel"&&v(e),p(a)}catch(r){e.innerHTML=`
        <style>
          :host { display: block; }
          .opinafy-error { text-align: center; padding: 32px 16px; color: #6b7280; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; }
        </style>
        <div class="opinafy-error">
          <p>No se pudieron cargar los testimonios.</p>
          <p>Por favor, intenta de nuevo m\xE1s tarde.</p>
        </div>
      `,console.error("[Opinafy] Error loading widget:",r)}}function x(){document.querySelectorAll("#opinafy-widget, .opinafy-widget").forEach(a=>m(a))}if(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x(),typeof MutationObserver<"u"){let s=new MutationObserver(e=>{for(let r of e)for(let l of Array.from(r.addedNodes))l instanceof HTMLElement&&((l.id==="opinafy-widget"||l.classList.contains("opinafy-widget"))&&l.getAttribute("data-project")&&!l.shadowRoot&&m(l),(l.querySelectorAll?l.querySelectorAll("#opinafy-widget, .opinafy-widget"):[]).forEach(y=>{y instanceof HTMLElement&&y.getAttribute("data-project")&&!y.shadowRoot&&m(y)}))}),a=()=>{document.body&&s.observe(document.body,{childList:!0,subtree:!0})};document.body?a():document.addEventListener("DOMContentLoaded",a)}window.addEventListener("opinafy-init",()=>{document.querySelectorAll("#opinafy-widget, .opinafy-widget").forEach(a=>{a instanceof HTMLElement&&a.getAttribute("data-project")&&!a.shadowRoot&&m(a)})})})();})();
