"use strict";(()=>{function A(a){let e=a?.primary_color||"#2563eb",i=a?.background_color||"#ffffff",o=a?.text_color||"#1f2937",s=(a?.theme||"light")==="dark";return`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.5;
      color: ${s?"#f3f4f6":o};
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
      --opinafy-primary: ${e};
      --opinafy-bg: ${s?"#1f2937":i};
      --opinafy-text: ${s?"#f3f4f6":o};
      --opinafy-text-secondary: ${s?"#9ca3af":"#6b7280"};
      --opinafy-border: ${s?"#374151":"#e5e7eb"};
      --opinafy-card-bg: ${s?"#111827":"#ffffff"};
      --opinafy-card-shadow: ${s?"0 1px 3px rgba(0,0,0,0.4)":"0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)"};
      --opinafy-card-shadow-hover: ${s?"0 4px 12px rgba(0,0,0,0.5)":"0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)"};
      --opinafy-star-filled: #f59e0b;
      --opinafy-star-empty: ${s?"#4b5563":"#d1d5db"};
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

    /* \u2500\u2500 Content \u2500\u2500 */
    .opinafy-content {
      font-size: 14px;
      line-height: 1.65;
      color: var(--opinafy-text);
      margin-bottom: 12px;
    }

    .opinafy-content p {
      margin: 0;
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
      left: 4px;
    }

    .opinafy-carousel-next {
      right: 4px;
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

    /* \u2500\u2500 Auto-play animation (carousel) \u2500\u2500 */
    @keyframes opinafy-autoplay-progress {
      from { width: 0%; }
      to { width: 100%; }
    }

    .opinafy-autoplay-bar {
      height: 2px;
      background: var(--opinafy-primary);
      border-radius: 1px;
      margin-top: 8px;
      opacity: 0.5;
    }

    .opinafy-autoplay-bar.running {
      animation: opinafy-autoplay-progress var(--opinafy-autoplay-speed, 5s) linear infinite;
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
  `}function H(a){let{config:e,testimonials:i}=a;if(!i||i.length===0)return'<div class="opinafy-root"><div class="opinafy-error"><p>No hay testimonios para mostrar.</p></div></div>';let o;switch(e.layout){case"carousel":o=D(a);break;case"grid":o=M(a);break;case"wall":o=I(a);break;case"single":o=q(a);break;case"badge":o=O(a);break;default:o=M(a)}return`<div class="opinafy-root">${o}${e.show_branding?U():""}</div>`}function D(a){let{testimonials:e,config:i}=a,o=i.autoplay_speed||5e3,d=e.map((f,n)=>`<div class="opinafy-carousel-slide" data-index="${n}">${k(f,i)}</div>`).join(""),s=e.map((f,n)=>`<button class="opinafy-dot${n===0?" active":""}" data-dot="${n}" aria-label="Ir al testimonio ${n+1}"></button>`).join("");return`
    <div class="opinafy-carousel-wrapper" data-autoplay-speed="${o}">
      <button class="opinafy-carousel-nav opinafy-carousel-prev" data-action="prev" aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="opinafy-carousel-track">
        ${d}
      </div>
      <button class="opinafy-carousel-nav opinafy-carousel-next" data-action="next" aria-label="Siguiente">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div class="opinafy-carousel-dots">${s}</div>
      <div class="opinafy-autoplay-bar running" style="--opinafy-autoplay-speed: ${o}ms"></div>
    </div>
  `}function M(a){return`<div class="opinafy-grid">${a.testimonials.map(i=>k(i,a.config)).join("")}</div>`}function I(a){return`<div class="opinafy-wall">${a.testimonials.map(i=>k(i,a.config)).join("")}</div>`}function q(a){let e=a.testimonials[0];return`<div class="opinafy-single">${k(e,a.config)}</div>`}function O(a){let e=a.average_rating??0,i=a.total_count??a.testimonials.length,o=a.testimonials[0];return`
    <div class="opinafy-badge-container">
      <div class="opinafy-badge-card">
        <div class="opinafy-badge-score">
          <span class="opinafy-badge-number">${e>0?e.toFixed(1):"--"}</span>
          <div>
            ${W(Math.round(e))}
            <div class="opinafy-badge-details">${i} opinion${i!==1?"es":""} verificada${i!==1?"s":""}</div>
          </div>
        </div>
        ${o?`
          <div class="opinafy-badge-snippet">"${v(Y(o.content,100))}"</div>
          <div class="opinafy-badge-author">- ${v(o.author_name)}</div>
        `:""}
      </div>
    </div>
  `}function k(a,e){let{author_name:i,author_avatar:o,company:d,role:s,rating:f,content:n,created_at:t}=a,r=R(i),p=d&&a.is_company_verified?' <span class="opinafy-verified" title="Empresa verificada">&#10003;</span>':"",c=[];s&&c.push(v(s)),d&&c.push(v(d)+p);let u=c.join(" en "),h=P(t),y=o?`<div class="opinafy-avatar"><img src="${_(o)}" alt="${_(i)}" loading="lazy"/></div>`:`<div class="opinafy-avatar">${v(r)}</div>`;return`
    <div class="opinafy-card" data-testimonial-id="${_(a.id)}">
      <div class="opinafy-card-header">
        ${y}
        <div class="opinafy-author">
          <div class="opinafy-author-name">${v(i)}</div>
          ${u?`<div class="opinafy-author-meta">${u}</div>`:""}
        </div>
      </div>
      ${f>0?`<div class="opinafy-stars">${W(f)}</div>`:""}
      <div class="opinafy-content"><p>${v(n)}</p></div>
      ${h?`<div class="opinafy-date">${h}</div>`:""}
    </div>
  `}function W(a){let e=[];for(let i=1;i<=5;i++)i<=a?e.push('<svg class="opinafy-star opinafy-star-filled" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/></svg>'):e.push('<svg class="opinafy-star opinafy-star-empty" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/></svg>');return e.join("")}function U(){return`
    <div class="opinafy-branding">
      <a href="https://opinafy.com?ref=widget" target="_blank" rel="noopener noreferrer">
        <svg class="opinafy-branding-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Powered by Opinafy
      </a>
    </div>
  `}function v(a){let e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return a.replace(/[&<>"']/g,i=>e[i]||i)}function _(a){return a.replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R(a){return a.split(/\s+/).slice(0,2).map(e=>e.charAt(0)).join("").toUpperCase()}function Y(a,e){return a.length<=e?a:a.slice(0,e).trimEnd()+"..."}function P(a){try{let e=new Date(a);return isNaN(e.getTime())?"":e.toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric"})}catch{return""}}(function(){function a(){let n=document.querySelectorAll("script[src]");for(let t=0;t<n.length;t++){let r=n[t].src;if((r.includes("widget.js")||r.includes("opinafy"))&&(r.includes("localhost")||r.includes("127.0.0.1"))){let p=new URL(r);return`${p.protocol}//${p.host}`}}return"https://opinafy.com"}let e=a();async function i(n){let t=await fetch(`${e}/api/widget/${n}`,{method:"GET",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}function o(n){try{fetch(`${e}/api/widget/${n}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"impression"})}).catch(()=>{})}catch{}}function d(n){let t=n.querySelector(".opinafy-carousel-wrapper");if(!t)return;let r=t.querySelector(".opinafy-carousel-track"),p=t.querySelectorAll(".opinafy-carousel-slide"),c=t.querySelectorAll(".opinafy-dot"),u=t.querySelector('[data-action="prev"]'),h=t.querySelector('[data-action="next"]'),y=t.querySelector(".opinafy-autoplay-bar");if(!r||p.length===0)return;let C=parseInt(t.getAttribute("data-autoplay-speed")||"5000",10),g=0,x=null;function $(l){l<0&&(l=p.length-1),l>=p.length&&(l=0),g=l;let m=p[g];r.scrollTo({left:m.offsetLeft-r.offsetLeft,behavior:"smooth"}),c.forEach((w,b)=>{w.classList.toggle("active",b===g)})}function j(){$(g+1)}function B(){$(g-1)}u&&u.addEventListener("click",()=>{B(),S()}),h&&h.addEventListener("click",()=>{j(),S()}),c.forEach(l=>{l.addEventListener("click",()=>{let m=parseInt(l.getAttribute("data-dot")||"0",10);$(m),S()})});let L=null;r.addEventListener("scroll",()=>{L&&clearTimeout(L),L=setTimeout(()=>{let l=r.scrollLeft,m=0,w=1/0;p.forEach((b,E)=>{let z=Math.abs(b.offsetLeft-r.offsetLeft-l);z<w&&(w=z,m=E)}),m!==g&&(g=m,c.forEach((b,E)=>b.classList.toggle("active",E===g)))},100)});function T(){x&&clearInterval(x),x=setInterval(j,C),y&&(y.classList.remove("running"),y.offsetWidth,y.classList.add("running"))}function S(){T()}t.addEventListener("mouseenter",()=>{x&&(clearInterval(x),x=null),y&&y.classList.remove("running")}),t.addEventListener("mouseleave",()=>{T()}),T()}async function s(n){let t=n.getAttribute("data-project");if(!t){console.warn("[Opinafy] Widget element missing data-project attribute.");return}if(n.shadowRoot)return;let r=n.attachShadow({mode:"open"});r.innerHTML=`
      <style>
        :host { display: block; }
        .opinafy-loading { display: flex; align-items: center; justify-content: center; padding: 48px 16px; }
        .opinafy-spinner { width: 32px; height: 32px; border: 3px solid #e5e7eb; border-top-color: #2563eb; border-radius: 50%; animation: s .7s linear infinite; }
        @keyframes s { to { transform: rotate(360deg); } }
      </style>
      <div class="opinafy-loading"><div class="opinafy-spinner"></div></div>
    `;try{let p=await i(t),c=A(p.config||{}),u=H(p);r.innerHTML=`<style>${c}</style>${u}`,p.config?.layout==="carousel"&&d(r),o(t)}catch(p){r.innerHTML=`
        <style>
          :host { display: block; }
          .opinafy-error { text-align: center; padding: 32px 16px; color: #6b7280; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; }
        </style>
        <div class="opinafy-error">
          <p>No se pudieron cargar los testimonios.</p>
          <p>Por favor, intenta de nuevo m\xE1s tarde.</p>
        </div>
      `,console.error("[Opinafy] Error loading widget:",p)}}function f(){document.querySelectorAll("#opinafy-widget, .opinafy-widget").forEach(t=>s(t))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f()})();})();
