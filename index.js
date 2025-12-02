import{a as v,i as I,S as ee}from"./assets/vendor-CYE3kvfv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const u={headerBtnOpenMenu:document.querySelector(".header-button-menu"),headerBtnCloseMenu:document.querySelector(".button-close"),mobileMenu:document.querySelector(".menu-drive"),mobileLinks:document.querySelectorAll(".header-mobile-nav-link"),menuLogoLink:document.querySelector(".menu-drive .header-link-logo"),desktopLinks:document.querySelectorAll(".header-list a")},M=()=>{u.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};u.headerBtnOpenMenu&&u.headerBtnOpenMenu.addEventListener("click",M);u.headerBtnCloseMenu&&u.headerBtnCloseMenu.addEventListener("click",M);u.mobileLinks.length>0&&u.mobileLinks.forEach(e=>{e.addEventListener("click",M)});u.menuLogoLink&&u.menuLogoLink.addEventListener("click",M);u.desktopLinks.length>0&&u.desktopLinks.forEach(e=>{e.addEventListener("click",function(t){u.desktopLinks.forEach(s=>{s.classList.remove("is-active")}),t.currentTarget.classList.add("is-active")})});async function te(){try{return(await v.get("https://sound-wave.b.goit.study/api/artists")).data.artists}catch(e){console.error("Помилка отримання артистів:",e)}}function se(e){let t=e.length,s;for(;t!==0;)s=Math.floor(Math.random()*t),t--,[e[t],e[s]]=[e[s],e[t]];return e}te().then(e=>{const t=document.getElementById("colLeft"),s=document.getElementById("colRight");if(!e||e.length===0)return;const o=se([...e]).slice(0,6);o.slice(0,3).forEach(a=>{const c=document.createElement("img");c.src=a.strArtistThumb,c.className="hero-img",t.appendChild(c)}),o.slice(3,6).forEach(a=>{const c=document.createElement("img");c.src=a.strArtistThumb,c.className="hero-img",s.appendChild(c)})});function ne(e){const t=Math.floor(e/1e3),s=Math.floor(t/60),n=t%60;return`${s}:${n.toString().padStart(2,"0")}`}function oe(e,t){return!e&&!t?"Information missing":t?`${e} - ${t}`:`${e}-present`}function ie(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function re(){const e=document.querySelector(".loader");e&&(e.style.display="none")}function ae(e,t=500){e||(e="Information missing");const s=e.length>t,n=e.slice(0,t);return`
    <span id="bio-text">${s?n:e}</span>
    ${s?`<button id="bio-toggle" class="bio-toggle-btn">
              <svg class="modal-icon" width="20" height="20">
                <use href="/img/sprite.svg#icon-dots-horizontal"></use>
              </svg>
           </button>`:""}
  `}function ce(e){const t=document.querySelector("#bio-toggle"),s=document.querySelector("#bio-text");if(!t)return;let n=!1;t.addEventListener("click",()=>{n=!n,n?(s.textContent=e,t.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="/img/sprite.svg#icon-modal-up"></use>
        </svg>`):(s.textContent=e.slice(0,250),t.innerHTML=`
        <svg class="modal-icon" width="20" height="20">
          <use href="/img/sprite.svg#icon-dots-horizontal"></use>
        </svg>`)})}const le=v.create({baseURL:"https://sound-wave.b.goit.study/api"});async function de(e){try{ie();const t=document.querySelector(".modal-overlay"),s=document.querySelector(".modal");document.body.classList.add("modal-open"),s.innerHTML="",t.classList.add("is-open");const{data:n}=await le.get(`/artists/${e}/albums`);ue(n)}catch(t){console.error("Error loading artist:",t)}finally{re()}}let f=1;const B=8;let O=[];function ue(e){const{strArtistThumb:t,strArtist:s,intFormedYear:n,intDiedYear:o,genres:a,strGender:c,intMembers:i,strCountry:r,strBiographyEN:l,albumsList:d}=e;O=d||[],f=1;const p=document.querySelector(".modal"),Q=(a==null?void 0:a.map(W=>`<span>${W}</span>`).join(" "))||"";p.innerHTML=`
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
          <li><h2>Years active</h2><p>${oe(n,o)}</p></li>
          <li><h2>Sex</h2><p>${c||"Information missing"}</p></li>
        </div>

        <div class="actor-info-container">
          <li><h2>Members</h2><p>${i||"Information missing"}</p></li>
          <li><h2>Country</h2><p>${r||"Information missing"}</p></li>
        </div>

        <li><h2>Biography</h2>${ae(l)}</li>
        <li class="actor-cards">${Q}</li>
      </ul>
    </div>

    <div class="albums">
      <h2>Albums</h2>
      <div class="albums-cards" id="albums-container"></div>
      <div class="pagination" id="pagination"></div>
    </div>
  `,ce(l),ge();const Z=p.querySelector(".actor-img-wrapper");fe(Z,d),j(!0)}function j(e){const t=(f-1)*B,s=t+B,n=O.slice(t,s),o=document.querySelector("#albums-container");o.innerHTML=pe(n),me(),e||document.querySelector(".albums").scrollIntoView({behavior:"smooth"})}function pe(e){return e.map(t=>{var n;const s=((n=t.tracks)==null?void 0:n.map(o=>`
        <li class="track">
          <span class="title">${o.strTrack}</span>
          <span class="time">${ne(o.intDuration)}</span>
          ${o.movie?`<a href="${o.movie}" class="yt-btn" target="_blank">
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
      `}).reduce((t,s,n)=>(n%2===0?t.push(`<div class="albums-thumb">${s}`):t[t.length-1]+=s+"</div>",t),[]).join("")}function me(){const e=Math.ceil(O.length/B),t=document.querySelector("#pagination"),s=3;let n=`<button class="page-btn" data-move="-1" ${f===1?"disabled":""}>Prev</button>`,o=Math.max(f-2,1),a=Math.min(o+s-1,e);a-o+1<s&&(o=Math.max(a-s+1,1)),o>1&&(n+='<button class="page-btn" data-page="1">1</button><span style="padding:0 4px;">...</span>');for(let c=o;c<=a;c++)n+=`<button class="page-btn ${c===f?"active-page":""}" data-page="${c}">${c}</button>`;a<e&&(n+=`<span style="padding:0 4px;">...</span><button class="page-btn" data-page="${e}">${e}</button>`),n+=`<button class="page-btn" data-move="1" ${f===e?"disabled":""}>Next</button>`,t.innerHTML=n,t.onclick=c=>{const i=c.target.closest(".page-btn");if(!i||i.disabled)return;const r=i.dataset.page,l=i.dataset.move;r&&(f=Number(r)),l&&(f+=Number(l)),j(!1)}}function fe(e,t){var c,i,r;if(!e)return;const s=(r=(i=(c=t==null?void 0:t[0])==null?void 0:c.tracks)==null?void 0:i.find(l=>l.movie))==null?void 0:r.movie;if(!s)return;const n=a(s);if(!n)return;e.querySelector(".actor-img");const o=document.createElement("iframe");o.style.position="absolute",o.style.top=0,o.style.left=0,o.style.width="100%",o.style.height="100%",o.style.border="none",o.style.display="none",e.appendChild(o),setTimeout(()=>{o.src=n,o.style.display="block"},5e3),e.addEventListener("mouseleave",()=>{o.src="",o.style.display="none"});function a(l){const d=l.match(/v=([^&]+)/)||l.match(/youtu\.be\/([^?]+)/),p=d?d[1]:null;return p?`https://www.youtube.com/embed/${p}?autoplay=1&mute=1&controls=1`:null}}function ge(){const e=document.querySelector(".modal-overlay"),t=document.querySelector(".btn-exit");function s(){e.classList.remove("is-open"),document.body.classList.remove("modal-open")}t.addEventListener("click",s),e.addEventListener("click",n=>{n.target===e&&s()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&s()})}const U=document.querySelector(".artists-list"),F=document.querySelector(".artists-loader"),he=document.querySelector(".artists-load-more-btn");function Y(){F.classList.remove("is-hidden")}function V(){F.classList.add("is-hidden")}function C(){he.classList.add("is-hidden")}function N(){U.innerHTML=""}function be(e){return!Array.isArray(e)||e.length===0?"":`<div class="artist-genres">${e.map(s=>`<span class="genre-tag">${s}</span>`).join(" ")}</div>`}function z(e){const t=e.map(s=>{const n=s.strBiographyEN||"";return`
                <li class="artist-card">
                    <img 
                        class="img-card"
                        src="${s.strArtistThumb||""}" 
                        alt="${s.strArtist||"Artist Photo"}" 
                        loading="lazy"
                        data-artist-id="${s._id}"
                    >

                    ${be(s.genres)}

                    <h3 class="artist-name">${s.strArtist}</h3>

                    ${n?`<p class="artist-short-info">${n}</p>`:""}
                    
                    <button
                        type="button"
                        class="learn-more-btn"
                        data-artist-id="${s._id}"
                    >
                        Learn More
                        <svg class="model-open-btm-icon" width="8" height="14">
                            <use href="./img/sprite.svg#icon-con"></use>
                        </svg>

                    </button>
                </li>
            `}).join("");U.innerHTML=t,document.addEventListener("click",s=>{if(s.target.classList.contains("learn-more-btn")||s.target.classList.contains("img-card")){const n=s.target.dataset.artistId;de(n)}})}const ye="https://sound-wave.b.goit.study",J=8;async function ve(e=1){const t={limit:J,page:e};try{return(await v.get(`${ye}/api/artists`,{params:t})).data}catch(s){throw s}}document.querySelector(".artists-load-more-btn");let H=0;async function K(e=1,t=!1){Y();try{const s=await ve(e),n=s.artists,o=s.totalArtists;if(H=Math.ceil(o/J),z(n),Le(e,H),t&&document.querySelector(".section-subtitle").scrollIntoView({behavior:"smooth"}),n.length===0){I.error({title:"Поиск не дал результатов",message:"К сожалению, по вашему запросу артистов не найдено.",position:"topRight"});return}}catch(s){I.error({title:"Ошибка",message:`Ошибка запроса: ${s.message}`,position:"topRight"})}finally{V()}}K();const T=document.querySelector(".pagination");function m(e,t,s,n){const o=e===s?" active":"",a=t==="..."?" pagination-dots":"",c=t==="..."||t==="Prev"&&s===1||t==="Next"&&s===n?" disabled":"";return`
        <button 
            class="paginationBtn${o}${a}${c}" 
            data-page="${e}"
            ${c?"disabled":""}
        >
            ${t}
        </button>
    `}function Le(e,t){T.innerHTML="";let s="";if(s+=m(e-1,"←",e,t),t<=5)for(let n=1;n<=t;n++)s+=m(n,String(n),e,t);else s+=m(1,"1",e,t),s+=m(2,"2",e,t),s+=m(3,"3",e,t),e>4&&e<t-2&&(s+='<span class="pagination-dots">...</span>'),e>3&&e<t-2&&(s+=m(e,String(e),e,t)),e<t-3&&(s+='<span class="pagination-dots">...</span>'),s+=m(t,String(t),e,t);s+=m(e+1,"→	",e,t),T.innerHTML=s}T.addEventListener("click",e=>{const t=e.target.closest(".paginationBtn");if(!t||t.classList.contains("disabled"))return;const s=Number(t.dataset.page);isNaN(s)||K(s,!0)});const P="https://sound-wave.b.goit.study",x=8;let g=1,Se=0,E="",w="",b="";function S(){return{filtersToggleBtn:document.querySelector(".filters-toggle-btn"),filtersPanel:document.querySelector(".filters-panel"),genreListMobile:document.querySelector(".genre-list"),sortListMobile:document.querySelector(".sort-list"),searchInput:document.getElementById("artist-search"),searchInputDesktop:document.getElementById("artist-search-desktop"),resetBtn:document.querySelectorAll(".reset-btn"),emptyState:document.querySelector(".empty-state"),resetFiltersBtn:document.querySelector(".reset-filters-btn"),sortOptionsDesktop:document.querySelector(".sort-options-desktop"),genreOptionsDesktop:document.querySelector(".genre-options-desktop"),filterDropdownBtns:document.querySelectorAll(".filter-dropdown-btn"),filterGroupHeaders:document.querySelectorAll(".filter-group-header")}}async function ke(){try{const t=(await v.get(`${P}/api/genres`)).data;return Array.isArray(t)?t.map(s=>typeof s=="string"?s:typeof s=="object"&&s!==null&&(s.name||s.genre||s.title)||String(s)):typeof t=="object"&&t!==null?Object.values(t).map(s=>typeof s=="string"?s:typeof s=="object"&&s!==null&&(s.name||s.genre||s.title)||String(s)):[]}catch(e){return console.error("Error fetching genres:",e),[]}}async function Ee(){const e=S(),t=await ke();e.genreOptionsDesktop&&(e.genreOptionsDesktop.innerHTML='<li class="filter-option-item active" data-genre="">All Genres</li>',t.forEach(s=>{const n=document.createElement("li");n.className="filter-option-item",n.textContent=s,n.setAttribute("data-genre",s),e.genreOptionsDesktop.appendChild(n)})),e.genreListMobile&&(e.genreListMobile.innerHTML='<li class="dropdown-item" data-genre="">All Genres</li>',t.forEach(s=>{const n=document.createElement("li");n.className="dropdown-item",n.textContent=s,n.setAttribute("data-genre",s),e.genreListMobile.appendChild(n)}))}function we(){const e=S();if(e.sortListMobile){const t=e.sortListMobile.querySelector('.sort-item[data-sort=""]');t&&t.classList.add("active")}if(e.sortOptionsDesktop){const t=e.sortOptionsDesktop.querySelector('.filter-option-item[data-sort=""]');t&&t.classList.add("active")}}async function h(e=1){const t=S();t.emptyState&&t.emptyState.classList.add("is-hidden"),Y();const s={limit:x,page:e};E&&(s.genre=E);try{const o=(await v.get(`${P}/api/artists`,{params:s})).data;let a=o.artists||[];const c=o.totalArtists||0;if(b){const r=b.toLowerCase();a=a.filter(l=>(l.strArtist||"").toLowerCase().includes(r))}w&&a.length>0&&a.sort((r,l)=>{const d=(r.strArtist||"").toLowerCase(),p=(l.strArtist||"").toLowerCase();return w==="name_asc"?d.localeCompare(p):p.localeCompare(d)});const i=b?a.length:c;return Se=Math.ceil(i/x),g=e,N(),a.length===0&&e===1?(t.emptyState&&t.emptyState.classList.remove("is-hidden"),C()):z(a),{artists:a,totalArtists:i}}catch(n){return console.error("Error fetching artists:",n),N(),t.emptyState&&t.emptyState.classList.remove("is-hidden"),C(),{artists:[],totalArtists:0}}finally{V()}}function _(){const e=S();if(E="",w="",b="",g=1,e.searchInput&&(e.searchInput.value=""),e.searchInputDesktop&&(e.searchInputDesktop.value=""),[e.sortListMobile,e.sortOptionsDesktop].forEach(t=>{if(!t)return;t.querySelectorAll(".sort-item, .filter-option-item").forEach(n=>{n.classList.remove("active")});const s=t.querySelector('[data-sort=""]');s&&s.classList.add("active")}),e.genreOptionsDesktop){e.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(s=>{s.classList.remove("active")});const t=e.genreOptionsDesktop.querySelector('[data-genre=""]');t&&t.classList.add("active")}h(1)}function Ae(){var o,a,c;const e=S();function t(i){E=i,e.genreOptionsDesktop&&e.genreOptionsDesktop.querySelectorAll(".filter-option-item").forEach(r=>{r.classList.toggle("active",r.getAttribute("data-genre")===i)}),e.genreListMobile&&e.genreListMobile.querySelectorAll(".dropdown-item").forEach(r=>{r.classList.toggle("active",r.getAttribute("data-genre")===i)}),g=1,h(1)}function s(i){w=i,e.sortOptionsDesktop&&e.sortOptionsDesktop.querySelectorAll(".filter-option-item").forEach(r=>{r.classList.toggle("active",r.getAttribute("data-sort")===i)}),e.sortListMobile&&e.sortListMobile.querySelectorAll(".sort-item").forEach(r=>{r.classList.toggle("active",r.getAttribute("data-sort")===i)}),g=1,h(1)}function n(i,r){if(!i)return;let l;i.addEventListener("input",()=>{clearTimeout(l),l=setTimeout(()=>{b=i.value.trim(),r&&(r.value=i.value),g=1,h(1)},500)}),i.addEventListener("keypress",d=>{d.key==="Enter"&&(clearTimeout(l),b=i.value.trim(),r&&(r.value=i.value),g=1,h(1))})}e.genreOptionsDesktop&&e.genreOptionsDesktop.addEventListener("click",i=>{const r=i.target.closest(".filter-option-item");r&&t(r.getAttribute("data-genre")||"")}),e.genreListMobile&&e.genreListMobile.addEventListener("click",i=>{const r=i.target.closest(".dropdown-item");r&&t(r.getAttribute("data-genre")||"")}),e.sortOptionsDesktop&&e.sortOptionsDesktop.addEventListener("click",i=>{const r=i.target.closest(".filter-option-item");r&&s(r.getAttribute("data-sort")||"")}),e.sortListMobile&&e.sortListMobile.addEventListener("click",i=>{const r=i.target.closest(".sort-item");r&&s(r.getAttribute("data-sort")||"")}),n(e.searchInput,e.searchInputDesktop),n(e.searchInputDesktop,e.searchInput),((o=e.resetBtn)==null?void 0:o.length)>0&&e.resetBtn.forEach(i=>i.addEventListener("click",_)),e.resetFiltersBtn&&e.resetFiltersBtn.addEventListener("click",_),e.filtersToggleBtn&&e.filtersPanel&&(e.filtersToggleBtn.addEventListener("click",i=>{i.stopPropagation();const r=e.filtersPanel.classList.contains("is-open");e.filtersPanel.classList.toggle("is-open",!r),e.filtersToggleBtn.classList.toggle("is-open",!r)}),document.addEventListener("click",i=>{!i.target.closest(".filters-panel")&&!i.target.closest(".filters-toggle-btn")&&(e.filtersPanel.classList.remove("is-open"),e.filtersToggleBtn.classList.remove("is-open"))})),(a=e.filterGroupHeaders)==null||a.forEach(i=>{i.addEventListener("click",()=>{var l;const r=(l=i.closest(".filter-group"))==null?void 0:l.querySelector(".filter-group-content");r&&r.classList.toggle("is-hidden")})}),(c=e.filterDropdownBtns)==null||c.forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const l=i.closest(".filter-dropdown"),d=l==null?void 0:l.querySelector(".filter-dropdown-content");document.querySelectorAll(".filter-dropdown-content").forEach(p=>{p!==d&&p.classList.remove("is-open")}),d&&d.classList.toggle("is-open")})}),document.addEventListener("click",i=>{i.target.closest(".filter-dropdown")||document.querySelectorAll(".filter-dropdown-content").forEach(r=>{r.classList.remove("is-open")})})}async function Me(){try{document.readyState==="loading"&&await new Promise(e=>document.addEventListener("DOMContentLoaded",e)),await new Promise(e=>setTimeout(e,300)),Ae(),await Ee(),we(),await h(1)}catch(e){console.error("Error initializing filters:",e)}}Me();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".read-more-about"),t=document.querySelector(".read-more-modal"),s=document.querySelector(".close-button-about");e.addEventListener("click",()=>{t.classList.add("active")}),s.addEventListener("click",()=>{t.classList.remove("active")}),t.addEventListener("click",n=>{n.target===t&&t.classList.remove("active")}),document.addEventListener("keydown",n=>{n.key==="Escape"&&t.classList.remove("active")})});const k=window.$,A=document.querySelector(".submit-modal"),y=document.querySelector(".submit-feedback"),$e=document.querySelector(".submit-button_modal"),L=document.querySelector(".submit-form"),G="project-feedbacks";function qe(){y&&y.classList.add("is-open"),A&&(A.classList.add("is-open"),document.body.style.overflow="hidden")}function D(){y&&y.classList.remove("is-open"),A&&(A.classList.remove("is-open"),document.body.style.overflow="")}$e.addEventListener("click",D);y.addEventListener("click",e=>{e.target===y&&D()});k(document).ready(()=>{k("#user-rating-input").raty({starType:"img",number:5,path:"https://cdnjs.cloudflare.com/ajax/libs/raty/2.7.1/images",score:0,click:e=>{k("#rating-score").val(e)}}),L.addEventListener("submit",e=>{e.preventDefault();const t=L.username.value.trim(),s=L.message.value.trim(),n=Number(L["rating-score"].value);if(!t||!s||n===0){alert("Please, fill the fields and choose a rating");return}const o={id:Date.now().toString(),name:t,message:s,rating:n},a=JSON.parse(localStorage.getItem(G))||[];a.push(o),localStorage.setItem(G,JSON.stringify(a)),L.reset(),k("#user-rating-input").raty("score",0),document.querySelector("#rating-score").value=0,D()})});const Be="https://sound-wave.b.goit.study",Te=`${Be}/api/feedbacks`,q=document.querySelector(".swiper-wrapper"),R=document.querySelector(".feedback-submit-btn");function Oe(e){new ee(".feedback-slider",{slidesPerView:1,loop:!0,spaceBetween:30,navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"},pagination:{el:".feedback-pagination",clickable:!0,type:"custom",renderCustom:function(t,s,n){let a="";const c=Math.min(n,3);for(let i=1;i<=c;i++){let r="swiper-pagination-bullet";i===(s%c||c)&&(r+=" swiper-pagination-bullet-active"),a+=`<span class="${r}" aria-label="Go to slide ${i}"></span>`}return a}}})}async function X(){var e;if(!q){console.error("Swiper wrapper element not found.");return}try{const s=((e=(await v.get(Te)).data)==null?void 0:e.data)||[];q.innerHTML=s.slice(0,10).map((n,o)=>`
        <div class="swiper-slide feedback-card">
          <div id="star-${o}" class="star-rating-container"></div>
          <p class="feedback-text">"${n.descr}"</p>
          <p class="feedback-author">${n.name}</p>
        </div>
      `).join(""),s.forEach((n,o)=>{const a=Math.round(typeof n.rating=="number"?n.rating:0);$(`#star-${o}`).raty({score:a,readOnly:!0,starType:"i"})}),Oe(s.length)}catch(t){console.error("Помилка при оновленні відгуків:",t),q.innerHTML='<p class="error-message">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>'}}window.updateFeedbacks=X;R&&R.addEventListener("click",qe);X();
//# sourceMappingURL=index.js.map
