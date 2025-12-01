import{a as L,i as D,S as se}from"./assets/vendor-CYE3kvfv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const u={headerBtnOpenMenu:document.querySelector(".header-button-menu"),headerBtnCloseMenu:document.querySelector(".button-close"),mobileMenu:document.querySelector(".menu-drive"),mobileLinks:document.querySelectorAll(".header-mobile-nav-link")},$=()=>{u.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};u.headerBtnOpenMenu&&u.mobileMenu&&u.headerBtnOpenMenu.addEventListener("click",$);u.headerBtnCloseMenu&&u.mobileMenu&&(u.headerBtnCloseMenu.addEventListener("click",$),u.mobileLinks.length>0&&u.mobileLinks.forEach(e=>{e.addEventListener("click",()=>{$()})}));async function oe(){try{return(await L.get("https://sound-wave.b.goit.study/api/artists")).data.artists}catch(e){console.error("Помилка отримання артистів:",e)}}function ne(e){let t=e.length,s;for(;t!==0;)s=Math.floor(Math.random()*t),t--,[e[t],e[s]]=[e[s],e[t]];return e}oe().then(e=>{const t=document.getElementById("colLeft"),s=document.getElementById("colRight");if(!e||e.length===0)return;const n=ne([...e]).slice(0,6);n.slice(0,3).forEach(a=>{const c=document.createElement("img");c.src=a.strArtistThumb,c.className="hero-img",t.appendChild(c)}),n.slice(3,6).forEach(a=>{const c=document.createElement("img");c.src=a.strArtistThumb,c.className="hero-img",s.appendChild(c)})});function re(e){const t=Math.floor(e/1e3),s=Math.floor(t/60),o=t%60;return`${s}:${o.toString().padStart(2,"0")}`}function ie(e,t){return!e&&!t?"Information missing":t?`${e} - ${t}`:`${e}-present`}function ae(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function ce(){const e=document.querySelector(".loader");e&&(e.style.display="none")}function le(e,t=500){e||(e="Information missing");const s=e.length>t,o=e.slice(0,t);return`
    <span id="bio-text">${s?o:e}</span>
    ${s?`<button id="bio-toggle" class="bio-toggle-btn">
              <svg class="modal-icon" width="20" height="20">
                <use href="/img/sprite.svg#icon-dots-horizontal"></use>
              </svg>
           </button>`:""}
  `}function de(e){const t=document.querySelector("#bio-toggle"),s=document.querySelector("#bio-text");if(!t)return;let o=!1;t.addEventListener("click",()=>{o=!o,o?(s.textContent=e,t.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-modal-up"></use>
        </svg>`):(s.textContent=e.slice(0,250),t.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="../img/sprite.svg#icon-dots-horizontal"></use>
        </svg>`)})}const ue=L.create({baseURL:"https://sound-wave.b.goit.study/api"});async function me(e){try{ae();const t=document.querySelector(".modal-overlay"),s=document.querySelector(".modal");document.body.classList.add("modal-open"),s.innerHTML="",t.classList.add("is-open");const{data:o}=await ue.get(`/artists/${e}/albums`);pe(o)}catch(t){console.error("Error loading artist:",t)}finally{ce()}}let p=1;const q=8;let B=[];function pe(e){const{strArtistThumb:t,strArtist:s,intFormedYear:o,intDiedYear:n,genres:a,strGender:c,intMembers:r,strCountry:i,strBiographyEN:l,albumsList:d}=e;B=d||[],p=1;const m=document.querySelector(".modal"),W=(a==null?void 0:a.map(te=>`<span>${te}</span>`).join(" "))||"";m.innerHTML=`
    <button class="btn-exit" type="button">
      <svg class="modal-icon-exit" width="20" height="20">
        <use href="/img/sprite.svg#icon-close"></use>
      </svg>
    </button>

    <h1 class="actor-name">${s}</h1>

    <div class="actor">
      <div class="actor-img-wrapper" style="position:relative;">
        <img class="actor-img" src="${t}" alt="${s}" />
      </div>

      <ul class="actor-info">
        <div class="actor-info-container">
          <li><h2>Years active</h2><p>${ie(o,n)}</p></li>
          <li><h2>Sex</h2><p>${c||"Information missing"}</p></li>
        </div>

        <div class="actor-info-container">
          <li><h2>Members</h2><p>${r||"Information missing"}</p></li>
          <li><h2>Country</h2><p>${i||"Information missing"}</p></li>
        </div>

        <li><h2>Biography</h2>${le(l)}</li>
        <li class="actor-cards">${W}</li>
      </ul>
    </div>

    <div class="albums">
      <h2>Albums</h2>
      <div class="albums-cards" id="albums-container"></div>
      <div class="pagination" id="pagination"></div>
    </div>
  `,de(l),be();const ee=m.querySelector(".actor-img-wrapper");he(ee,d),j(!0)}function j(e){const t=(p-1)*q,s=t+q,o=B.slice(t,s),n=document.querySelector("#albums-container");n.innerHTML=fe(o),ge(),e||document.querySelector(".albums").scrollIntoView({behavior:"smooth"})}function fe(e){return e.map(t=>{var o;const s=((o=t.tracks)==null?void 0:o.map(n=>`
        <li class="track">
          <span class="title">${n.strTrack}</span>
          <span class="time">${re(n.intDuration)}</span>
          ${n.movie?`<a href="${n.movie}" class="yt-btn" target="_blank">
                    <svg class="modal-icon-yt" width="20" height="20">
                      <use href="/img/sprite.svg#icon-YouTube"></use>
                    </svg>
                </a>`:""}
        </li>`).join(""))||"<li>No tracks found</li>";return`
        <div class="album-card">
          <h3>${t.strAlbum}</h3>
          <div class="table-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </div>
          <ul class="track-list">${s}</ul>
        </div>
      `}).reduce((t,s,o)=>(o%2===0?t.push(`<div class="albums-thumb">${s}`):t[t.length-1]+=s+"</div>",t),[]).join("")}function ge(){const e=Math.ceil(B.length/q),t=document.querySelector("#pagination"),s=5;let o=`<button class="page-btn" data-move="-1" ${p===1?"disabled":""}>Prev</button>`,n=Math.max(p-2,1),a=Math.min(n+s-1,e);a-n+1<s&&(n=Math.max(a-s+1,1)),n>1&&(o+='<button class="page-btn" data-page="1">1</button><span style="padding:0 4px;">...</span>');for(let c=n;c<=a;c++)o+=`<button class="page-btn ${c===p?"active-page":""}" data-page="${c}">${c}</button>`;a<e&&(o+=`<span style="padding:0 4px;">...</span><button class="page-btn" data-page="${e}">${e}</button>`),o+=`<button class="page-btn" data-move="1" ${p===e?"disabled":""}>Next</button>`,t.innerHTML=o,t.onclick=c=>{const r=c.target.closest(".page-btn");if(!r||r.disabled)return;const i=r.dataset.page,l=r.dataset.move;i&&(p=Number(i)),l&&(p+=Number(l)),j(!1)}}function he(e,t){var c,r,i;if(!e)return;const s=(i=(r=(c=t==null?void 0:t[0])==null?void 0:c.tracks)==null?void 0:r.find(l=>l.movie))==null?void 0:i.movie;if(!s)return;const o=a(s);if(!o)return;e.querySelector(".actor-img");const n=document.createElement("iframe");n.style.position="absolute",n.style.top=0,n.style.left=0,n.style.width="100%",n.style.height="100%",n.style.border="none",n.style.display="none",e.appendChild(n),setTimeout(()=>{n.src=o,n.style.display="block"},5e3),e.addEventListener("mouseleave",()=>{n.src="",n.style.display="none"});function a(l){const d=l.match(/v=([^&]+)/)||l.match(/youtu\.be\/([^?]+)/),m=d?d[1]:null;return m?`https://www.youtube.com/embed/${m}?autoplay=1&mute=1&controls=1`:null}}function be(){const e=document.querySelector(".modal-overlay"),t=document.querySelector(".btn-exit");function s(){e.classList.remove("is-open"),document.body.classList.remove("modal-open")}t.addEventListener("click",s),e.addEventListener("click",o=>{o.target===e&&s()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&s()})}const U=document.querySelector(".artists-list"),F=document.querySelector(".artists-loader"),Y=document.querySelector(".artists-load-more-btn");function z(){F.classList.remove("is-hidden")}function V(){F.classList.add("is-hidden")}function ye(){Y.classList.remove("is-hidden")}function w(){Y.classList.add("is-hidden")}function I(){U.innerHTML=""}function ve(e){return!Array.isArray(e)||e.length===0?"":`<div class="artist-genres">${e.map(s=>`<span class="genre-tag">${s}</span>`).join(" ")}</div>`}function J(e){const t=e.map(s=>{const o=s.strBiographyEN||"";return`
                <li class="artist-card">
                    <img 
                        class="img-card"
                        src="${s.strArtistThumb||""}" 
                        alt="${s.strArtist||"Artist Photo"}" 
                        loading="lazy"
                    >

                    ${ve(s.genres)}

                    <h3 class="artist-name">${s.strArtist}</h3>

                    ${o?`<p class="artist-short-info">${o}</p>`:""}
                    
                    <button
                        type="button"
                        class="learn-more-btn"
                        data-artist-id="${s._id}"
                    >
                        Learn More
                        <svg class="model-open-btm-icon" width="8" height="14">
                            <use href="../img/sprite.svg#icon-con"></use>
                        </svg>

                    </button>
                </li>
            `}).join("");U.insertAdjacentHTML("beforeend",t),document.addEventListener("click",s=>{if(s.target.classList.contains("learn-more-btn")){const o=s.target.dataset.artistId;me(o)}})}const Le="https://sound-wave.b.goit.study",K=8;async function Se(e=1){const t={limit:K,page:e};try{return(await L.get(`${Le}/api/artists`,{params:t})).data}catch(s){throw s}}const ke=document.querySelector(".artists-load-more-btn");let T=1,P=0;async function X(){z(),w();try{const e=await Se(T),t=e.artists,s=e.totalArtists;if(P=Math.ceil(s/K),J(t),t.length===0){D.error({title:"Поиск не дал результатов",message:"К сожалению, по вашему запросу артистов не найдено.",position:"topRight"});return}T<P?ye():w()}catch(e){D.error({title:"Ошибка",message:`Ошибка запроса: ${e.message}`,position:"topRight"}),w()}finally{V()}}ke.addEventListener("click",async()=>{T+=1,await X()});X();const Q="https://sound-wave.b.goit.study",C=8;let f=1,Ee=0,E="",A="",h="";function S(){return{filtersToggleBtn:document.querySelector(".filters-toggle-btn"),filtersPanel:document.querySelector(".filters-panel"),genreListMobile:document.querySelector(".genre-list"),sortListMobile:document.querySelector(".sort-list"),searchInput:document.getElementById("artist-search"),searchInputDesktop:document.getElementById("artist-search-desktop"),resetBtn:document.querySelectorAll(".reset-btn"),emptyState:document.querySelector(".empty-state"),resetFiltersBtn:document.querySelector(".reset-filters-btn"),sortOptionsDesktop:document.querySelector(".sort-options-desktop"),genreOptionsDesktop:document.querySelector(".genre-options-desktop"),filterAccordionHeaders:document.querySelectorAll(".filter-accordion-header"),filterGroupHeaders:document.querySelectorAll(".filter-group-header")}}async function Ae(){try{const t=(await L.get(`${Q}/api/genres`)).data;return Array.isArray(t)?t.map(s=>typeof s=="string"?s:typeof s=="object"&&s!==null&&(s.name||s.genre||s.title)||String(s)):typeof t=="object"&&t!==null?Object.values(t).map(s=>typeof s=="string"?s:typeof s=="object"&&s!==null&&(s.name||s.genre||s.title)||String(s)):[]}catch(e){return console.error("Error fetching genres:",e),[]}}async function Me(){const e=S(),t=await Ae();e.genreOptionsDesktop&&(e.genreOptionsDesktop.innerHTML='<li class="filter-option-item active" data-genre="">All Genres</li>',t.forEach(s=>{const o=document.createElement("li");o.className="filter-option-item",o.textContent=s,o.setAttribute("data-genre",s),e.genreOptionsDesktop.appendChild(o)})),e.genreListMobile&&(e.genreListMobile.innerHTML='<li class="dropdown-item" data-genre="">All Genres</li>',t.forEach(s=>{const o=document.createElement("li");o.className="dropdown-item",o.textContent=s,o.setAttribute("data-genre",s),e.genreListMobile.appendChild(o)}))}function we(){const e=S();if(e.sortListMobile){const t=e.sortListMobile.querySelector('.sort-item[data-sort=""]');t&&t.classList.add("active")}if(e.sortOptionsDesktop){const t=e.sortOptionsDesktop.querySelector('.filter-option-item[data-sort=""]');t&&t.classList.add("active")}}async function g(e=1){const t=S();t.emptyState&&t.emptyState.classList.add("is-hidden"),z();const s={limit:C,page:e};E&&(s.genre=E);try{const n=(await L.get(`${Q}/api/artists`,{params:s})).data;let a=n.artists||[];const c=n.totalArtists||0;if(h){const i=h.toLowerCase();a=a.filter(l=>(l.strArtist||"").toLowerCase().includes(i))}A&&a.length>0&&a.sort((i,l)=>{const d=(i.strArtist||"").toLowerCase(),m=(l.strArtist||"").toLowerCase();return A==="name_asc"?d.localeCompare(m):m.localeCompare(d)});const r=h?a.length:c;return Ee=Math.ceil(r/C),f=e,I(),a.length===0&&e===1?t.emptyState&&t.emptyState.classList.remove("is-hidden"):J(a),{artists:a,totalArtists:r}}catch(o){return console.error("Error fetching artists:",o),I(),t.emptyState&&t.emptyState.classList.remove("is-hidden"),{artists:[],totalArtists:0}}finally{V()}}function H(){const e=S();if(E="",A="",h="",f=1,e.searchInput&&(e.searchInput.value=""),e.searchInputDesktop&&(e.searchInputDesktop.value=""),[e.sortListMobile,e.sortOptionsDesktop].forEach(t=>{if(!t)return;t.querySelectorAll(".sort-item, .filter-option-item").forEach(o=>{o.classList.remove("active")});const s=t.querySelector('[data-sort=""]');s&&s.classList.add("active")}),e.genreOptionsDesktop){e.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(s=>{s.classList.remove("active")});const t=e.genreOptionsDesktop.querySelector('[data-genre=""]');t&&t.classList.add("active")}g(1)}function $e(){var n,a,c;const e=S();function t(r){E=r,e.genreOptionsDesktop&&e.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(i=>{i.classList.toggle("active",i.getAttribute("data-genre")===r)}),e.genreListMobile&&e.genreListMobile.querySelectorAll(".dropdown-item").forEach(i=>{i.classList.toggle("active",i.getAttribute("data-genre")===r)}),f=1,g(1)}function s(r){A=r,e.sortOptionsDesktop&&e.sortOptionsDesktop.querySelectorAll(".filter-option-item").forEach(i=>{i.classList.toggle("active",i.getAttribute("data-sort")===r)}),e.sortListMobile&&e.sortListMobile.querySelectorAll(".sort-item").forEach(i=>{i.classList.toggle("active",i.getAttribute("data-sort")===r)}),f=1,g(1)}function o(r,i){if(!r)return;let l;r.addEventListener("input",()=>{clearTimeout(l),l=setTimeout(()=>{h=r.value.trim(),i&&(i.value=r.value),f=1,g(1)},500)}),r.addEventListener("keypress",d=>{d.key==="Enter"&&(clearTimeout(l),h=r.value.trim(),i&&(i.value=r.value),f=1,g(1))})}e.genreOptionsDesktop&&e.genreOptionsDesktop.addEventListener("click",r=>{const i=r.target.closest(".filter-option-item");i&&t(i.getAttribute("data-genre")||"")}),e.genreListMobile&&e.genreListMobile.addEventListener("click",r=>{const i=r.target.closest(".dropdown-item");i&&t(i.getAttribute("data-genre")||"")}),e.sortOptionsDesktop&&e.sortOptionsDesktop.addEventListener("click",r=>{const i=r.target.closest(".filter-option-item");i&&s(i.getAttribute("data-sort")||"")}),e.sortListMobile&&e.sortListMobile.addEventListener("click",r=>{const i=r.target.closest(".sort-item");i&&s(i.getAttribute("data-sort")||"")}),o(e.searchInput,e.searchInputDesktop),o(e.searchInputDesktop,e.searchInput),((n=e.resetBtn)==null?void 0:n.length)>0&&e.resetBtn.forEach(r=>r.addEventListener("click",H)),e.resetFiltersBtn&&e.resetFiltersBtn.addEventListener("click",H),e.filtersToggleBtn&&e.filtersPanel&&e.filtersToggleBtn.addEventListener("click",()=>{const r=e.filtersPanel.classList.contains("is-hidden");e.filtersPanel.classList.toggle("is-hidden",!r),e.filtersToggleBtn.classList.toggle("is-open",r)}),(a=e.filterGroupHeaders)==null||a.forEach(r=>{r.addEventListener("click",()=>{var l;const i=(l=r.closest(".filter-group"))==null?void 0:l.querySelector(".filter-group-content");i&&i.classList.toggle("is-hidden")})}),(c=e.filterAccordionHeaders)==null||c.forEach(r=>{r.addEventListener("click",()=>{var l;const i=(l=r.closest(".filter-accordion"))==null?void 0:l.querySelector(".filter-accordion-content");i&&i.classList.toggle("is-hidden")})})}async function qe(){try{document.readyState==="loading"&&await new Promise(e=>document.addEventListener("DOMContentLoaded",e)),await new Promise(e=>setTimeout(e,300)),$e(),await Me(),we(),await g(1)}catch(e){console.error("Error initializing filters:",e)}}qe();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".read-more-about"),t=document.querySelector(".read-more-modal"),s=document.querySelector(".close-button-about");e.addEventListener("click",()=>{t.classList.add("active")}),s.addEventListener("click",()=>{t.classList.remove("active")}),t.addEventListener("click",o=>{o.target===t&&t.classList.remove("active")}),document.addEventListener("keydown",o=>{o.key==="Escape"&&t.classList.remove("active")})});const k=window.$,M=document.querySelector(".submit-modal"),b=document.querySelector(".submit-feedback"),Te=document.querySelector(".submit-button_modal"),y=document.querySelector(".submit-form"),x="project-feedbacks";function Be(){b&&b.classList.add("is-open"),M&&(M.classList.add("is-open"),document.body.style.overflow="hidden")}function O(){b&&b.classList.remove("is-open"),M&&(M.classList.remove("is-open"),document.body.style.overflow="")}Te.addEventListener("click",O);b.addEventListener("click",e=>{e.target===b&&O()});k(document).ready(()=>{k("#user-rating-input").raty({starType:"img",number:5,path:"https://cdnjs.cloudflare.com/ajax/libs/raty/2.7.1/images",score:0,click:e=>{k("#rating-score").val(e)}}),y.addEventListener("submit",e=>{e.preventDefault();const t=y.username.value.trim(),s=y.message.value.trim(),o=Number(y["rating-score"].value);if(!t||!s||o===0){alert("Please, fill the fields and choose a rating");return}const n={id:Date.now().toString(),name:t,message:s,rating:o},a=JSON.parse(localStorage.getItem(x))||[];a.push(n),localStorage.setItem(x,JSON.stringify(a)),y.reset(),k("#user-rating-input").raty("score",0),document.querySelector("#rating-score").value=0,O()})});const Oe="https://sound-wave.b.goit.study",De=`${Oe}/api/feedbacks`,N="project-feedbacks",v=document.querySelector(".swiper-wrapper"),_=document.querySelector(".feedback-submit-btn");function R({name:e,message:t,rating:s}){const o=Math.round(s);return`<div class="swiper-slide feedback-card">
        <div class="star-rating-container">
            ${"⭐".repeat(o)}
        </div>
        <p class="feedback-text">
            "${t}"
        </p>
        <p class="feedback-author">
            ${e}
      
    </div>
    `}function G(e){new se(".feedback-slider",{slidesPerView:1,loop:!0,spaceBetween:30,navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"},pagination:{el:".feedback-pagination",clickable:!0,type:"custom",renderCustom:function(t,s,o){let a="";const c=Math.min(o,3);for(let r=1;r<=c;r++){let i="swiper-pagination-bullet";r===(s%c||c)&&(i+=" swiper-pagination-bullet-active"),a+=`<span class="${i}" aria-label="Go to slide ${r}"></span>`}return a}}})}async function Z(){if(!v){console.error("Swiper wrapper element not found.");return}try{const e=await fetch(De);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);let t=await e.json();const o=[...JSON.parse(localStorage.getItem(N))||[],...t];if(o.length===0){v.innerHTML='<p class="no-feedback-message">Наразі відгуків немає.</p>';return}const n=o.slice(0,10),a=n.map(R).join("");v.innerHTML=a,G(n.length)}catch(e){console.error("Помилка при оновленні відгуків:",e);const t=JSON.parse(localStorage.getItem(N))||[];if(t.length>0){const s=t.slice(0,10),o=s.map(R).join("");v.innerHTML=o,G(s.length)}else v.innerHTML='<p class="error-message">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>'}}window.updateFeedbacks=Z;_&&_.addEventListener("click",Be);Z();
//# sourceMappingURL=index.js.map
