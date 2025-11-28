import{i as d,a as h,S as y}from"./assets/vendor-CYE3kvfv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const L=document.querySelector(".artists-list"),f=document.querySelector(".artists-loader"),m=document.querySelector(".artists-load-more-btn");function w(){f.classList.remove("is-hidden")}function A(){f.classList.add("is-hidden")}function $(){m.classList.remove("is-hidden")}function c(){m.classList.add("is-hidden")}function k(e){return!Array.isArray(e)||e.length===0?"":`<div class="artist-genres">${e.map(t=>`<span class="genre-tag">${t}</span>`).join("")}</div>`}function v(e){const s=e.map(t=>{const o=t.strBiographyEN||"";return`
                <li class="artist-card">
                    <img 
                        class="img-card"
                        src="${t.strArtistThumb||""}" 
                        alt="${t.strArtist||"Artist Photo"}" 
                        loading="lazy"
                    >

                    ${k(t.genres)}

                    <h3 class="artist-name">${t.strArtist}</h3>

                    ${o?`<p class="artist-short-info">${o}</p>`:""}
                    
                    <button 
                        class="learn-more-btn"
                        data-artist-id="${t._id}"
                    >
                        Learn More
                    </button>
                </li>
            `}).join("");L.insertAdjacentHTML("beforeend",s)}const M="https://sound-wave.b.goit.study",b=8;async function E(e=1){const s={limit:b,page:e};try{return(await h.get(`${M}/api/artists`,{params:s})).data}catch(t){throw t}}const S=document.querySelector(".artists-load-more-btn");let l=1,u=0;async function g(){w(),c();try{const e=await E(l),s=e.artists,t=e.totalArtists;if(u=Math.ceil(t/b),v(s),s.length===0){d.error({title:"Поиск не дал результатов",message:"К сожалению, по вашему запросу артистов не найдено.",position:"topRight"});return}l<u?$():c()}catch(e){d.error({title:"Ошибка",message:`Ошибка запроса: ${e.message}`,position:"topRight"}),c()}finally{A()}}S.addEventListener("click",async()=>{l+=1,await g()});g();const B="https://sound-wave.b.goit.study/api",P="/feedbacks",T=`${B}${P}`,a=document.querySelector(".swiper-wrapper"),p=document.querySelector(".feedback-submit-btn");function q({name:e,feedback:s,rating:t}){const o=Math.round(t);return`<div class="swiper-slide feedback-card">
        <div class="star-rating-container">
            ${"⭐".repeat(o)}
        </div>
        <p class="feedback-text">
            "${s}"
        </p>
        <p class="feedback-author">
            ${e}
        </p>
        <button type="button" class="feedback-submit-btn">Leave feedback</button>
    </div>
    `}function R(e){new y(".feedback-slider",{slidesPerView:1,loop:!0,spaceBetween:30,navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"},pagination:{el:".feedback-pagination",clickable:!0,renderBullet:function(s,t){return s===0?`<span class="${t} pagination-start" aria-label="Go to first slide"></span>`:s===e-1?`<span class="${t} pagination-end" aria-label="Go to last slide"></span>`:`<span class="${t} pagination-middle" aria-label="Go to slide ${s+1}"></span>`}}})}function O(){console.log("Модальне вікно для фідбеку має відкритися тут!")}function _(){O()}p&&p.addEventListener("click",_);async function j(){if(!a){console.error("Swiper wrapper element not found.");return}try{const e=await fetch(T);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);let s=await e.json();if(!Array.isArray(s)||s.length===0){a.innerHTML='<p class="no-feedback-message">Наразі відгуків немає.</p>';return}const t=s.slice(0,10),o=t.map(q).join("");a.innerHTML=o,R(t.length)}catch(e){console.error("Помилка при отриманні відгуків:",e),a.innerHTML='<p class="error-message">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>'}}j();const F=document.querySelector(".submit-modal"),G=document.querySelector(".submit-button_modal");function H(){F.classList.remove("is-open")}G.addEventListener("click",H);
//# sourceMappingURL=index.js.map
