import{a as M,i as q,S as Y}from"./assets/vendor-CYE3kvfv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const p={headerBtnOpenMenu:document.querySelector(".header-button-menu"),headerBtnCloseMenu:document.querySelector(".button-close"),mobileMenu:document.querySelector(".menu-drive")},P=()=>{p.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};p.headerBtnOpenMenu&&p.mobileMenu&&p.headerBtnOpenMenu.addEventListener("click",P);p.headerBtnCloseMenu&&p.mobileMenu&&p.headerBtnCloseMenu.addEventListener("click",P);function K(t){const s=Math.floor(t/1e3),e=Math.floor(s/60),r=s%60;return`${e}:${r.toString().padStart(2,"0")}`}function W(t,s){return!t&&!s?"Information missing":s?`${t} - ${s}`:`${t}-present`}function Q(){const t=document.querySelector(".loader");t&&(t.style.display="block")}function J(){const t=document.querySelector(".loader");t&&(t.style.display="none")}function X(t,s=250){t||(t="Information missing");const e=t.length>s,r=t.slice(0,s);return`
    <span id="bio-text">${e?r:t}</span>
    ${e?`<button id="bio-toggle" class="bio-toggle-btn">
            <svg class="modal-icon" width="20" height="20">
              <use href="../img/sprite.svg#icon-dots-horizontal"></use>
            </svg>
          </button>`:""}
  `}function Z(t){const s=document.querySelector("#bio-toggle"),e=document.querySelector("#bio-text");if(!s)return;let r=!1;s.addEventListener("click",()=>{r=!r,r?(e.textContent=t,s.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-modal-up"></use>
        </svg>
      `):(e.textContent=t.slice(0,250),s.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-dots-horizontal"></use>
        </svg>
      `)})}function V(){const t=document.querySelector(".modal-overlay"),s=document.querySelector(".modal"),e=document.querySelector(".btn-exit");if(!t||!s||!e){console.error("Modal elements not found in DOM");return}function r(){t.classList.remove("is-open")}e.addEventListener("click",r),t.addEventListener("click",i=>{i.target===t&&r()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&r()})}const tt=M.create({baseURL:"https://sound-wave.b.goit.study/api"});async function et(t){try{Q(),document.querySelector(".modal-overlay").classList.add("is-open");const{data:e}=await tt.get(`/artists/${t}/albums`);st(e)}catch(s){console.error("Error loading artist:",s)}finally{J()}}function st(t){const{strArtistThumb:s,strArtist:e,intFormedYear:r,intDiedYear:i,genres:a,strGender:l,intMembers:o,strCountry:n,strBiographyEN:c,albumsList:u}=t,b=document.querySelector(".modal");b.innerHTML="";const N=(a==null?void 0:a.map(d=>`<span>${d}</span>`).join(" "))||"",z=(u||[]).slice(0,8).map(({strAlbum:d,tracks:f})=>{const y=(f==null?void 0:f.map(({strTrack:E,intDuration:U,movie:w})=>`
          <li class="track">
            <span class="title">${E}</span>
            <span class="time">${K(U)}</span>
            ${w?`<a href="${w}" class="yt-btn" target="_blank">
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
      `}).reduce((d,f,y,E)=>(y%2===0?d.push(`<div class="albums-thumb">${f}`):d[d.length-1]+=f+"</div>",y===E.length-1&&y%2===0&&(d[d.length-1]+="</div>"),d),[]).join("");b.innerHTML=`
    <button class="btn-exit" type="button">
      <svg class="modal-icon-exit" width="20" height="20">
        <use href="/img/sprite.svg#icon-close"></use>
      </svg>
    </button>

    <h1 class="actor-name">${e}</h1>

    <div class="actor">
      <img class="actor-img" src="${s}" alt="${e}" />

      <ul class="actor-info">
        <div class="actor-info-container">
          <li><h2>Years active</h2><p>${W(r,i)}</p></li>
          <li><h2>Sex</h2><p>${l||"Information missing"}</p></li>
        </div>

        <div class="actor-info-container">
          <li><h2>Members</h2><p>${o||"Information missing"}</p></li>
          <li><h2>Country</h2><p>${n||"Information missing"}</p></li>
        </div>

        <li><h2>Biography</h2>${X(c)}</li>
        <li class="actor-cards">${N}</li>
      </ul>
    </div>

    <div class="albums">
      <h2>Albums</h2>
      <div class="albums-cards">${z}</div>
    </div>
  `,Z(c),V()}const C=document.querySelector(".artists-list"),H=document.querySelector(".artists-loader"),G=document.querySelector(".artists-load-more-btn");function j(){H.classList.remove("is-hidden")}function x(){H.classList.add("is-hidden")}function rt(){G.classList.remove("is-hidden")}function k(){G.classList.add("is-hidden")}function B(){C.innerHTML=""}function nt(t){return!Array.isArray(t)||t.length===0?"":`<div class="artist-genres">${t.map(e=>`<span class="genre-tag">${e}</span>`).join("")}</div>`}function R(t){const s=t.map(e=>{const r=e.strBiographyEN||"";return`
                <li class="artist-card">
                    <img 
                        class="img-card"
                        src="${e.strArtistThumb||""}" 
                        alt="${e.strArtist||"Artist Photo"}" 
                        loading="lazy"
                    >

                    ${nt(e.genres)}

                    <h3 class="artist-name">${e.strArtist}</h3>

                    ${r?`<p class="artist-short-info">${r}</p>`:""}
                    
                    <button
                        type="button"
                        class="learn-more-btn"
                        data-artist-id="${e._id}"
                    >
                        Learn More
                        

                    </button>
                </li>
            `}).join("");C.insertAdjacentHTML("beforeend",s),document.addEventListener("click",e=>{if(e.target.classList.contains("learn-more-btn")){const r=e.target.dataset.artistId;et(r)}})}const ot="https://sound-wave.b.goit.study",_=8;async function it(t=1){const s={limit:_,page:t};try{return(await M.get(`${ot}/api/artists`,{params:s})).data}catch(e){throw e}}const at=document.querySelector(".artists-load-more-btn");let $=1,T=0;async function ct(){j(),k();try{const t=await it($),s=t.artists,e=t.totalArtists;if(T=Math.ceil(e/_),R(s),s.length===0){q.error({title:"Поиск не дал результатов",message:"К сожалению, по вашему запросу артистов не найдено.",position:"topRight"});return}$<T?rt():k()}catch(t){q.error({title:"Ошибка",message:`Ошибка запроса: ${t.message}`,position:"topRight"}),k()}finally{x()}}at.addEventListener("click",async()=>{$+=1,await ct()});const F="https://sound-wave.b.goit.study",O=8;let g=1,lt=0,S="",A="",h="";function L(){return{filtersToggleBtn:document.querySelector(".filters-toggle-btn"),filtersPanel:document.querySelector(".filters-panel"),genreListMobile:document.querySelector(".genre-list"),sortListMobile:document.querySelector(".sort-list"),searchInput:document.getElementById("artist-search"),searchInputDesktop:document.getElementById("artist-search-desktop"),resetBtn:document.querySelectorAll(".reset-btn"),emptyState:document.querySelector(".empty-state"),resetFiltersBtn:document.querySelector(".reset-filters-btn"),sortOptionsDesktop:document.querySelector(".sort-options-desktop"),genreOptionsDesktop:document.querySelector(".genre-options-desktop"),filterAccordionHeaders:document.querySelectorAll(".filter-accordion-header"),filterGroupHeaders:document.querySelectorAll(".filter-group-header")}}async function dt(){try{const s=(await M.get(`${F}/api/genres`)).data;return Array.isArray(s)?s.map(e=>typeof e=="string"?e:typeof e=="object"&&e!==null&&(e.name||e.genre||e.title)||String(e)):typeof s=="object"&&s!==null?Object.values(s).map(e=>typeof e=="string"?e:typeof e=="object"&&e!==null&&(e.name||e.genre||e.title)||String(e)):[]}catch(t){return console.error("Error fetching genres:",t),[]}}async function ut(){const t=L(),s=await dt();t.genreOptionsDesktop&&(t.genreOptionsDesktop.innerHTML='<li class="filter-option-item active" data-genre="">All Genres</li>',s.forEach(e=>{const r=document.createElement("li");r.className="filter-option-item",r.textContent=e,r.setAttribute("data-genre",e),t.genreOptionsDesktop.appendChild(r)})),t.genreListMobile&&(t.genreListMobile.innerHTML='<li class="dropdown-item" data-genre="">All Genres</li>',s.forEach(e=>{const r=document.createElement("li");r.className="dropdown-item",r.textContent=e,r.setAttribute("data-genre",e),t.genreListMobile.appendChild(r)}))}function pt(){const t=L();if(t.sortListMobile){const s=t.sortListMobile.querySelector('.sort-item[data-sort=""]');s&&s.classList.add("active")}if(t.sortOptionsDesktop){const s=t.sortOptionsDesktop.querySelector('.filter-option-item[data-sort=""]');s&&s.classList.add("active")}}async function m(t=1){const s=L();s.emptyState&&s.emptyState.classList.add("is-hidden"),j(),k();const e={limit:O,page:t};S&&(e.genre=S);try{const i=(await M.get(`${F}/api/artists`,{params:e})).data;let a=i.artists||[];const l=i.totalArtists||0;if(h){const n=h.toLowerCase();a=a.filter(c=>(c.strArtist||"").toLowerCase().includes(n))}A&&a.length>0&&a.sort((n,c)=>{const u=(n.strArtist||"").toLowerCase(),b=(c.strArtist||"").toLowerCase();return A==="name_asc"?u.localeCompare(b):b.localeCompare(u)});const o=h?a.length:l;return lt=Math.ceil(o/O),g=t,B(),a.length===0&&t===1?s.emptyState&&s.emptyState.classList.remove("is-hidden"):R(a),{artists:a,totalArtists:o}}catch(r){return console.error("Error fetching artists:",r),B(),s.emptyState&&s.emptyState.classList.remove("is-hidden"),{artists:[],totalArtists:0}}finally{x()}}function D(){const t=L();if(S="",A="",h="",g=1,t.searchInput&&(t.searchInput.value=""),t.searchInputDesktop&&(t.searchInputDesktop.value=""),[t.sortListMobile,t.sortOptionsDesktop].forEach(s=>{if(!s)return;s.querySelectorAll(".sort-item, .filter-option-item").forEach(r=>{r.classList.remove("active")});const e=s.querySelector('[data-sort=""]');e&&e.classList.add("active")}),t.genreOptionsDesktop){t.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(e=>{e.classList.remove("active")});const s=t.genreOptionsDesktop.querySelector('[data-genre=""]');s&&s.classList.add("active")}m(1)}function ft(){var i,a,l;const t=L();function s(o){S=o,t.genreOptionsDesktop&&t.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-genre")===o)}),t.genreListMobile&&t.genreListMobile.querySelectorAll(".dropdown-item").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-genre")===o)}),g=1,m(1)}function e(o){A=o,t.sortOptionsDesktop&&t.sortOptionsDesktop.querySelectorAll(".filter-option-item").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-sort")===o)}),t.sortListMobile&&t.sortListMobile.querySelectorAll(".sort-item").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-sort")===o)}),g=1,m(1)}function r(o,n){if(!o)return;let c;o.addEventListener("input",()=>{clearTimeout(c),c=setTimeout(()=>{h=o.value.trim(),n&&(n.value=o.value),g=1,m(1)},500)}),o.addEventListener("keypress",u=>{u.key==="Enter"&&(clearTimeout(c),h=o.value.trim(),n&&(n.value=o.value),g=1,m(1))})}t.genreOptionsDesktop&&t.genreOptionsDesktop.addEventListener("click",o=>{const n=o.target.closest(".filter-option-item");n&&s(n.getAttribute("data-genre")||"")}),t.genreListMobile&&t.genreListMobile.addEventListener("click",o=>{const n=o.target.closest(".dropdown-item");n&&s(n.getAttribute("data-genre")||"")}),t.sortOptionsDesktop&&t.sortOptionsDesktop.addEventListener("click",o=>{const n=o.target.closest(".filter-option-item");n&&e(n.getAttribute("data-sort")||"")}),t.sortListMobile&&t.sortListMobile.addEventListener("click",o=>{const n=o.target.closest(".sort-item");n&&e(n.getAttribute("data-sort")||"")}),r(t.searchInput,t.searchInputDesktop),r(t.searchInputDesktop,t.searchInput),((i=t.resetBtn)==null?void 0:i.length)>0&&t.resetBtn.forEach(o=>o.addEventListener("click",D)),t.resetFiltersBtn&&t.resetFiltersBtn.addEventListener("click",D),t.filtersToggleBtn&&t.filtersPanel&&t.filtersToggleBtn.addEventListener("click",()=>{const o=t.filtersPanel.classList.contains("is-hidden");t.filtersPanel.classList.toggle("is-hidden",!o),t.filtersToggleBtn.classList.toggle("is-open",o)}),(a=t.filterGroupHeaders)==null||a.forEach(o=>{o.addEventListener("click",()=>{var c;const n=(c=o.closest(".filter-group"))==null?void 0:c.querySelector(".filter-group-content");n&&n.classList.toggle("is-hidden")})}),(l=t.filterAccordionHeaders)==null||l.forEach(o=>{o.addEventListener("click",()=>{var c;const n=(c=o.closest(".filter-accordion"))==null?void 0:c.querySelector(".filter-accordion-content");n&&n.classList.toggle("is-hidden")})})}async function gt(){try{document.readyState==="loading"&&await new Promise(t=>document.addEventListener("DOMContentLoaded",t)),await new Promise(t=>setTimeout(t,300)),ft(),await ut(),pt(),await m(1)}catch(t){console.error("Error initializing filters:",t)}}gt();const mt="https://sound-wave.b.goit.study/api",ht="/feedbacks",bt=`${mt}${ht}`,v=document.querySelector(".swiper-wrapper"),I=document.querySelector(".feedback-submit-btn");function yt({name:t,feedback:s,rating:e}){const r=Math.round(e);return`<div class="swiper-slide feedback-card">
        <div class="star-rating-container">
            ${"⭐".repeat(r)}
        </div>
        <p class="feedback-text">
            "${s}"
        </p>
        <p class="feedback-author">
            ${t}
        </p>
        <button type="button" class="feedback-submit-btn">Leave feedback</button>
    </div>
    `}function Lt(t){new Y(".feedback-slider",{slidesPerView:1,loop:!0,spaceBetween:30,navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"},pagination:{el:".feedback-pagination",clickable:!0,renderBullet:function(s,e){return s===0?`<span class="${e} pagination-start" aria-label="Go to first slide"></span>`:s===t-1?`<span class="${e} pagination-end" aria-label="Go to last slide"></span>`:`<span class="${e} pagination-middle" aria-label="Go to slide ${s+1}"></span>`}}})}function vt(){console.log("Модальне вікно для фідбеку має відкритися тут!")}function kt(){vt()}I&&I.addEventListener("click",kt);async function St(){if(!v){console.error("Swiper wrapper element not found.");return}try{const t=await fetch(bt);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let s=await t.json();if(!Array.isArray(s)||s.length===0){v.innerHTML='<p class="no-feedback-message">Наразі відгуків немає.</p>';return}const e=s.slice(0,10),r=e.map(yt).join("");v.innerHTML=r,Lt(e.length)}catch(t){console.error("Помилка при отриманні відгуків:",t),v.innerHTML='<p class="error-message">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>'}}St();const At=document.querySelector(".submit-modal"),Mt=document.querySelector(".submit-button_modal");function Et(){At.classList.remove("is-open")}Mt.addEventListener("click",Et);
//# sourceMappingURL=index.js.map
