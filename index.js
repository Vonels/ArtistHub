import{a as S,i as P,S as oe}from"./assets/vendor-CYE3kvfv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const u={headerBtnOpenMenu:document.querySelector(".header-button-menu"),headerBtnCloseMenu:document.querySelector(".button-close"),mobileMenu:document.querySelector(".menu-drive"),mobileLinks:document.querySelectorAll(".header-mobile-nav-link")},B=()=>{u.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};u.headerBtnOpenMenu&&u.mobileMenu&&u.headerBtnOpenMenu.addEventListener("click",B);u.headerBtnCloseMenu&&u.mobileMenu&&(u.headerBtnCloseMenu.addEventListener("click",B),u.mobileLinks.length>0&&u.mobileLinks.forEach(e=>{e.addEventListener("click",()=>{B()})}));async function re(){try{return(await S.get("https://sound-wave.b.goit.study/api/artists")).data.artists}catch(e){console.error("Помилка отримання артистів:",e)}}function ne(e){let s=e.length,t;for(;s!==0;)t=Math.floor(Math.random()*s),s--,[e[s],e[t]]=[e[t],e[s]];return e}re().then(e=>{const s=document.getElementById("colLeft"),t=document.getElementById("colRight");if(!e||e.length===0)return;const i=ne([...e]).slice(0,6);i.slice(0,3).forEach(a=>{const c=document.createElement("img");c.src=a.strArtistThumb,c.className="hero-img",s.appendChild(c)}),i.slice(3,6).forEach(a=>{const c=document.createElement("img");c.src=a.strArtistThumb,c.className="hero-img",t.appendChild(c)})});function ie(e){const s=Math.floor(e/1e3),t=Math.floor(s/60),o=s%60;return`${t}:${o.toString().padStart(2,"0")}`}function ae(e,s){return!e&&!s?"Information missing":s?`${e} - ${s}`:`${e}-present`}function ce(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function le(){const e=document.querySelector(".loader");e&&(e.style.display="none")}function de(e,s=250){e||(e="Information missing");const t=e.length>s,o=e.slice(0,s);return`
    <span id="bio-text">${t?o:e}</span>
    ${t?`<button id="bio-toggle" class="bio-toggle-btn">
            <svg class="modal-icon" width="20" height="20">
              <use href="../img/sprite.svg#icon-dots-horizontal"></use>
            </svg>
          </button>`:""}
  `}function ue(e){const s=document.querySelector("#bio-toggle"),t=document.querySelector("#bio-text");if(!s)return;let o=!1;s.addEventListener("click",()=>{o=!o,o?(t.textContent=e,s.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-modal-up"></use>
        </svg>
      `):(t.textContent=e.slice(0,250),s.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-dots-horizontal"></use>
        </svg>
      `)})}function fe(){const e=document.querySelector(".modal-overlay"),s=document.querySelector(".modal"),t=document.querySelector(".btn-exit");if(!e||!s||!t){console.error("Modal elements not found in DOM");return}function o(){e.classList.remove("is-open")}t.addEventListener("click",o),e.addEventListener("click",i=>{i.target===e&&o()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&o()})}const pe=S.create({baseURL:"https://sound-wave.b.goit.study/api"});async function me(e){try{ce(),document.querySelector(".modal-overlay").classList.add("is-open");const{data:t}=await pe.get(`/artists/${e}/albums`);ge(t)}catch(s){console.error("Error loading artist:",s)}finally{le()}}function ge(e){const{strArtistThumb:s,strArtist:t,intFormedYear:o,intDiedYear:i,genres:a,strGender:c,intMembers:n,strCountry:r,strBiographyEN:l,albumsList:f}=e,y=document.querySelector(".modal");y.innerHTML="";const ee=(a==null?void 0:a.map(d=>`<span>${d}</span>`).join(" "))||"",te=(f||[]).slice(0,8).map(({strAlbum:d,tracks:p})=>{const L=(p==null?void 0:p.map(({strTrack:q,intDuration:se,movie:I})=>`
          <li class="track">
            <span class="title">${q}</span>
            <span class="time">${ie(se)}</span>
            ${I?`<a href="${I}" class="yt-btn" target="_blank">
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
          <ul class="track-list">${L}</ul>
        </div>
      `}).reduce((d,p,L,q)=>(L%2===0?d.push(`<div class="albums-thumb">${p}`):d[d.length-1]+=p+"</div>",L===q.length-1&&L%2===0&&(d[d.length-1]+="</div>"),d),[]).join("");y.innerHTML=`
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
          <li><h2>Years active</h2><p>${ae(o,i)}</p></li>
          <li><h2>Sex</h2><p>${c||"Information missing"}</p></li>
        </div>

        <div class="actor-info-container">
          <li><h2>Members</h2><p>${n||"Information missing"}</p></li>
          <li><h2>Country</h2><p>${r||"Information missing"}</p></li>
        </div>

        <li><h2>Biography</h2>${de(l)}</li>
        <li class="actor-cards">${ee}</li>
      </ul>
    </div>

    <div class="albums">
      <h2>Albums</h2>
      <div class="albums-cards">${te}</div>
    </div>
  `,ue(l),fe()}const Y=document.querySelector(".artists-list"),z=document.querySelector(".artists-loader"),U=document.querySelector(".artists-load-more-btn");function J(){z.classList.remove("is-hidden")}function K(){z.classList.add("is-hidden")}function he(){U.classList.remove("is-hidden")}function T(){U.classList.add("is-hidden")}function H(){Y.innerHTML=""}function be(e){return!Array.isArray(e)||e.length===0?"":`<div class="artist-genres">${e.map(t=>`<span class="genre-tag">${t}</span>`).join(" ")}</div>`}function W(e){const s=e.map(t=>{const o=t.strBiographyEN||"";return`
                <li class="artist-card">
                    <img 
                        class="img-card"
                        src="${t.strArtistThumb||""}" 
                        alt="${t.strArtist||"Artist Photo"}" 
                        loading="lazy"
                    >

                    ${be(t.genres)}

                    <h3 class="artist-name">${t.strArtist}</h3>

                    ${o?`<p class="artist-short-info">${o}</p>`:""}
                    
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
            `}).join("");Y.insertAdjacentHTML("beforeend",s),document.addEventListener("click",t=>{if(t.target.classList.contains("learn-more-btn")){const o=t.target.dataset.artistId;me(o)}})}const ye="https://sound-wave.b.goit.study",Q=8;async function Le(e=1){const s={limit:Q,page:e};try{return(await S.get(`${ye}/api/artists`,{params:s})).data}catch(t){throw t}}const ve=document.querySelector(".artists-load-more-btn");let O=1,C=0;async function X(){J(),T();try{const e=await Le(O),s=e.artists,t=e.totalArtists;if(C=Math.ceil(t/Q),W(s),s.length===0){P.error({title:"Поиск не дал результатов",message:"К сожалению, по вашему запросу артистов не найдено.",position:"topRight"});return}O<C?he():T()}catch(e){P.error({title:"Ошибка",message:`Ошибка запроса: ${e.message}`,position:"topRight"}),T()}finally{K()}}ve.addEventListener("click",async()=>{O+=1,await X()});X();const Z="https://sound-wave.b.goit.study",j=8;let m=1,ke=0,M="",w="",h="";function E(){return{filtersToggleBtn:document.querySelector(".filters-toggle-btn"),filtersPanel:document.querySelector(".filters-panel"),genreListMobile:document.querySelector(".genre-list"),sortListMobile:document.querySelector(".sort-list"),searchInput:document.getElementById("artist-search"),searchInputDesktop:document.getElementById("artist-search-desktop"),resetBtn:document.querySelectorAll(".reset-btn"),emptyState:document.querySelector(".empty-state"),resetFiltersBtn:document.querySelector(".reset-filters-btn"),sortOptionsDesktop:document.querySelector(".sort-options-desktop"),genreOptionsDesktop:document.querySelector(".genre-options-desktop"),filterAccordionHeaders:document.querySelectorAll(".filter-accordion-header"),filterGroupHeaders:document.querySelectorAll(".filter-group-header")}}async function Se(){try{const s=(await S.get(`${Z}/api/genres`)).data;return Array.isArray(s)?s.map(t=>typeof t=="string"?t:typeof t=="object"&&t!==null&&(t.name||t.genre||t.title)||String(t)):typeof s=="object"&&s!==null?Object.values(s).map(t=>typeof t=="string"?t:typeof t=="object"&&t!==null&&(t.name||t.genre||t.title)||String(t)):[]}catch(e){return console.error("Error fetching genres:",e),[]}}async function Ee(){const e=E(),s=await Se();e.genreOptionsDesktop&&(e.genreOptionsDesktop.innerHTML='<li class="filter-option-item active" data-genre="">All Genres</li>',s.forEach(t=>{const o=document.createElement("li");o.className="filter-option-item",o.textContent=t,o.setAttribute("data-genre",t),e.genreOptionsDesktop.appendChild(o)})),e.genreListMobile&&(e.genreListMobile.innerHTML='<li class="dropdown-item" data-genre="">All Genres</li>',s.forEach(t=>{const o=document.createElement("li");o.className="dropdown-item",o.textContent=t,o.setAttribute("data-genre",t),e.genreListMobile.appendChild(o)}))}function Ae(){const e=E();if(e.sortListMobile){const s=e.sortListMobile.querySelector('.sort-item[data-sort=""]');s&&s.classList.add("active")}if(e.sortOptionsDesktop){const s=e.sortOptionsDesktop.querySelector('.filter-option-item[data-sort=""]');s&&s.classList.add("active")}}async function g(e=1){const s=E();s.emptyState&&s.emptyState.classList.add("is-hidden"),J();const t={limit:j,page:e};M&&(t.genre=M);try{const i=(await S.get(`${Z}/api/artists`,{params:t})).data;let a=i.artists||[];const c=i.totalArtists||0;if(h){const r=h.toLowerCase();a=a.filter(l=>(l.strArtist||"").toLowerCase().includes(r))}w&&a.length>0&&a.sort((r,l)=>{const f=(r.strArtist||"").toLowerCase(),y=(l.strArtist||"").toLowerCase();return w==="name_asc"?f.localeCompare(y):y.localeCompare(f)});const n=h?a.length:c;return ke=Math.ceil(n/j),m=e,H(),a.length===0&&e===1?s.emptyState&&s.emptyState.classList.remove("is-hidden"):W(a),{artists:a,totalArtists:n}}catch(o){return console.error("Error fetching artists:",o),H(),s.emptyState&&s.emptyState.classList.remove("is-hidden"),{artists:[],totalArtists:0}}finally{K()}}function G(){const e=E();if(M="",w="",h="",m=1,e.searchInput&&(e.searchInput.value=""),e.searchInputDesktop&&(e.searchInputDesktop.value=""),[e.sortListMobile,e.sortOptionsDesktop].forEach(s=>{if(!s)return;s.querySelectorAll(".sort-item, .filter-option-item").forEach(o=>{o.classList.remove("active")});const t=s.querySelector('[data-sort=""]');t&&t.classList.add("active")}),e.genreOptionsDesktop){e.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(t=>{t.classList.remove("active")});const s=e.genreOptionsDesktop.querySelector('[data-genre=""]');s&&s.classList.add("active")}g(1)}function Me(){var i,a,c;const e=E();function s(n){M=n,e.genreOptionsDesktop&&e.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(r=>{r.classList.toggle("active",r.getAttribute("data-genre")===n)}),e.genreListMobile&&e.genreListMobile.querySelectorAll(".dropdown-item").forEach(r=>{r.classList.toggle("active",r.getAttribute("data-genre")===n)}),m=1,g(1)}function t(n){w=n,e.sortOptionsDesktop&&e.sortOptionsDesktop.querySelectorAll(".filter-option-item").forEach(r=>{r.classList.toggle("active",r.getAttribute("data-sort")===n)}),e.sortListMobile&&e.sortListMobile.querySelectorAll(".sort-item").forEach(r=>{r.classList.toggle("active",r.getAttribute("data-sort")===n)}),m=1,g(1)}function o(n,r){if(!n)return;let l;n.addEventListener("input",()=>{clearTimeout(l),l=setTimeout(()=>{h=n.value.trim(),r&&(r.value=n.value),m=1,g(1)},500)}),n.addEventListener("keypress",f=>{f.key==="Enter"&&(clearTimeout(l),h=n.value.trim(),r&&(r.value=n.value),m=1,g(1))})}e.genreOptionsDesktop&&e.genreOptionsDesktop.addEventListener("click",n=>{const r=n.target.closest(".filter-option-item");r&&s(r.getAttribute("data-genre")||"")}),e.genreListMobile&&e.genreListMobile.addEventListener("click",n=>{const r=n.target.closest(".dropdown-item");r&&s(r.getAttribute("data-genre")||"")}),e.sortOptionsDesktop&&e.sortOptionsDesktop.addEventListener("click",n=>{const r=n.target.closest(".filter-option-item");r&&t(r.getAttribute("data-sort")||"")}),e.sortListMobile&&e.sortListMobile.addEventListener("click",n=>{const r=n.target.closest(".sort-item");r&&t(r.getAttribute("data-sort")||"")}),o(e.searchInput,e.searchInputDesktop),o(e.searchInputDesktop,e.searchInput),((i=e.resetBtn)==null?void 0:i.length)>0&&e.resetBtn.forEach(n=>n.addEventListener("click",G)),e.resetFiltersBtn&&e.resetFiltersBtn.addEventListener("click",G),e.filtersToggleBtn&&e.filtersPanel&&e.filtersToggleBtn.addEventListener("click",()=>{const n=e.filtersPanel.classList.contains("is-hidden");e.filtersPanel.classList.toggle("is-hidden",!n),e.filtersToggleBtn.classList.toggle("is-open",n)}),(a=e.filterGroupHeaders)==null||a.forEach(n=>{n.addEventListener("click",()=>{var l;const r=(l=n.closest(".filter-group"))==null?void 0:l.querySelector(".filter-group-content");r&&r.classList.toggle("is-hidden")})}),(c=e.filterAccordionHeaders)==null||c.forEach(n=>{n.addEventListener("click",()=>{var l;const r=(l=n.closest(".filter-accordion"))==null?void 0:l.querySelector(".filter-accordion-content");r&&r.classList.toggle("is-hidden")})})}async function we(){try{document.readyState==="loading"&&await new Promise(e=>document.addEventListener("DOMContentLoaded",e)),await new Promise(e=>setTimeout(e,300)),Me(),await Ee(),Ae(),await g(1)}catch(e){console.error("Error initializing filters:",e)}}we();const A=window.$,$=document.querySelector(".submit-modal"),b=document.querySelector(".submit-feedback"),$e=document.querySelector(".submit-button_modal"),v=document.querySelector(".submit-form"),R="project-feedbacks";function qe(){b&&b.classList.add("is-open"),$&&($.classList.add("is-open"),document.body.style.overflow="hidden")}function D(){b&&b.classList.remove("is-open"),$&&($.classList.remove("is-open"),document.body.style.overflow="")}$e.addEventListener("click",D);b.addEventListener("click",e=>{e.target===b&&D()});A(document).ready(()=>{A("#user-rating-input").raty({starType:"img",number:5,path:"https://cdnjs.cloudflare.com/ajax/libs/raty/2.7.1/images",score:0,click:e=>{A("#rating-score").val(e)}}),v.addEventListener("submit",e=>{e.preventDefault();const s=v.username.value.trim(),t=v.message.value.trim(),o=Number(v["rating-score"].value);if(!s||!t||o===0){alert("Please, fill the fields and choose a rating");return}const i={id:Date.now().toString(),name:s,message:t,rating:o},a=JSON.parse(localStorage.getItem(R))||[];a.push(i),localStorage.setItem(R,JSON.stringify(a)),v.reset(),A("#user-rating-input").raty("score",0),document.querySelector("#rating-score").value=0,D()})});const Te="https://sound-wave.b.goit.study",Be=`${Te}/api/feedbacks`,x="project-feedbacks",k=document.querySelector(".swiper-wrapper"),N=document.querySelector(".feedback-submit-btn");function _({name:e,feedback:s,rating:t}){const o=Math.round(t);return`<div class="swiper-slide feedback-card">
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
    `}function F(e){new oe(".feedback-slider",{slidesPerView:1,loop:!0,spaceBetween:30,navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"},pagination:{el:".feedback-pagination",clickable:!0,renderBullet:function(s,t){return s===0?`<span class="${t} pagination-start" aria-label="Go to first slide"></span>`:s===e-1?`<span class="${t} pagination-end" aria-label="Go to last slide"></span>`:`<span class="${t} pagination-middle" aria-label="Go to slide ${s+1}"></span>`}}})}async function V(){if(!k){console.error("Swiper wrapper element not found.");return}try{const e=await fetch(Be);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);let s=await e.json();const o=[...JSON.parse(localStorage.getItem(x))||[],...s];if(o.length===0){k.innerHTML='<p class="no-feedback-message">Наразі відгуків немає.</p>';return}const i=o.slice(0,10),a=i.map(_).join("");k.innerHTML=a,F(i.length)}catch(e){console.error("Помилка при оновленні відгуків:",e);const s=JSON.parse(localStorage.getItem(x))||[];if(s.length>0){const t=s.slice(0,10),o=t.map(_).join("");k.innerHTML=o,F(t.length)}else k.innerHTML='<p class="error-message">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>'}}window.updateFeedbacks=V;N&&N.addEventListener("click",qe);V();
//# sourceMappingURL=index.js.map
