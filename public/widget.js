"use strict";(()=>{var O={modern:"'Inter', system-ui, -apple-system, sans-serif",serif:"'Playfair Display', Georgia, 'Times New Roman', serif",rounded:"'Nunito', system-ui, sans-serif",minimal:"'DM Sans', system-ui, sans-serif",bold:"'Space Grotesk', system-ui, sans-serif",handwritten:"'Caveat', cursive",mono:"'JetBrains Mono', 'Fira Code', monospace",elegant:"'Cormorant Garamond', Georgia, serif"};function R(a){let i=a?.primary_color||"#2563eb",s=a?.background_color||"#ffffff",t=a?.text_color||"#1f2937",d=(a?.theme||"light")==="dark",u=a?.font_style||"modern";return`
    :host {
      display: block;
      font-family: ${O[u]||O.modern};
      line-height: 1.5;
      color: ${d?"#f3f4f6":t};
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
      --opinafy-primary: ${i};
      --opinafy-bg: ${d?"#1f2937":s};
      --opinafy-text: ${d?"#f3f4f6":t};
      --opinafy-text-secondary: ${d?"#9ca3af":"#6b7280"};
      --opinafy-border: ${d?"#374151":"#e5e7eb"};
      --opinafy-card-bg: ${d?"#111827":"#ffffff"};
      --opinafy-card-shadow: ${d?"0 1px 3px rgba(0,0,0,0.4)":"0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)"};
      --opinafy-card-shadow-hover: ${d?"0 4px 12px rgba(0,0,0,0.5)":"0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)"};
      --opinafy-star-filled: #f59e0b;
      --opinafy-star-empty: ${d?"#4b5563":"#d1d5db"};
      --opinafy-radius: 12px;
      --opinafy-radius-sm: 8px;

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
  `}function F(a){let{config:i,testimonials:s}=a;if(!s||s.length===0)return'<div class="opinafy-root"><div class="opinafy-error"><p>No hay testimonios para mostrar.</p></div></div>';let t;switch(i.layout){case"carousel":t=G(a);break;case"grid":t=P(a);break;case"wall":t=N(a);break;case"single":t=Y(a);break;case"badge":t=X(a);break;default:t=P(a)}return`<div class="opinafy-root">${t}${i.show_branding?J():""}</div>`}function G(a){let{testimonials:i,config:s}=a,t=s.autoplay_speed||5e3,c=i.length,d=c>1,u=i.map((o,e)=>`<div class="opinafy-carousel-slide" data-index="${e}">${C(o,s)}</div>`).join(""),x=Math.min(c,7),b=c>3,l=b?Array.from({length:x},(o,e)=>`<button class="opinafy-dot${e===0?" active":""}" data-dot="${e}" aria-label="P\xE1gina ${e+1}"></button>`).join(""):"";return`
    <div class="opinafy-carousel-wrapper${d?"":" opinafy-no-nav"}" data-autoplay-speed="${t}" data-count="${c}">
      ${d?`<button class="opinafy-carousel-nav opinafy-carousel-prev" data-action="prev" aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>`:""}
      <div class="opinafy-carousel-track">
        ${u}
      </div>
      ${d?`<button class="opinafy-carousel-nav opinafy-carousel-next" data-action="next" aria-label="Siguiente">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>`:""}
      ${b?`<div class="opinafy-carousel-dots">${l}</div>`:""}
    </div>
  `}function P(a){return`<div class="opinafy-grid">${a.testimonials.map(s=>C(s,a.config)).join("")}</div>`}function N(a){return`<div class="opinafy-wall">${a.testimonials.map(s=>C(s,a.config)).join("")}</div>`}function Y(a){let i=a.testimonials[0];return`<div class="opinafy-single">${C(i,a.config)}</div>`}function X(a){let{testimonials:i}=a,s=i.reduce((c,d)=>c+d.rating,0)/i.length,t=i[0];return`
    <div class="opinafy-badge">
      <div class="opinafy-badge-score">
        <span class="opinafy-badge-number">${s.toFixed(1)}</span>
        <div class="opinafy-stars opinafy-stars-sm">${U(Math.round(s))}</div>
        <span class="opinafy-badge-count">${i.length} opiniones</span>
      </div>
      ${t?`<div class="opinafy-badge-latest">
        <p class="opinafy-badge-text">"${v(t.content.substring(0,80))}${t.content.length>80?"...":""}"</p>
        <span class="opinafy-badge-author">\u2014 ${v(t.author_name)}</span>
      </div>`:""}
    </div>
  `}function C(a,i){let{author_name:s,company:t,role:c,content:d,rating:u,created_at:x,is_company_verified:b,video_url:l}=a,e=`<div class="opinafy-avatar">${s.split(" ").map(g=>g[0]).join("").toUpperCase().slice(0,2)}</div>`,n="";c&&t?n=`${v(c)} en ${v(t)}`:t?n=v(t):c&&(n=v(c)),b&&t&&(n+=' <span class="opinafy-verified" title="Empresa verificada">\u2713</span>');let f="";if(x)try{f=new Date(x).toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"})}catch{}let m=!!l,w=m?`
    <div class="opinafy-video-container">
      <video class="opinafy-video" controls playsinline preload="metadata">
        <source src="${l}" type="video/mp4">
        <source src="${l}" type="video/webm">
      </video>
    </div>`:"",L=d.length>250;return`
    <div class="opinafy-card${m?" opinafy-card-has-video":""}">
      ${w}
      <div class="${m?"opinafy-card-body":""}">
        <div class="opinafy-card-header">
          ${e}
          <div class="opinafy-author">
            <div class="opinafy-author-name">${v(s)}</div>
            ${n?`<div class="opinafy-author-meta">${n}</div>`:""}
          </div>
        </div>
        ${u>0?`<div class="opinafy-stars">${U(u)}</div>`:""}
        <div class="opinafy-content"><p>${v(d)}</p></div>
        ${L?`<button class="opinafy-read-more" onclick="var c=this.previousElementSibling;c.classList.toggle('opinafy-content-expanded');this.textContent=c.classList.contains('opinafy-content-expanded')?'Leer menos':'Leer m\xE1s'">Leer m\xE1s</button>`:""}
        ${f?`<div class="opinafy-date">${f}</div>`:""}
      </div>
    </div>
  `}function U(a){let i=[];for(let s=1;s<=5;s++)s<=a?i.push('<svg class="opinafy-star opinafy-star-filled" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'):i.push('<svg class="opinafy-star opinafy-star-empty" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>');return i.join("")}function J(){return`
    <div class="opinafy-branding">
      <a href="https://opinafy.com?ref=widget" target="_blank" rel="noopener noreferrer">
        <svg class="opinafy-branding-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"/></svg>
        Powered by Opinafy
      </a>
    </div>
  `}function v(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}(function(){function a(){let l=document.querySelectorAll("script[src]");for(let o=0;o<l.length;o++){let e=l[o].src;if((e.includes("widget.js")||e.includes("opinafy"))&&(e.includes("localhost")||e.includes("127.0.0.1"))){let n=new URL(e);return`${n.protocol}//${n.host}`}}return"https://opinafy.com"}let i=a(),s={modern:{family:"Inter",weights:"400;500;600;700"},serif:{family:"Playfair+Display",weights:"400;500;600;700"},rounded:{family:"Nunito",weights:"400;500;600;700"},minimal:{family:"DM+Sans",weights:"400;500;600;700"},bold:{family:"Space+Grotesk",weights:"400;500;600;700"},handwritten:{family:"Caveat",weights:"400;500;600;700"},mono:{family:"JetBrains+Mono",weights:"400;500;600;700"},elegant:{family:"Cormorant+Garamond",weights:"400;500;600;700"}};function t(l){let o=l.font_style||"modern",e=s[o];return e?`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${e.family}:wght@${e.weights}&display=swap">`:""}async function c(l){let o=await fetch(`${i}/api/widget/${l}`,{method:"GET",headers:{Accept:"application/json"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.json()}function d(l){try{fetch(`${i}/api/widget/${l}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"impression"})}).catch(()=>{})}catch{}}function u(l){let o=l.querySelector(".opinafy-carousel-wrapper");if(!o)return;let e=o.querySelector(".opinafy-carousel-track"),n=o.querySelectorAll(".opinafy-carousel-slide"),f=o.querySelectorAll(".opinafy-dot"),m=o.querySelector('[data-action="prev"]'),w=o.querySelector('[data-action="next"]');if(!e||n.length===0)return;let L=parseInt(o.getAttribute("data-autoplay-speed")||"5000",10),g=0,k=null;function H(){if(f.length===0)return;let r=Math.min(Math.floor(g*f.length/n.length),f.length-1);f.forEach((p,y)=>p.classList.toggle("active",y===r))}function $(r){r<0&&(r=n.length-1),r>=n.length&&(r=0),g=r;let p=n[g];e.scrollTo({left:p.offsetLeft-e.offsetLeft,behavior:"smooth"}),H()}function I(){$(g+1)}function q(){$(g-1)}m&&m.addEventListener("click",()=>{q(),T()}),w&&w.addEventListener("click",()=>{I(),T()}),f.forEach((r,p)=>{r.addEventListener("click",()=>{let y=Math.floor(p*n.length/f.length);$(y),T()})});let D=null;e.addEventListener("scroll",()=>{D&&clearTimeout(D),D=setTimeout(()=>{let r=e.scrollLeft,p=0,y=1/0;n.forEach((S,M)=>{let h=Math.abs(S.offsetLeft-e.offsetLeft-r);h<y&&(y=h,p=M)}),p!==g&&(g=p,H())},100)});let E=!1,_=0,z=0;e.addEventListener("mousedown",r=>{E=!0,_=r.pageX,z=e.scrollLeft,e.classList.add("dragging"),A()}),e.addEventListener("mousemove",r=>{if(!E)return;r.preventDefault();let p=r.pageX-_;e.scrollLeft=z-p});function W(){if(!E)return;E=!1,e.classList.remove("dragging");let r=e.scrollLeft,p=0,y=1/0;n.forEach((S,M)=>{let h=Math.abs(S.offsetLeft-e.offsetLeft-r);h<y&&(y=h,p=M)}),$(p),T()}e.addEventListener("mouseup",W),e.addEventListener("mouseleave",W),e.addEventListener("touchstart",r=>{_=r.touches[0].pageX,z=e.scrollLeft,A()},{passive:!0}),e.addEventListener("touchmove",r=>{let p=r.touches[0].pageX-_;e.scrollLeft=z-p},{passive:!0}),e.addEventListener("touchend",()=>{let r=e.scrollLeft,p=0,y=1/0;n.forEach((S,M)=>{let h=Math.abs(S.offsetLeft-e.offsetLeft-r);h<y&&(y=h,p=M)}),$(p),T()});function j(){k&&clearInterval(k),k=setInterval(I,L)}function A(){k&&(clearInterval(k),k=null)}function T(){j()}o.addEventListener("mouseenter",A),o.addEventListener("mouseleave",()=>{E||j()}),j()}async function x(l){let o=l.getAttribute("data-project");if(!o){console.warn("[Opinafy] Widget element missing data-project attribute.");return}if(l.shadowRoot)return;let e=l.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        :host { display: block; }
        .opinafy-loading { display: flex; align-items: center; justify-content: center; padding: 48px 16px; }
        .opinafy-spinner { width: 32px; height: 32px; border: 3px solid #e5e7eb; border-top-color: #2563eb; border-radius: 50%; animation: s .7s linear infinite; }
        @keyframes s { to { transform: rotate(360deg); } }
      </style>
      <div class="opinafy-loading"><div class="opinafy-spinner"></div></div>
    `;try{let n=await c(o),f=n.config||{},m=t(f),w=R(f),L=F(n);e.innerHTML=`${m}<style>${w}</style>${L}`,n.config?.layout==="carousel"&&u(e),d(o)}catch(n){e.innerHTML=`
        <style>
          :host { display: block; }
          .opinafy-error { text-align: center; padding: 32px 16px; color: #6b7280; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; }
        </style>
        <div class="opinafy-error">
          <p>No se pudieron cargar los testimonios.</p>
          <p>Por favor, intenta de nuevo m\xE1s tarde.</p>
        </div>
      `,console.error("[Opinafy] Error loading widget:",n)}}function b(){document.querySelectorAll("#opinafy-widget, .opinafy-widget").forEach(o=>x(o))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b()})();})();
