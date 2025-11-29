import{i as u,a as m,S as M}from"./assets/vendor-CYE3kvfv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const a={headerBtnOpenMenu:document.querySelector(".header-button-menu"),headerBtnCloseMenu:document.querySelector(".button-close"),mobileMenu:document.querySelector(".menu-drive")},b=()=>{a.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};a.headerBtnOpenMenu&&a.mobileMenu&&a.headerBtnOpenMenu.addEventListener("click",b);a.headerBtnCloseMenu&&a.mobileMenu&&a.headerBtnCloseMenu.addEventListener("click",b);const w=document.querySelector(".artists-list"),g=document.querySelector(".artists-loader"),h=document.querySelector(".artists-load-more-btn");function A(){g.classList.remove("is-hidden")}function k(){g.classList.add("is-hidden")}function v(){h.classList.remove("is-hidden")}function l(){h.classList.add("is-hidden")}function $(t){return!Array.isArray(t)||t.length===0?"":`<div class="artist-genres">${t.map(e=>`<span class="genre-tag">${e}</span>`).join("")}</div>`}function B(t){const s=t.map(e=>{const o=e.strBiographyEN||"";return`
                <li class="artist-card">
                    <img 
                        class="img-card"
                        src="${e.strArtistThumb||""}" 
                        alt="${e.strArtist||"Artist Photo"}" 
                        loading="lazy"
                    >

                    ${$(e.genres)}

                    <h3 class="artist-name">${e.strArtist}</h3>

                    ${o?`<p class="artist-short-info">${o}</p>`:""}
                    
                    <button 
                        class="learn-more-btn"
                        data-artist-id="${e._id}"
                    >
                        Learn More
                    </button>
                </li>
            `}).join("");w.insertAdjacentHTML("beforeend",s)}const S="https://sound-wave.b.goit.study",y=8;async function E(t=1){const s={limit:y,page:t};try{return(await m.get(`${S}/api/artists`,{params:s})).data}catch(e){throw e}}const P=document.querySelector(".artists-load-more-btn");let d=1,p=0;async function L(){A(),l();try{const t=await E(d),s=t.artists,e=t.totalArtists;if(p=Math.ceil(e/y),B(s),s.length===0){u.error({title:"Поиск не дал результатов",message:"К сожалению, по вашему запросу артистов не найдено.",position:"topRight"});return}d<p?v():l()}catch(t){u.error({title:"Ошибка",message:`Ошибка запроса: ${t.message}`,position:"topRight"}),l()}finally{k()}}P.addEventListener("click",async()=>{d+=1,await L()});L();m.create({baseURL:"https://sound-wave.b.goit.study/api"});const q="https://sound-wave.b.goit.study/api",T="/feedbacks",O=`${q}${T}`,i=document.querySelector(".swiper-wrapper"),f=document.querySelector(".feedback-submit-btn");function R({name:t,feedback:s,rating:e}){const o=Math.round(e);return`<div class="swiper-slide feedback-card">
        <div class="star-rating-container">
            ${"⭐".repeat(o)}
        </div>
        <p class="feedback-text">
            "${s}"
        </p>
        <p class="feedback-author">
            ${t}
        </p>
        <button type="button" class="feedback-submit-btn">Leave feedback</button>
    </div>
    `}function _(t){new M(".feedback-slider",{slidesPerView:1,loop:!0,spaceBetween:30,navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"},pagination:{el:".feedback-pagination",clickable:!0,renderBullet:function(s,e){return s===0?`<span class="${e} pagination-start" aria-label="Go to first slide"></span>`:s===t-1?`<span class="${e} pagination-end" aria-label="Go to last slide"></span>`:`<span class="${e} pagination-middle" aria-label="Go to slide ${s+1}"></span>`}}})}function C(){console.log("Модальне вікно для фідбеку має відкритися тут!")}function j(){C()}f&&f.addEventListener("click",j);async function F(){if(!i){console.error("Swiper wrapper element not found.");return}try{const t=await fetch(O);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let s=await t.json();if(!Array.isArray(s)||s.length===0){i.innerHTML='<p class="no-feedback-message">Наразі відгуків немає.</p>';return}const e=s.slice(0,10),o=e.map(R).join("");i.innerHTML=o,_(e.length)}catch(t){console.error("Помилка при отриманні відгуків:",t),i.innerHTML='<p class="error-message">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>'}}F();const G=document.querySelector(".submit-modal"),H=document.querySelector(".submit-button_modal");function I(){G.classList.remove("is-open")}H.addEventListener("click",I);
//# sourceMappingURL=index.js.map
