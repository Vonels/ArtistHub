import{a as q,i as I,S as se}from"./assets/vendor-CYE3kvfv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const p={headerBtnOpenMenu:document.querySelector(".header-button-menu"),headerBtnCloseMenu:document.querySelector(".button-close"),mobileMenu:document.querySelector(".menu-drive")},F=()=>{p.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};p.headerBtnOpenMenu&&p.mobileMenu&&p.headerBtnOpenMenu.addEventListener("click",F);p.headerBtnCloseMenu&&p.mobileMenu&&p.headerBtnCloseMenu.addEventListener("click",F);function re(e){const s=Math.floor(e/1e3),t=Math.floor(s/60),r=s%60;return`${t}:${r.toString().padStart(2,"0")}`}function oe(e,s){return!e&&!s?"Information missing":s?`${e} - ${s}`:`${e}-present`}function ne(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function ie(){const e=document.querySelector(".loader");e&&(e.style.display="none")}function ae(e,s=250){e||(e="Information missing");const t=e.length>s,r=e.slice(0,s);return`
    <span id="bio-text">${t?r:e}</span>
    ${t?`<button id="bio-toggle" class="bio-toggle-btn">
            <svg class="modal-icon" width="20" height="20">
              <use href="../img/sprite.svg#icon-dots-horizontal"></use>
            </svg>
          </button>`:""}
  `}function ce(e){const s=document.querySelector("#bio-toggle"),t=document.querySelector("#bio-text");if(!s)return;let r=!1;s.addEventListener("click",()=>{r=!r,r?(t.textContent=e,s.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-modal-up"></use>
        </svg>
      `):(t.textContent=e.slice(0,250),s.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-dots-horizontal"></use>
        </svg>
      `)})}function le(){const e=document.querySelector(".modal-overlay"),s=document.querySelector(".modal"),t=document.querySelector(".btn-exit");if(!e||!s||!t){console.error("Modal elements not found in DOM");return}function r(){e.classList.remove("is-open")}t.addEventListener("click",r),e.addEventListener("click",i=>{i.target===e&&r()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&r()})}const de=q.create({baseURL:"https://sound-wave.b.goit.study/api"});async function ue(e){try{ne(),document.querySelector(".modal-overlay").classList.add("is-open");const{data:t}=await de.get(`/artists/${e}/albums`);pe(t)}catch(s){console.error("Error loading artist:",s)}finally{ie()}}function pe(e){const{strArtistThumb:s,strArtist:t,intFormedYear:r,intDiedYear:i,genres:a,strGender:l,intMembers:n,strCountry:o,strBiographyEN:c,albumsList:u}=e,y=document.querySelector(".modal");y.innerHTML="";const V=(a==null?void 0:a.map(d=>`<span>${d}</span>`).join(" "))||"",ee=(u||[]).slice(0,8).map(({strAlbum:d,tracks:f})=>{const v=(f==null?void 0:f.map(({strTrack:T,intDuration:te,movie:D})=>`
          <li class="track">
            <span class="title">${T}</span>
            <span class="time">${re(te)}</span>
            ${D?`<a href="${D}" class="yt-btn" target="_blank">
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
          <ul class="track-list">${v}</ul>
        </div>
      `}).reduce((d,f,v,T)=>(v%2===0?d.push(`<div class="albums-thumb">${f}`):d[d.length-1]+=f+"</div>",v===T.length-1&&v%2===0&&(d[d.length-1]+="</div>"),d),[]).join("");y.innerHTML=`
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
          <li><h2>Years active</h2><p>${oe(r,i)}</p></li>
          <li><h2>Sex</h2><p>${l||"Information missing"}</p></li>
        </div>

        <div class="actor-info-container">
          <li><h2>Members</h2><p>${n||"Information missing"}</p></li>
          <li><h2>Country</h2><p>${o||"Information missing"}</p></li>
        </div>

        <li><h2>Biography</h2>${ae(c)}</li>
        <li class="actor-cards">${V}</li>
      </ul>
    </div>

    <div class="albums">
      <h2>Albums</h2>
      <div class="albums-cards">${ee}</div>
    </div>
  `,ce(c),le()}const Y=document.querySelector(".artists-list"),z=document.querySelector(".artists-loader"),U=document.querySelector(".artists-load-more-btn");function J(){z.classList.remove("is-hidden")}function K(){z.classList.add("is-hidden")}function fe(){U.classList.remove("is-hidden")}function A(){U.classList.add("is-hidden")}function P(){Y.innerHTML=""}function ge(e){return!Array.isArray(e)||e.length===0?"":`<div class="artist-genres">${e.map(t=>`<span class="genre-tag">${t}</span>`).join(" ")}</div>`}function W(e){const s=e.map(t=>{const r=t.strBiographyEN||"";return`
                <li class="artist-card">
                    <img 
                        class="img-card"
                        src="${t.strArtistThumb||""}" 
                        alt="${t.strArtist||"Artist Photo"}" 
                        loading="lazy"
                    >

                    ${ge(t.genres)}

                    <h3 class="artist-name">${t.strArtist}</h3>

                    ${r?`<p class="artist-short-info">${r}</p>`:""}
                    
                    <button
                        type="button"
                        class="learn-more-btn"
                        data-artist-id="${t._id}"
                    >
                        Learn More
                        <svg class="model-open-btm-icon" width="8" height="14">
                            <use href="../img/sprite.svg#icon-con"></use>
                        </svg>

                    </button>
                </li>
            `}).join("");Y.insertAdjacentHTML("beforeend",s),document.addEventListener("click",t=>{if(t.target.classList.contains("learn-more-btn")){const r=t.target.dataset.artistId;ue(r)}})}const me="https://sound-wave.b.goit.study",Q=8;async function he(e=1){const s={limit:Q,page:e};try{return(await q.get(`${me}/api/artists`,{params:s})).data}catch(t){throw t}}const be=document.querySelector(".artists-load-more-btn");let O=1,H=0;async function ye(){J(),A();try{const e=await he(O),s=e.artists,t=e.totalArtists;if(H=Math.ceil(t/Q),W(s),s.length===0){I.error({title:"Поиск не дал результатов",message:"К сожалению, по вашему запросу артистов не найдено.",position:"topRight"});return}O<H?fe():A()}catch(e){I.error({title:"Ошибка",message:`Ошибка запроса: ${e.message}`,position:"topRight"}),A()}finally{K()}}be.addEventListener("click",async()=>{O+=1,await ye()});const X="https://sound-wave.b.goit.study",C=8;let g=1,ve=0,E="",w="",h="";function k(){return{filtersToggleBtn:document.querySelector(".filters-toggle-btn"),filtersPanel:document.querySelector(".filters-panel"),genreListMobile:document.querySelector(".genre-list"),sortListMobile:document.querySelector(".sort-list"),searchInput:document.getElementById("artist-search"),searchInputDesktop:document.getElementById("artist-search-desktop"),resetBtn:document.querySelectorAll(".reset-btn"),emptyState:document.querySelector(".empty-state"),resetFiltersBtn:document.querySelector(".reset-filters-btn"),sortOptionsDesktop:document.querySelector(".sort-options-desktop"),genreOptionsDesktop:document.querySelector(".genre-options-desktop"),filterAccordionHeaders:document.querySelectorAll(".filter-accordion-header"),filterGroupHeaders:document.querySelectorAll(".filter-group-header")}}async function Le(){try{const s=(await q.get(`${X}/api/genres`)).data;return Array.isArray(s)?s.map(t=>typeof t=="string"?t:typeof t=="object"&&t!==null&&(t.name||t.genre||t.title)||String(t)):typeof s=="object"&&s!==null?Object.values(s).map(t=>typeof t=="string"?t:typeof t=="object"&&t!==null&&(t.name||t.genre||t.title)||String(t)):[]}catch(e){return console.error("Error fetching genres:",e),[]}}async function Se(){const e=k(),s=await Le();e.genreOptionsDesktop&&(e.genreOptionsDesktop.innerHTML='<li class="filter-option-item active" data-genre="">All Genres</li>',s.forEach(t=>{const r=document.createElement("li");r.className="filter-option-item",r.textContent=t,r.setAttribute("data-genre",t),e.genreOptionsDesktop.appendChild(r)})),e.genreListMobile&&(e.genreListMobile.innerHTML='<li class="dropdown-item" data-genre="">All Genres</li>',s.forEach(t=>{const r=document.createElement("li");r.className="dropdown-item",r.textContent=t,r.setAttribute("data-genre",t),e.genreListMobile.appendChild(r)}))}function ke(){const e=k();if(e.sortListMobile){const s=e.sortListMobile.querySelector('.sort-item[data-sort=""]');s&&s.classList.add("active")}if(e.sortOptionsDesktop){const s=e.sortOptionsDesktop.querySelector('.filter-option-item[data-sort=""]');s&&s.classList.add("active")}}async function m(e=1){const s=k();s.emptyState&&s.emptyState.classList.add("is-hidden"),J(),A();const t={limit:C,page:e};E&&(t.genre=E);try{const i=(await q.get(`${X}/api/artists`,{params:t})).data;let a=i.artists||[];const l=i.totalArtists||0;if(h){const o=h.toLowerCase();a=a.filter(c=>(c.strArtist||"").toLowerCase().includes(o))}w&&a.length>0&&a.sort((o,c)=>{const u=(o.strArtist||"").toLowerCase(),y=(c.strArtist||"").toLowerCase();return w==="name_asc"?u.localeCompare(y):y.localeCompare(u)});const n=h?a.length:l;return ve=Math.ceil(n/C),g=e,P(),a.length===0&&e===1?s.emptyState&&s.emptyState.classList.remove("is-hidden"):W(a),{artists:a,totalArtists:n}}catch(r){return console.error("Error fetching artists:",r),P(),s.emptyState&&s.emptyState.classList.remove("is-hidden"),{artists:[],totalArtists:0}}finally{K()}}function j(){const e=k();if(E="",w="",h="",g=1,e.searchInput&&(e.searchInput.value=""),e.searchInputDesktop&&(e.searchInputDesktop.value=""),[e.sortListMobile,e.sortOptionsDesktop].forEach(s=>{if(!s)return;s.querySelectorAll(".sort-item, .filter-option-item").forEach(r=>{r.classList.remove("active")});const t=s.querySelector('[data-sort=""]');t&&t.classList.add("active")}),e.genreOptionsDesktop){e.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(t=>{t.classList.remove("active")});const s=e.genreOptionsDesktop.querySelector('[data-genre=""]');s&&s.classList.add("active")}m(1)}function Me(){var i,a,l;const e=k();function s(n){E=n,e.genreOptionsDesktop&&e.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-genre")===n)}),e.genreListMobile&&e.genreListMobile.querySelectorAll(".dropdown-item").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-genre")===n)}),g=1,m(1)}function t(n){w=n,e.sortOptionsDesktop&&e.sortOptionsDesktop.querySelectorAll(".filter-option-item").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-sort")===n)}),e.sortListMobile&&e.sortListMobile.querySelectorAll(".sort-item").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-sort")===n)}),g=1,m(1)}function r(n,o){if(!n)return;let c;n.addEventListener("input",()=>{clearTimeout(c),c=setTimeout(()=>{h=n.value.trim(),o&&(o.value=n.value),g=1,m(1)},500)}),n.addEventListener("keypress",u=>{u.key==="Enter"&&(clearTimeout(c),h=n.value.trim(),o&&(o.value=n.value),g=1,m(1))})}e.genreOptionsDesktop&&e.genreOptionsDesktop.addEventListener("click",n=>{const o=n.target.closest(".filter-option-item");o&&s(o.getAttribute("data-genre")||"")}),e.genreListMobile&&e.genreListMobile.addEventListener("click",n=>{const o=n.target.closest(".dropdown-item");o&&s(o.getAttribute("data-genre")||"")}),e.sortOptionsDesktop&&e.sortOptionsDesktop.addEventListener("click",n=>{const o=n.target.closest(".filter-option-item");o&&t(o.getAttribute("data-sort")||"")}),e.sortListMobile&&e.sortListMobile.addEventListener("click",n=>{const o=n.target.closest(".sort-item");o&&t(o.getAttribute("data-sort")||"")}),r(e.searchInput,e.searchInputDesktop),r(e.searchInputDesktop,e.searchInput),((i=e.resetBtn)==null?void 0:i.length)>0&&e.resetBtn.forEach(n=>n.addEventListener("click",j)),e.resetFiltersBtn&&e.resetFiltersBtn.addEventListener("click",j),e.filtersToggleBtn&&e.filtersPanel&&e.filtersToggleBtn.addEventListener("click",()=>{const n=e.filtersPanel.classList.contains("is-hidden");e.filtersPanel.classList.toggle("is-hidden",!n),e.filtersToggleBtn.classList.toggle("is-open",n)}),(a=e.filterGroupHeaders)==null||a.forEach(n=>{n.addEventListener("click",()=>{var c;const o=(c=n.closest(".filter-group"))==null?void 0:c.querySelector(".filter-group-content");o&&o.classList.toggle("is-hidden")})}),(l=e.filterAccordionHeaders)==null||l.forEach(n=>{n.addEventListener("click",()=>{var c;const o=(c=n.closest(".filter-accordion"))==null?void 0:c.querySelector(".filter-accordion-content");o&&o.classList.toggle("is-hidden")})})}async function Ae(){try{document.readyState==="loading"&&await new Promise(e=>document.addEventListener("DOMContentLoaded",e)),await new Promise(e=>setTimeout(e,300)),Me(),await Se(),ke(),await m(1)}catch(e){console.error("Error initializing filters:",e)}}Ae();const M=window.$,$=document.querySelector(".submit-modal"),b=document.querySelector(".submit-feedback"),Ee=document.querySelector(".submit-button_modal"),L=document.querySelector(".submit-form"),G="project-feedbacks";function we(){b&&b.classList.add("is-open"),$&&($.classList.add("is-open"),document.body.style.overflow="hidden")}function B(){b&&b.classList.remove("is-open"),$&&($.classList.remove("is-open"),document.body.style.overflow="")}Ee.addEventListener("click",B);b.addEventListener("click",e=>{e.target===b&&B()});M(document).ready(()=>{M("#user-rating-input").raty({starType:"img",number:5,path:"https://cdnjs.cloudflare.com/ajax/libs/raty/2.7.1/images",score:0,click:e=>{M("#rating-score").val(e)}}),L.addEventListener("submit",e=>{e.preventDefault();const s=L.username.value.trim(),t=L.message.value.trim(),r=Number(L["rating-score"].value);if(!s||!t||r===0){alert("Please, fill the fields and choose a rating");return}const i={id:Date.now().toString(),name:s,message:t,rating:r},a=JSON.parse(localStorage.getItem(G))||[];a.push(i),localStorage.setItem(G,JSON.stringify(a)),L.reset(),M("#user-rating-input").raty("score",0),document.querySelector("#rating-score").value=0,B()})});const $e="https://sound-wave.b.goit.study",qe=`${$e}/api/feedbacks`,R="project-feedbacks",S=document.querySelector(".swiper-wrapper"),x=document.querySelector(".feedback-submit-btn");function _({name:e,feedback:s,rating:t}){const r=Math.round(t);return`<div class="swiper-slide feedback-card">
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
    `}function N(e){new se(".feedback-slider",{slidesPerView:1,loop:!0,spaceBetween:30,navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"},pagination:{el:".feedback-pagination",clickable:!0,renderBullet:function(s,t){return s===0?`<span class="${t} pagination-start" aria-label="Go to first slide"></span>`:s===e-1?`<span class="${t} pagination-end" aria-label="Go to last slide"></span>`:`<span class="${t} pagination-middle" aria-label="Go to slide ${s+1}"></span>`}}})}async function Z(){if(!S){console.error("Swiper wrapper element not found.");return}try{const e=await fetch(qe);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);let s=await e.json();const r=[...JSON.parse(localStorage.getItem(R))||[],...s];if(r.length===0){S.innerHTML='<p class="no-feedback-message">Наразі відгуків немає.</p>';return}const i=r.slice(0,10),a=i.map(_).join("");S.innerHTML=a,N(i.length)}catch(e){console.error("Помилка при оновленні відгуків:",e);const s=JSON.parse(localStorage.getItem(R))||[];if(s.length>0){const t=s.slice(0,10),r=t.map(_).join("");S.innerHTML=r,N(t.length)}else S.innerHTML='<p class="error-message">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>'}}window.updateFeedbacks=Z;x&&x.addEventListener("click",we);Z();
//# sourceMappingURL=index.js.map
