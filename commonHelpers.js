import{A as y,S as w,N as b,K as L,M as g,b as E}from"./assets/vendor-8a912424.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function I(o){const e=o.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,n=window.innerWidth||document.documentElement.clientWidth,t=e.top<=s&&e.top+e.height>=0,r=e.left<=n&&e.left+e.width>=0;return t&&r}function C(){const o=document.querySelector("#covers"),e=document.querySelectorAll(".marquee-line");window.addEventListener("scroll",function(){I(o)?e.forEach(function(s){s.classList.add("animate")}):e.forEach(function(s){s.classList.remove("animate")})})}document.addEventListener("DOMContentLoaded",C);const S=document.querySelector(".menu"),h=document.querySelector(".dropdown");S.addEventListener("click",function(){h.classList.toggle("show")});h.querySelectorAll("a").forEach(function(o){o.addEventListener("click",function(e){h.classList.remove("show");const s=o.getAttribute("href").substring(1),n=document.getElementById(s);n&&(e.preventDefault(),n.scrollIntoView({behavior:"smooth"}))})});const x=document.querySelector(".burger-menu"),p=document.querySelector(".mobile-menu"),B=document.querySelector(".close-icon");x.addEventListener("click",function(){p.style.display="flex"});B.addEventListener("click",function(){p.style.display="none"});p.querySelectorAll("a").forEach(function(o){o.addEventListener("click",function(e){p.style.display="none";const s=o.getAttribute("href").substring(1),n=document.getElementById(s);n&&(e.preventDefault(),n.scrollIntoView({behavior:"smooth"}))})});const q=document.querySelector(".order-btn-mobile");q.addEventListener("click",function(o){p.style.display="none";const e=document.getElementById("work-together");e&&(o.preventDefault(),e.scrollIntoView({behavior:"smooth"}))});window.addEventListener("resize",function(){window.innerWidth>=768&&(p.style.display="none")});new y(".accordion",{duration:600,showMultiple:!0,openOnInit:[0]});new w(".about-swiper",{slidesPerView:2,spaceBetween:1,speed:1e3,allowSlidePrev:!1,loop:!0,modules:[b,L,g],navigation:{nextEl:".button-next"},keyboard:{enabled:!1,onlyInViewport:!1},mousewheel:!0,breakpoints:{768:{slidesPerView:3,width:600,loop:!0},1440:{slidesPerView:6,width:1200,loop:!1}}});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".swiper-btn-left"),e=document.querySelector(".swiper-btn-right");new w(".swiper",{slidesPerView:1,spaceBetween:16,speed:1e3,modules:[b,L,g],navigation:{nextEl:e,prevEl:o},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0})});document.addEventListener("DOMContentLoaded",function(){new y(".faq-accordion-container",{duration:600,showMultiple:!0})});document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("reviews-list"),e=document.getElementById("not-found"),s=document.querySelector(".left-btn"),n=document.querySelector(".right-btn");let t;function r(){t&&(t.isBeginning?(s.classList.add("swiper-button-disabled"),s.disabled=!0):(s.classList.remove("swiper-button-disabled"),s.disabled=!1),t.isEnd?(n.classList.add("swiper-button-disabled"),n.disabled=!0):(n.classList.remove("swiper-button-disabled"),n.disabled=!1))}fetch("https://portfolio-js.b.goit.study/api/reviews").then(c=>c.json()).then(c=>{if(!c||c.length===0){e.style.display="block";return}c.forEach(u=>{const m=document.createElement("li");m.classList.add("swiper-slide");const f=document.createElement("div");f.classList.add("review-card");const i=document.createElement("img");i.src=u.avatar_url,i.alt=`${u.author}'s avatar`;const l=document.createElement("h3");l.textContent=u.author;const d=document.createElement("p");d.classList.add("review-text"),d.textContent=u.review,f.appendChild(i),f.appendChild(l),f.appendChild(d),m.appendChild(f),o.appendChild(m)}),t=new w(".swiper-container",{navigation:{nextEl:".right-btn",prevEl:".left-btn"},keyboard:{enabled:!0,onlyInViewport:!1},slidesPerView:1,spaceBetween:16,speed:1e3,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:r,init:r}}),s.addEventListener("click",()=>{s.classList.contains("swiper-button-disabled")||t.slidePrev()}),n.addEventListener("click",()=>{n.classList.contains("swiper-button-disabled")||t.slideNext()})}).catch(c=>{alert("Error loading reviews"),e.style.display="block"})});document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("contact-form"),e=document.getElementById("email"),s=document.getElementById("comments"),n=document.getElementById("email-message"),t=document.getElementById("comments-message"),r=()=>{const i=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,l=e.value;return l===""?(e.classList.remove("error","success"),n.textContent="",n.classList.remove("error","success"),!1):i.test(l)?(e.classList.add("success"),e.classList.remove("error"),n.textContent="Valid email format",n.classList.add("success"),n.classList.remove("error"),!0):(e.classList.add("error"),e.classList.remove("success"),n.textContent="Invalid email format. Please use example@domain.com",n.classList.add("error"),n.classList.remove("success"),!1)},c=()=>s.value.trim()===""?(s.classList.add("error"),s.classList.remove("success"),t.textContent="Comments cannot be empty",t.classList.add("error"),t.classList.remove("success"),!1):(s.classList.add("success"),s.classList.remove("error"),t.textContent="Valid comments",t.classList.add("success"),t.classList.remove("error"),!0);e.addEventListener("input",r),s.addEventListener("input",c),o.addEventListener("submit",function(i){i.preventDefault();const l=r(),d=c();l&&d?fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.value,comment:s.value})}).then(a=>a.json()).then(a=>{u(a.title||"Success",a.message||"Form submitted successfully"),o.reset(),e.classList.remove("success"),s.classList.remove("success"),n.textContent="",t.textContent=""}).catch(a=>{u("Error",a.message||"An error occurred")}):u("Error","Please correct the form errors before submitting.")});function u(i,l){m();const d=`
      <div class="modal">
        <button class="modal-close">&times;</button>
        <p class="modal-upper-text">${i}</p>
        <p class="modal-lower-text">${l}</p>
      </div>
    `,a=E.create(d,{onShow:v=>{document.body.classList.add("no-scroll"),v.element().querySelector(".modal-close").addEventListener("click",()=>{m()})},onClose:()=>{document.body.classList.remove("no-scroll")}});a.show(),a.element().addEventListener("click",v=>{v.target===a.element()&&m()}),document.addEventListener("keydown",f)}function m(){const i=document.querySelector(".basicLightbox");i&&(i.classList.remove("basicLightbox--visible"),setTimeout(()=>{i.remove()},400)),document.querySelectorAll(".modal").forEach(d=>{d.style.display="none"}),document.body.classList.remove("no-scroll"),document.body.style.overflow="",document.removeEventListener("keydown",f)}function f(i){i.key==="Escape"&&m()}});
//# sourceMappingURL=commonHelpers.js.map
