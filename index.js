import{S as l}from"./assets/vendor-Di-HgT5n.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="https://sound-wave.b.goit.study/api",d="/feedbacks",p=`${u}${d}`,a=document.querySelector(".swiper-wrapper"),c=document.querySelector(".feedback-submit-btn");function f({name:n,feedback:t,rating:o}){const s=Math.round(o);return`<div class="swiper-slide feedback-card">
        <div class="star-rating-container">
            ${"⭐".repeat(s)}
        </div>
        <p class="feedback-text">
            "${t}"
        </p>
        <p class="feedback-author">
            ${n}
        </p>
        <button type="button" class="feedback-submit-btn">Leave feedback</button>
    </div>
    `}function b(n){new l(".feedback-slider",{slidesPerView:1,loop:!0,spaceBetween:30,navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"},pagination:{el:".feedback-pagination",clickable:!0,renderBullet:function(t,o){return t===0?`<span class="${o} pagination-start" aria-label="Go to first slide"></span>`:t===n-1?`<span class="${o} pagination-end" aria-label="Go to last slide"></span>`:`<span class="${o} pagination-middle" aria-label="Go to slide ${t+1}"></span>`}}})}function m(){console.log("Модальне вікно для фідбеку має відкритися тут!")}function g(){m()}c&&c.addEventListener("click",g);async function k(){if(!a){console.error("Swiper wrapper element not found.");return}try{const n=await fetch(p);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);let t=await n.json();if(!Array.isArray(t)||t.length===0){a.innerHTML='<p class="no-feedback-message">Наразі відгуків немає.</p>';return}const o=t.slice(0,10),s=o.map(f).join("");a.innerHTML=s,b(o.length)}catch(n){console.error("Помилка при отриманні відгуків:",n),a.innerHTML='<p class="error-message">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>'}}k();
//# sourceMappingURL=index.js.map
