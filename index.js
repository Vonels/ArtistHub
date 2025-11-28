import{i as d,a as h,S as y}from"./assets/vendor-CYE3kvfv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const A=document.querySelector(".artists-list"),f=document.querySelector(".artists-loader"),m=document.querySelector(".artists-load-more-btn");function L(){f.classList.remove("is-hidden")}function w(){f.classList.add("is-hidden")}function $(){m.classList.remove("is-hidden")}function c(){m.classList.add("is-hidden")}function k(e){return!Array.isArray(e)||e.length===0?"":`<div class="artist-genres">${e.map(t=>`<span class="genre-tag">${t}</span>`).join("")}</div>`}function v(e){const r=e.map(t=>{const o=t.strBiographyEN||"";return`
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
            `}).join("");A.insertAdjacentHTML("beforeend",r)}const M="https://sound-wave.b.goit.study",b=8;async function E(e=1){const r={limit:b,page:e};try{return(await h.get(`${M}/api/artists`,{params:r})).data}catch(t){throw t}}const S=document.querySelector(".artists-load-more-btn");let l=1,u=0;async function g(){L(),c();try{const e=await E(l),r=e.artists,t=e.totalArtists;if(u=Math.ceil(t/b),v(r),r.length===0){d.error({title:"Поиск не дал результатов",message:"К сожалению, по вашему запросу артистов не найдено.",position:"topRight"});return}l<u?$():c()}catch(e){d.error({title:"Ошибка",message:`Ошибка запроса: ${e.message}`,position:"topRight"}),c()}finally{w()}}S.addEventListener("click",async()=>{l+=1,await g()});g();const P="https://sound-wave.b.goit.study/api",B="/feedbacks",T=`${P}${B}`,a=document.querySelector(".swiper-wrapper"),p=document.querySelector(".feedback-submit-btn");function R({name:e,feedback:r,rating:t}){const o=Math.round(t);return`<div class="swiper-slide feedback-card">
        <div class="star-rating-container">
            ${"⭐".repeat(o)}
        </div>
        <p class="feedback-text">
            "${r}"
        </p>
        <p class="feedback-author">
            ${e}
        </p>
        <button type="button" class="feedback-submit-btn">Leave feedback</button>
    </div>
    `}function q(e){new y(".feedback-slider",{slidesPerView:1,loop:!0,spaceBetween:30,navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"},pagination:{el:".feedback-pagination",clickable:!0,renderBullet:function(r,t){return r===0?`<span class="${t} pagination-start" aria-label="Go to first slide"></span>`:r===e-1?`<span class="${t} pagination-end" aria-label="Go to last slide"></span>`:`<span class="${t} pagination-middle" aria-label="Go to slide ${r+1}"></span>`}}})}function O(){console.log("Модальне вікно для фідбеку має відкритися тут!")}function _(){O()}p&&p.addEventListener("click",_);async function j(){if(!a){console.error("Swiper wrapper element not found.");return}try{const e=await fetch(T);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);let r=await e.json();if(!Array.isArray(r)||r.length===0){a.innerHTML='<p class="no-feedback-message">Наразі відгуків немає.</p>';return}const t=r.slice(0,10),o=t.map(R).join("");a.innerHTML=o,q(t.length)}catch(e){console.error("Помилка при отриманні відгуків:",e),a.innerHTML='<p class="error-message">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>'}}j();
//# sourceMappingURL=index.js.map
