import{a as $,i as D,S as Z}from"./assets/vendor-CYE3kvfv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const f={headerBtnOpenMenu:document.querySelector(".header-button-menu"),headerBtnCloseMenu:document.querySelector(".button-close"),mobileMenu:document.querySelector(".menu-drive")},R=()=>{f.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};f.headerBtnOpenMenu&&f.mobileMenu&&f.headerBtnOpenMenu.addEventListener("click",R);f.headerBtnCloseMenu&&f.mobileMenu&&f.headerBtnCloseMenu.addEventListener("click",R);function V(e){const s=Math.floor(e/1e3),t=Math.floor(s/60),r=s%60;return`${t}:${r.toString().padStart(2,"0")}`}function ee(e,s){return!e&&!s?"Information missing":s?`${e} - ${s}`:`${e}-present`}function te(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function se(){const e=document.querySelector(".loader");e&&(e.style.display="none")}function re(e,s=250){e||(e="Information missing");const t=e.length>s,r=e.slice(0,s);return`
    <span id="bio-text">${t?r:e}</span>
    ${t?`<button id="bio-toggle" class="bio-toggle-btn">
            <svg class="modal-icon" width="20" height="20">
              <use href="../img/sprite.svg#icon-dots-horizontal"></use>
            </svg>
          </button>`:""}
  `}function oe(e){const s=document.querySelector("#bio-toggle"),t=document.querySelector("#bio-text");if(!s)return;let r=!1;s.addEventListener("click",()=>{r=!r,r?(t.textContent=e,s.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-modal-up"></use>
        </svg>
      `):(t.textContent=e.slice(0,250),s.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-dots-horizontal"></use>
        </svg>
      `)})}function ne(){const e=document.querySelector(".modal-overlay"),s=document.querySelector(".modal"),t=document.querySelector(".btn-exit");if(!e||!s||!t){console.error("Modal elements not found in DOM");return}function r(){e.classList.remove("is-open")}t.addEventListener("click",r),e.addEventListener("click",i=>{i.target===e&&r()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&r()})}const ie=$.create({baseURL:"https://sound-wave.b.goit.study/api"});async function ae(e){try{te(),document.querySelector(".modal-overlay").classList.add("is-open");const{data:t}=await ie.get(`/artists/${e}/albums`);ce(t)}catch(s){console.error("Error loading artist:",s)}finally{se()}}function ce(e){const{strArtistThumb:s,strArtist:t,intFormedYear:r,intDiedYear:i,genres:a,strGender:l,intMembers:n,strCountry:o,strBiographyEN:c,albumsList:u}=e,b=document.querySelector(".modal");b.innerHTML="";const W=(a==null?void 0:a.map(d=>`<span>${d}</span>`).join(" "))||"",Q=(u||[]).slice(0,8).map(({strAlbum:d,tracks:p})=>{const y=(p==null?void 0:p.map(({strTrack:q,intDuration:X,movie:O})=>`
          <li class="track">
            <span class="title">${q}</span>
            <span class="time">${V(X)}</span>
            ${O?`<a href="${O}" class="yt-btn" target="_blank">
                    <svg class="modal-icon-yt" width="20" height="20">
                      <use href="/img/sprite.svg#icon-YouTube"></use>
                    </svg>
                  </a>`:""}
          </li>`).join(""))||"<li>No tracks found</li>";return`
        <div class="album-card">
          <h3>${d}</h3>
          <div class="table-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </div>
          <ul class="track-list">${y}</ul>
        </div>
      `}).reduce((d,p,y,q)=>(y%2===0?d.push(`<div class="albums-thumb">${p}`):d[d.length-1]+=p+"</div>",y===q.length-1&&y%2===0&&(d[d.length-1]+="</div>"),d),[]).join("");b.innerHTML=`
    <button class="btn-exit" type="button">
      <svg class="modal-icon-exit" width="20" height="20">
        <use href="/img/sprite.svg#icon-close"></use>
      </svg>
    </button>

    <h1 class="actor-name">${t}</h1>

    <div class="actor">
      <img class="actor-img" src="${s}" alt="${t}" />

      <ul class="actor-info">
        <div class="actor-info-container">
          <li><h2>Years active</h2><p>${ee(r,i)}</p></li>
          <li><h2>Sex</h2><p>${l||"Information missing"}</p></li>
        </div>

        <div class="actor-info-container">
          <li><h2>Members</h2><p>${n||"Information missing"}</p></li>
          <li><h2>Country</h2><p>${o||"Information missing"}</p></li>
        </div>

        <li><h2>Biography</h2>${re(c)}</li>
        <li class="actor-cards">${W}</li>
      </ul>
    </div>

    <div class="albums">
      <h2>Albums</h2>
      <div class="albums-cards">${Q}</div>
    </div>
  `,oe(c),ne()}const _=document.querySelector(".artists-list"),F=document.querySelector(".artists-loader"),N=document.querySelector(".artists-load-more-btn");function Y(){F.classList.remove("is-hidden")}function z(){F.classList.add("is-hidden")}function le(){N.classList.remove("is-hidden")}function A(){N.classList.add("is-hidden")}function I(){_.innerHTML=""}function de(e){return!Array.isArray(e)||e.length===0?"":`<div class="artist-genres">${e.map(t=>`<span class="genre-tag">${t}</span>`).join("")}</div>`}function U(e){const s=e.map(t=>{const r=t.strBiographyEN||"";return`
                <li class="artist-card">
                    <img 
                        class="img-card"
                        src="${t.strArtistThumb||""}" 
                        alt="${t.strArtist||"Artist Photo"}" 
                        loading="lazy"
                    >

                    ${de(t.genres)}

                    <h3 class="artist-name">${t.strArtist}</h3>

                    ${r?`<p class="artist-short-info">${r}</p>`:""}
                    
                    <button
                        type="button"
                        class="learn-more-btn"
                        data-artist-id="${t._id}"
                    >
                        Learn More
                        

                    </button>
                </li>
            `}).join("");_.insertAdjacentHTML("beforeend",s),document.addEventListener("click",t=>{if(t.target.classList.contains("learn-more-btn")){const r=t.target.dataset.artistId;ae(r)}})}const ue="https://sound-wave.b.goit.study",K=8;async function fe(e=1){const s={limit:K,page:e};try{return(await $.get(`${ue}/api/artists`,{params:s})).data}catch(t){throw t}}const pe=document.querySelector(".artists-load-more-btn");let B=1,P=0;async function me(){Y(),A();try{const e=await fe(B),s=e.artists,t=e.totalArtists;if(P=Math.ceil(t/K),U(s),s.length===0){D.error({title:"Поиск не дал результатов",message:"К сожалению, по вашему запросу артистов не найдено.",position:"topRight"});return}B<P?le():A()}catch(e){D.error({title:"Ошибка",message:`Ошибка запроса: ${e.message}`,position:"topRight"}),A()}finally{z()}}pe.addEventListener("click",async()=>{B+=1,await me()});const J="https://sound-wave.b.goit.study",C=8;let m=1,ge=0,E="",M="",h="";function L(){return{filtersToggleBtn:document.querySelector(".filters-toggle-btn"),filtersPanel:document.querySelector(".filters-panel"),genreListMobile:document.querySelector(".genre-list"),sortListMobile:document.querySelector(".sort-list"),searchInput:document.getElementById("artist-search"),searchInputDesktop:document.getElementById("artist-search-desktop"),resetBtn:document.querySelectorAll(".reset-btn"),emptyState:document.querySelector(".empty-state"),resetFiltersBtn:document.querySelector(".reset-filters-btn"),sortOptionsDesktop:document.querySelector(".sort-options-desktop"),genreOptionsDesktop:document.querySelector(".genre-options-desktop"),filterAccordionHeaders:document.querySelectorAll(".filter-accordion-header"),filterGroupHeaders:document.querySelectorAll(".filter-group-header")}}async function he(){try{const s=(await $.get(`${J}/api/genres`)).data;return Array.isArray(s)?s.map(t=>typeof t=="string"?t:typeof t=="object"&&t!==null&&(t.name||t.genre||t.title)||String(t)):typeof s=="object"&&s!==null?Object.values(s).map(t=>typeof t=="string"?t:typeof t=="object"&&t!==null&&(t.name||t.genre||t.title)||String(t)):[]}catch(e){return console.error("Error fetching genres:",e),[]}}async function be(){const e=L(),s=await he();e.genreOptionsDesktop&&(e.genreOptionsDesktop.innerHTML='<li class="filter-option-item active" data-genre="">All Genres</li>',s.forEach(t=>{const r=document.createElement("li");r.className="filter-option-item",r.textContent=t,r.setAttribute("data-genre",t),e.genreOptionsDesktop.appendChild(r)})),e.genreListMobile&&(e.genreListMobile.innerHTML='<li class="dropdown-item" data-genre="">All Genres</li>',s.forEach(t=>{const r=document.createElement("li");r.className="dropdown-item",r.textContent=t,r.setAttribute("data-genre",t),e.genreListMobile.appendChild(r)}))}function ye(){const e=L();if(e.sortListMobile){const s=e.sortListMobile.querySelector('.sort-item[data-sort=""]');s&&s.classList.add("active")}if(e.sortOptionsDesktop){const s=e.sortOptionsDesktop.querySelector('.filter-option-item[data-sort=""]');s&&s.classList.add("active")}}async function g(e=1){const s=L();s.emptyState&&s.emptyState.classList.add("is-hidden"),Y(),A();const t={limit:C,page:e};E&&(t.genre=E);try{const i=(await $.get(`${J}/api/artists`,{params:t})).data;let a=i.artists||[];const l=i.totalArtists||0;if(h){const o=h.toLowerCase();a=a.filter(c=>(c.strArtist||"").toLowerCase().includes(o))}M&&a.length>0&&a.sort((o,c)=>{const u=(o.strArtist||"").toLowerCase(),b=(c.strArtist||"").toLowerCase();return M==="name_asc"?u.localeCompare(b):b.localeCompare(u)});const n=h?a.length:l;return ge=Math.ceil(n/C),m=e,I(),a.length===0&&e===1?s.emptyState&&s.emptyState.classList.remove("is-hidden"):U(a),{artists:a,totalArtists:n}}catch(r){return console.error("Error fetching artists:",r),I(),s.emptyState&&s.emptyState.classList.remove("is-hidden"),{artists:[],totalArtists:0}}finally{z()}}function H(){const e=L();if(E="",M="",h="",m=1,e.searchInput&&(e.searchInput.value=""),e.searchInputDesktop&&(e.searchInputDesktop.value=""),[e.sortListMobile,e.sortOptionsDesktop].forEach(s=>{if(!s)return;s.querySelectorAll(".sort-item, .filter-option-item").forEach(r=>{r.classList.remove("active")});const t=s.querySelector('[data-sort=""]');t&&t.classList.add("active")}),e.genreOptionsDesktop){e.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(t=>{t.classList.remove("active")});const s=e.genreOptionsDesktop.querySelector('[data-genre=""]');s&&s.classList.add("active")}g(1)}function ve(){var i,a,l;const e=L();function s(n){E=n,e.genreOptionsDesktop&&e.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-genre")===n)}),e.genreListMobile&&e.genreListMobile.querySelectorAll(".dropdown-item").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-genre")===n)}),m=1,g(1)}function t(n){M=n,e.sortOptionsDesktop&&e.sortOptionsDesktop.querySelectorAll(".filter-option-item").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-sort")===n)}),e.sortListMobile&&e.sortListMobile.querySelectorAll(".sort-item").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-sort")===n)}),m=1,g(1)}function r(n,o){if(!n)return;let c;n.addEventListener("input",()=>{clearTimeout(c),c=setTimeout(()=>{h=n.value.trim(),o&&(o.value=n.value),m=1,g(1)},500)}),n.addEventListener("keypress",u=>{u.key==="Enter"&&(clearTimeout(c),h=n.value.trim(),o&&(o.value=n.value),m=1,g(1))})}e.genreOptionsDesktop&&e.genreOptionsDesktop.addEventListener("click",n=>{const o=n.target.closest(".filter-option-item");o&&s(o.getAttribute("data-genre")||"")}),e.genreListMobile&&e.genreListMobile.addEventListener("click",n=>{const o=n.target.closest(".dropdown-item");o&&s(o.getAttribute("data-genre")||"")}),e.sortOptionsDesktop&&e.sortOptionsDesktop.addEventListener("click",n=>{const o=n.target.closest(".filter-option-item");o&&t(o.getAttribute("data-sort")||"")}),e.sortListMobile&&e.sortListMobile.addEventListener("click",n=>{const o=n.target.closest(".sort-item");o&&t(o.getAttribute("data-sort")||"")}),r(e.searchInput,e.searchInputDesktop),r(e.searchInputDesktop,e.searchInput),((i=e.resetBtn)==null?void 0:i.length)>0&&e.resetBtn.forEach(n=>n.addEventListener("click",H)),e.resetFiltersBtn&&e.resetFiltersBtn.addEventListener("click",H),e.filtersToggleBtn&&e.filtersPanel&&e.filtersToggleBtn.addEventListener("click",()=>{const n=e.filtersPanel.classList.contains("is-hidden");e.filtersPanel.classList.toggle("is-hidden",!n),e.filtersToggleBtn.classList.toggle("is-open",n)}),(a=e.filterGroupHeaders)==null||a.forEach(n=>{n.addEventListener("click",()=>{var c;const o=(c=n.closest(".filter-group"))==null?void 0:c.querySelector(".filter-group-content");o&&o.classList.toggle("is-hidden")})}),(l=e.filterAccordionHeaders)==null||l.forEach(n=>{n.addEventListener("click",()=>{var c;const o=(c=n.closest(".filter-accordion"))==null?void 0:c.querySelector(".filter-accordion-content");o&&o.classList.toggle("is-hidden")})})}async function Le(){try{document.readyState==="loading"&&await new Promise(e=>document.addEventListener("DOMContentLoaded",e)),await new Promise(e=>setTimeout(e,300)),ve(),await be(),ye(),await g(1)}catch(e){console.error("Error initializing filters:",e)}}Le();const Se="https://sound-wave.b.goit.study/api",ke="/feedbacks",Ae=`${Se}${ke}`,S=document.querySelector(".swiper-wrapper"),G=document.querySelector(".feedback-submit-btn");function Ee({name:e,feedback:s,rating:t}){const r=Math.round(t);return`<div class="swiper-slide feedback-card">
        <div class="star-rating-container">
            ${"⭐".repeat(r)}
        </div>
        <p class="feedback-text">
            "${s}"
        </p>
        <p class="feedback-author">
            ${e}
        </p>
        <button type="button" class="feedback-submit-btn">Leave feedback</button>
    </div>
    `}function Me(e){new Z(".feedback-slider",{slidesPerView:1,loop:!0,spaceBetween:30,navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"},pagination:{el:".feedback-pagination",clickable:!0,renderBullet:function(s,t){return s===0?`<span class="${t} pagination-start" aria-label="Go to first slide"></span>`:s===e-1?`<span class="${t} pagination-end" aria-label="Go to last slide"></span>`:`<span class="${t} pagination-middle" aria-label="Go to slide ${s+1}"></span>`}}})}function we(){console.log("Модальне вікно для фідбеку має відкритися тут!")}function $e(){we()}G&&G.addEventListener("click",$e);async function qe(){if(!S){console.error("Swiper wrapper element not found.");return}try{const e=await fetch(Ae);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);let s=await e.json();if(!Array.isArray(s)||s.length===0){S.innerHTML='<p class="no-feedback-message">Наразі відгуків немає.</p>';return}const t=s.slice(0,10),r=t.map(Ee).join("");S.innerHTML=r,Me(t.length)}catch(e){console.error("Помилка при отриманні відгуків:",e),S.innerHTML='<p class="error-message">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>'}}qe();const k=window.$,j=document.querySelector(".submit-modal"),w=document.querySelector(".submit-feedback"),Be=document.querySelector(".submit-button_modal"),v=document.querySelector(".submit-form"),x="project-feedbacks";function T(){w&&w.classList.remove("is-open"),j&&(j.classList.remove("is-open"),document.body.style.overflow="")}Be.addEventListener("click",T);w.addEventListener("click",e=>{e.target===w&&T()});k(document).ready(()=>{k("#user-rating-input").raty({starType:"img",number:5,path:"https://cdnjs.cloudflare.com/ajax/libs/raty/2.7.1/images",score:0,click:e=>{k("#rating-score").val(e)}}),v.addEventListener("submit",e=>{e.preventDefault();const s=v.username.value.trim(),t=v.message.value.trim(),r=Number(v["rating-score"].value);if(!s||!t||r===0){alert("Please, fill the fields and choose a rating");return}const i={id:Date.now().toString(),name:s,message:t,rating:r},a=JSON.parse(localStorage.getItem(x))||[];a.push(i),localStorage.setItem(x,JSON.stringify(a)),v.reset(),k("#user-rating-input").raty("score",0),document.querySelector("#rating-score").value=0,T()})});
//# sourceMappingURL=index.js.map
