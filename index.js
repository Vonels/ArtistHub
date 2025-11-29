import{i as v,a as $,S as C}from"./assets/vendor-CYE3kvfv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const a={headerBtnOpenMenu:document.querySelector(".header-button-menu"),headerBtnCloseMenu:document.querySelector(".button-close"),mobileMenu:document.querySelector(".menu-drive")},M=()=>{a.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};a.headerBtnOpenMenu&&a.mobileMenu&&a.headerBtnOpenMenu.addEventListener("click",M);a.headerBtnCloseMenu&&a.mobileMenu&&a.headerBtnCloseMenu.addEventListener("click",M);const x=document.querySelector(".artists-list"),k=document.querySelector(".artists-loader"),w=document.querySelector(".artists-load-more-btn");function O(){k.classList.remove("is-hidden")}function R(){k.classList.add("is-hidden")}function j(){w.classList.remove("is-hidden")}function m(){w.classList.add("is-hidden")}function G(t){return!Array.isArray(t)||t.length===0?"":`<div class="artist-genres">${t.map(s=>`<span class="genre-tag">${s}</span>`).join("")}</div>`}function N(t){const e=t.map(s=>{const n=s.strBiographyEN||"";return`
                <li class="artist-card">
                    <img 
                        class="img-card"
                        src="${s.strArtistThumb||""}" 
                        alt="${s.strArtist||"Artist Photo"}" 
                        loading="lazy"
                    >

                    ${G(s.genres)}

                    <h3 class="artist-name">${s.strArtist}</h3>

                    ${n?`<p class="artist-short-info">${n}</p>`:""}
                    
                    <button 
                        class="learn-more-btn"
                        data-artist-id="${s._id}"
                    >
                        Learn More
                    </button>
                </li>
            `}).join("");x.insertAdjacentHTML("beforeend",e)}const _="https://sound-wave.b.goit.study",A=8;async function F(t=1){const e={limit:A,page:t};try{return(await $.get(`${_}/api/artists`,{params:e})).data}catch(s){throw s}}const Y=document.querySelector(".artists-load-more-btn");let f=1,y=0;async function S(){O(),m();try{const t=await F(f),e=t.artists,s=t.totalArtists;if(y=Math.ceil(s/A),N(e),e.length===0){v.error({title:"Поиск не дал результатов",message:"К сожалению, по вашему запросу артистов не найдено.",position:"topRight"});return}f<y?j():m()}catch(t){v.error({title:"Ошибка",message:`Ошибка запроса: ${t.message}`,position:"topRight"}),m()}finally{R()}}Y.addEventListener("click",async()=>{f+=1,await S()});S();function z(t){const e=Math.floor(t/1e3),s=Math.floor(e/60),n=e%60;return`${s}:${n.toString().padStart(2,"0")}`}function D(t,e){return t===null&&e===null?"Information missing":e===null?`${t}-present`:`${t} - ${e}`}function U(){const t=document.querySelector(".loader");t.style.display="block"}function K(){const t=document.querySelector(".loader");t.style.display="none"}function W(t,e=250){t||(t="Information missing");const s=t.length>e,n=t.slice(0,e);return`
    <span id="bio-text">${s?n:t}</span>
    ${s?`<button id="bio-toggle" class="bio-toggle-btn">
            <svg class="modal-icon" width="20" height="20">
              <use href="../img/sprite.svg#icon-dots-horizontal"></use>
            </svg>
          </button>`:""}
  `}function V(t){const e=document.querySelector("#bio-toggle"),s=document.querySelector("#bio-text");if(!e)return;let n=!1;e.addEventListener("click",()=>{n=!n,n?(s.textContent=t,e.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-modal-up"></use>
        </svg>
      `):(s.textContent=t.slice(0,250),e.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-dots-horizontal"></use>
        </svg>
      `)})}const J=$.create({baseURL:"https://sound-wave.b.goit.study/api"});async function Q(t){try{U();const{data:e}=await J.get(`/artists/${t}/albums`);X(e)}catch(e){console.error("Error:",e)}finally{K()}}function X(t){const{strArtistThumb:e,strArtist:s,intFormedYear:n,intDiedYear:o,genres:r,strGender:c,intMembers:T,strCountry:B,strBiographyEN:g,albumsList:E}=t,h=document.querySelector(".modal");h.innerHTML="";const q=(r==null?void 0:r.map(i=>`<span>${i}</span>`).join(" "))||"",H=(E||[]).slice(0,8).map(({strAlbum:i,tracks:d})=>{const l=(d||[]).map(({strTrack:p,intDuration:P,movie:b})=>`
          <li class="track">
            <span class="title">${p}</span>
            <span class="time">${z(P)}</span>
            ${b?`<a href="${b}" class="yt-btn">
                    <svg class="modal-icon-more-text" width="20" height="20">
                      <use href="../img/sprite.svg#icon-YouTube"></use>
                    </svg>
                  </a>`:""}
          </li>`).join("");return`
        <div class="album-card">
          <h3>${i}</h3>
          <div class="table-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </div>
          <ul class="track-list">
            ${l||"<li>No tracks found</li>"}
          </ul>
        </div>
      `}).reduce((i,d,l,p)=>(l%2===0?i.push(`<div class="albums-thumb">${d}`):i[i.length-1]+=d+"</div>",l===p.length-1&&l%2===0&&(i[i.length-1]+="</div>"),i),[]).join(""),I=`
    <h1 class="actor-name">${s}</h1>
    <div class="actor">
      <img class="actor-img" src="${e}" alt="${s}"/>
      <ul class="actor-info">
        <div class="actor-info-container">
          <li><h2>Years active</h2><p>${D(n,o)}</p></li>
          <li><h2>Sex</h2><p>${c||"Information missing"}</p></li>
        </div>
        <div class="actor-info-container">
          <li><h2>Members</h2><p>${T||"Information missing"}</p></li>
          <li><h2>Country</h2><p>${B||"Information missing"}</p></li>
        </div>
        <li><h2>Biography</h2>${W(g)}</li>
        <li class="actor-cards">${q}</li>
      </ul>
    </div>

    <div class="albums">
      <h2>Albums</h2>
      <div class="albums-cards">
        ${H}
      </div>
    </div>
  `;h.innerHTML=I,V(g)}document.addEventListener("click",t=>{const e=t.target.closest(".learn-more-btn");if(document.querySelector(".modal-overlay").classList.add("is-open"),!e)return;const n=e.dataset.artistId;console.log(e.dataset.artistId),Q(n)});const Z="https://sound-wave.b.goit.study/api",tt="/feedbacks",et=`${Z}${tt}`,u=document.querySelector(".swiper-wrapper"),L=document.querySelector(".feedback-submit-btn");function st({name:t,feedback:e,rating:s}){const n=Math.round(s);return`<div class="swiper-slide feedback-card">
        <div class="star-rating-container">
            ${"⭐".repeat(n)}
        </div>
        <p class="feedback-text">
            "${e}"
        </p>
        <p class="feedback-author">
            ${t}
        </p>
        <button type="button" class="feedback-submit-btn">Leave feedback</button>
    </div>
    `}function nt(t){new C(".feedback-slider",{slidesPerView:1,loop:!0,spaceBetween:30,navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"},pagination:{el:".feedback-pagination",clickable:!0,renderBullet:function(e,s){return e===0?`<span class="${s} pagination-start" aria-label="Go to first slide"></span>`:e===t-1?`<span class="${s} pagination-end" aria-label="Go to last slide"></span>`:`<span class="${s} pagination-middle" aria-label="Go to slide ${e+1}"></span>`}}})}function ot(){console.log("Модальне вікно для фідбеку має відкритися тут!")}function rt(){ot()}L&&L.addEventListener("click",rt);async function it(){if(!u){console.error("Swiper wrapper element not found.");return}try{const t=await fetch(et);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let e=await t.json();if(!Array.isArray(e)||e.length===0){u.innerHTML='<p class="no-feedback-message">Наразі відгуків немає.</p>';return}const s=e.slice(0,10),n=s.map(st).join("");u.innerHTML=n,nt(s.length)}catch(t){console.error("Помилка при отриманні відгуків:",t),u.innerHTML='<p class="error-message">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>'}}it();const at=document.querySelector(".submit-modal"),ct=document.querySelector(".submit-button_modal");function lt(){at.classList.remove("is-open")}ct.addEventListener("click",lt);
//# sourceMappingURL=index.js.map
