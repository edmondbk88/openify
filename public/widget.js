"use strict";(()=>{function A(a){let e=a?.primary_color||"#2563eb",o=a?.background_color||"#ffffff",i=a?.text_color||"#1f2937",p=(a?.theme||"light")==="dark";return`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
      --opinafy-primary: ${e};
      --opinafy-bg: ${p?"#1f2937":o};
      --opinafy-text: ${p?"#f3f4f6":i};
      --opinafy-text-secondary: ${p?"#9ca3af":"#6b7280"};
      --opinafy-border: ${p?"#374151":"#e5e7eb"};
      --opinafy-card-bg: ${p?"#111827":"#ffffff"};
      --opinafy-card-shadow: ${p?"0 1px 3px rgba(0,0,0,0.4)":"0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)"};
      --opinafy-card-shadow-hover: ${p?"0 4px 12px rgba(0,0,0,0.5)":"0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)"};
      --opinafy-star-filled: #f59e0b;
      --opinafy-star-empty: ${p?"#4b5563":"#d1d5db"};
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
  `}function H(a){let{config:e,testimonials:o}=a;if(!o||o.length===0)return'<div class="opinafy-root"><div class="opinafy-error"><p>No hay testimonios para mostrar.</p></div></div>';let i;switch(e.layout){case"carousel":i=D(a);break;case"grid":i=M(a);break;case"wall":i=I(a);break;case"single":i=q(a);break;case"badge":i=O(a);break;default:i=M(a)}return`<div class="opinafy-root">${i}${e.show_branding?U():""}</div>`}function D(a){let{testimonials:e,config:o}=a,i=o.autoplay_speed||5e3,y=e.map((d,n)=>`<div class="opinafy-carousel-slide" data-index="${n}">${w(d,o)}</div>`).join(""),p=e.map((d,n)=>`<button class="opinafy-dot${n===0?" active":""}" data-dot="${n}" aria-label="Ir al testimonio ${n+1}"></button>`).join("");return`
    <div class="opinafy-carousel-wrapper" data-autoplay-speed="${i}">
      <button class="opinafy-carousel-nav opinafy-carousel-prev" data-action="prev" aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="opinafy-carousel-track">
        ${y}
      </div>
      <button class="opinafy-carousel-nav opinafy-carousel-next" data-action="next" aria-label="Siguiente">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div class="opinafy-carousel-dots">${p}</div>
      <div class="opinafy-autoplay-bar running" style="--opinafy-autoplay-speed: ${i}ms"></div>
    </div>
  `}function M(a){return`<div class="opinafy-grid">${a.testimonials.map(o=>w(o,a.config)).join("")}</div>`}function I(a){return`<div class="opinafy-wall">${a.testimonials.map(o=>w(o,a.config)).join("")}</div>`}function q(a){let e=a.testimonials[0];return`<div class="opinafy-single">${w(e,a.config)}</div>`}function O(a){let e=a.average_rating??0,o=a.total_count??a.testimonials.length,i=a.testimonials[0];return`
    <div class="opinafy-badge-container">
      <div class="opinafy-badge-card">
        <div class="opinafy-badge-score">
          <span class="opinafy-badge-number">${e>0?e.toFixed(1):"--"}</span>
          <div>
            ${W(Math.round(e))}
            <div class="opinafy-badge-details">${o} opinion${o!==1?"es":""} verificada${o!==1?"s":""}</div>
          </div>
        </div>
        ${i?`
          <div class="opinafy-badge-snippet">"${x(Y(i.content,100))}"</div>
          <div class="opinafy-badge-author">- ${x(i.author_name)}</div>
        `:""}
      </div>
    </div>
  `}function w(a,e){let{author_name:o,author_avatar:i,company:y,role:p,rating:d,content:n,created_at:t}=a,r=R(o),s=[p,y].filter(Boolean).join(" en "),c=P(t),u=i?`<div class="opinafy-avatar"><img src="${E(i)}" alt="${E(o)}" loading="lazy"/></div>`:`<div class="opinafy-avatar">${x(r)}</div>`;return`
    <div class="opinafy-card" data-testimonial-id="${E(a.id)}">
      <div class="opinafy-card-header">
        ${u}
        <div class="opinafy-author">
          <div class="opinafy-author-name">${x(o)}</div>
          ${s?`<div class="opinafy-author-meta">${x(s)}</div>`:""}
        </div>
      </div>
      ${d>0?`<div class="opinafy-stars">${W(d)}</div>`:""}
      <div class="opinafy-content"><p>${x(n)}</p></div>
      ${c?`<div class="opinafy-date">${c}</div>`:""}
    </div>
  `}function W(a){let e=[];for(let o=1;o<=5;o++)o<=a?e.push('<svg class="opinafy-star opinafy-star-filled" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/></svg>'):e.push('<svg class="opinafy-star opinafy-star-empty" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/></svg>');return e.join("")}function U(){return`
    <div class="opinafy-branding">
      <a href="https://opinafy.com?ref=widget" target="_blank" rel="noopener noreferrer">
        <svg class="opinafy-branding-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Powered by Opinafy
      </a>
    </div>
  `}function x(a){let e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return a.replace(/[&<>"']/g,o=>e[o]||o)}function E(a){return a.replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R(a){return a.split(/\s+/).slice(0,2).map(e=>e.charAt(0)).join("").toUpperCase()}function Y(a,e){return a.length<=e?a:a.slice(0,e).trimEnd()+"..."}function P(a){try{let e=new Date(a);return isNaN(e.getTime())?"":e.toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric"})}catch{return""}}(function(){function a(){let n=document.querySelectorAll("script[src]");for(let t=0;t<n.length;t++){let r=n[t].src;if((r.includes("widget.js")||r.includes("opinafy"))&&(r.includes("localhost")||r.includes("127.0.0.1"))){let s=new URL(r);return`${s.protocol}//${s.host}`}}return"https://opinafy.com"}let e=a();async function o(n){let t=await fetch(`${e}/api/widget/${n}`,{method:"GET",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}function i(n){try{fetch(`${e}/api/widget/${n}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"impression"})}).catch(()=>{})}catch{}}function y(n){let t=n.querySelector(".opinafy-carousel-wrapper");if(!t)return;let r=t.querySelector(".opinafy-carousel-track"),s=t.querySelectorAll(".opinafy-carousel-slide"),c=t.querySelectorAll(".opinafy-dot"),u=t.querySelector('[data-action="prev"]'),_=t.querySelector('[data-action="next"]'),m=t.querySelector(".opinafy-autoplay-bar");if(!r||s.length===0)return;let C=parseInt(t.getAttribute("data-autoplay-speed")||"5000",10),f=0,v=null;function k(l){l<0&&(l=s.length-1),l>=s.length&&(l=0),f=l;let g=s[f];r.scrollTo({left:g.offsetLeft-r.offsetLeft,behavior:"smooth"}),c.forEach((b,h)=>{b.classList.toggle("active",h===f)})}function j(){k(f+1)}function B(){k(f-1)}u&&u.addEventListener("click",()=>{B(),T()}),_&&_.addEventListener("click",()=>{j(),T()}),c.forEach(l=>{l.addEventListener("click",()=>{let g=parseInt(l.getAttribute("data-dot")||"0",10);k(g),T()})});let $=null;r.addEventListener("scroll",()=>{$&&clearTimeout($),$=setTimeout(()=>{let l=r.scrollLeft,g=0,b=1/0;s.forEach((h,S)=>{let z=Math.abs(h.offsetLeft-r.offsetLeft-l);z<b&&(b=z,g=S)}),g!==f&&(f=g,c.forEach((h,S)=>h.classList.toggle("active",S===f)))},100)});function L(){v&&clearInterval(v),v=setInterval(j,C),m&&(m.classList.remove("running"),m.offsetWidth,m.classList.add("running"))}function T(){L()}t.addEventListener("mouseenter",()=>{v&&(clearInterval(v),v=null),m&&m.classList.remove("running")}),t.addEventListener("mouseleave",()=>{L()}),L()}async function p(n){let t=n.getAttribute("data-project");if(!t){console.warn("[Opinafy] Widget element missing data-project attribute.");return}if(n.shadowRoot)return;let r=n.attachShadow({mode:"open"});r.innerHTML=`
      <style>
        :host { display: block; }
        .opinafy-loading { display: flex; align-items: center; justify-content: center; padding: 48px 16px; }
        .opinafy-spinner { width: 32px; height: 32px; border: 3px solid #e5e7eb; border-top-color: #2563eb; border-radius: 50%; animation: s .7s linear infinite; }
        @keyframes s { to { transform: rotate(360deg); } }
      </style>
      <div class="opinafy-loading"><div class="opinafy-spinner"></div></div>
    `;try{let s=await o(t),c=A(s.config||{}),u=H(s);r.innerHTML=`<style>${c}</style>${u}`,s.config?.layout==="carousel"&&y(r),i(t)}catch(s){r.innerHTML=`
        <style>
          :host { display: block; }
          .opinafy-error { text-align: center; padding: 32px 16px; color: #6b7280; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; }
        </style>
        <div class="opinafy-error">
          <p>No se pudieron cargar los testimonios.</p>
          <p>Por favor, intenta de nuevo m\xE1s tarde.</p>
        </div>
      `,console.error("[Opinafy] Error loading widget:",s)}}function d(){document.querySelectorAll("#opinafy-widget, .opinafy-widget").forEach(t=>p(t))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})();})();
