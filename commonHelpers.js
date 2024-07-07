import{A as h,S as L,N as g,K as w,M as E,b as S}from"./assets/vendor-3394295f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function q(n){const e=n.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth,s=e.top<=t&&e.top+e.height>=0,i=e.left<=o&&e.left+e.width>=0;return s&&i}function C(){const n=document.querySelector("#covers"),e=document.querySelectorAll(".marquee-line");window.addEventListener("scroll",function(){q(n)?e.forEach(function(t){t.classList.add("animate")}):e.forEach(function(t){t.classList.remove("animate")})})}document.addEventListener("DOMContentLoaded",C);const I=document.querySelector(".menu"),y=document.querySelector(".dropdown");I.addEventListener("click",function(){y.classList.toggle("show")});y.querySelectorAll("a").forEach(function(n){n.addEventListener("click",function(e){y.classList.remove("show");const t=n.getAttribute("href").substring(1),o=document.getElementById(t);o&&(e.preventDefault(),o.scrollIntoView({behavior:"smooth"}))})});const B=document.querySelector(".burger-menu"),p=document.querySelector(".mobile-menu"),x=document.querySelector(".close-icon");B.addEventListener("click",function(){p.style.display="flex"});x.addEventListener("click",function(){p.style.display="none"});p.querySelectorAll("a").forEach(function(n){n.addEventListener("click",function(e){p.style.display="none";const t=n.getAttribute("href").substring(1),o=document.getElementById(t);o&&(e.preventDefault(),o.scrollIntoView({behavior:"smooth"}))})});const M=document.querySelector(".order-btn-mobile");M.addEventListener("click",function(n){p.style.display="none";const e=document.getElementById("work-together");e&&(n.preventDefault(),e.scrollIntoView({behavior:"smooth"}))});const b={duration:400,showMultiple:!1,onOpen:function(n){console.log(n)}};new h(".accordion-container",b);const k=()=>{const n=document.querySelector(".accordion-container .ac-item");if(n){n.classList.add("active");const e=n.querySelector(".ac-panel");e&&(e.style.display="block")}document.querySelectorAll(".accordion-container .ac-trigger").forEach(e=>{e.addEventListener("click",function(){const t=this.closest(".ac-item");t.classList.contains("active")?(t.classList.remove("active"),t.querySelector(".ac-panel").style.display="none"):(t.classList.add("active"),t.querySelector(".ac-panel").style.display="block"),b.showMultiple||document.querySelectorAll(".accordion-container .ac-item").forEach(o=>{o!==t&&o.classList.contains("active")&&(o.classList.remove("active"),o.querySelector(".ac-panel").style.display="none")})})})};k();document.addEventListener("DOMContentLoaded",function(){new L(".about-swiper",{slidesPerView:2,spaceBetween:0,direction:"horizontal",loop:!0,navigation:{nextEl:".about-swiper-button-next"},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});const n=document.querySelectorAll(".about-swiper-slide");n.forEach(e=>e.classList.add("visually-hidden")),n[0].classList.remove("visually-hidden"),n[0].classList.add("is-active"),document.querySelector(".about-swiper-button-next").addEventListener("click",()=>{n.forEach(t=>t.classList.add("visually-hidden"));const e=document.querySelector(".about-swiper-slide.swiper-slide-active");e.classList.remove("visually-hidden"),e.classList.add("is-active")})});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".swiper-btn-left"),e=document.querySelector(".swiper-btn-right"),t=new L(".swiper",{slidesPerView:1,spaceBetween:16,modules:[g,w,E],navigation:{nextEl:e,prevEl:n},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,on:{slideChange:function(){o(this)}}});n.addEventListener("click",()=>{t.slidePrev()}),e.addEventListener("click",()=>{t.slideNext()});function o(s){n.disabled=s.isBeginning,e.disabled=s.isEnd}o(t)});document.addEventListener("DOMContentLoaded",function(){new h(".accordion-container",{duration:600,showMultiple:!0,onOpen:function(n){n.querySelector(".faq-icon").classList.add("active")},onClose:function(n){n.querySelector(".faq-icon").classList.remove("active")}})});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("reviews-list"),e=document.getElementById("not-found"),t=document.querySelector(".left-btn"),o=document.querySelector(".right-btn");let s;function i(){s&&(console.log("Swiper state:",s.isBeginning,s.isEnd),s.isBeginning?(t.classList.add("swiper-button-disabled"),t.disabled=!0,console.log("Left button disabled")):(t.classList.remove("swiper-button-disabled"),t.disabled=!1,console.log("Left button enabled")),s.isEnd?(o.classList.add("swiper-button-disabled"),o.disabled=!0,console.log("Right button disabled")):(o.classList.remove("swiper-button-disabled"),o.disabled=!1,console.log("Right button enabled")))}fetch("https://portfolio-js.b.goit.study/api/reviews").then(r=>r.json()).then(r=>{if(!r||r.length===0){e.style.display="block";return}r.forEach(d=>{const u=document.createElement("li");u.classList.add("swiper-slide");const m=document.createElement("div");m.classList.add("review-card");const c=document.createElement("img");c.src=d.avatar_url,c.alt=`${d.author}'s avatar`;const l=document.createElement("h2");l.textContent=d.author;const f=document.createElement("p");f.textContent=d.review,m.appendChild(c),m.appendChild(l),m.appendChild(f),u.appendChild(m),n.appendChild(u)}),s=new L(".swiper-container",{navigation:{nextEl:".right-btn",prevEl:".left-btn"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:i,init:i}}),t.addEventListener("click",()=>{t.classList.contains("swiper-button-disabled")||(s.slidePrev(),console.log("Left button clicked"))}),o.addEventListener("click",()=>{o.classList.contains("swiper-button-disabled")||(s.slideNext(),console.log("Right button clicked"))})}).catch(r=>{alert("Error loading reviews"),e.style.display="block"})});document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("contact-form"),e=document.getElementById("email"),t=document.getElementById("comments"),o=document.getElementById("email-message"),s=document.getElementById("comments-message"),i=()=>{const c=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,l=e.value;return l===""?(e.classList.remove("error","success"),o.textContent="",o.classList.remove("error","success"),!1):c.test(l)?(e.classList.add("success"),e.classList.remove("error"),o.textContent="Valid email format",o.classList.add("success"),o.classList.remove("error"),!0):(e.classList.add("error"),e.classList.remove("success"),o.textContent="Invalid email format. Please use example@domain.com",o.classList.add("error"),o.classList.remove("success"),!1)},r=()=>t.value.trim()===""?(t.classList.add("error"),t.classList.remove("success"),s.textContent="Comments cannot be empty",s.classList.add("error"),s.classList.remove("success"),!1):(t.classList.add("success"),t.classList.remove("error"),s.textContent="Valid comments",s.classList.add("success"),s.classList.remove("error"),!0);e.addEventListener("input",i),t.addEventListener("input",r),n.addEventListener("submit",function(c){c.preventDefault();const l=i(),f=r();l&&f?fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.value,comment:t.value})}).then(a=>a.json()).then(a=>{d(a.title||"Success",a.message||"Form submitted successfully"),n.reset(),e.classList.remove("success"),t.classList.remove("success"),o.textContent="",s.textContent=""}).catch(a=>{d("Error",a.message||"An error occurred")}):d("Error","Please correct the form errors before submitting.")});function d(c,l){u();const f=`
      <div class="modal">
        <button class="modal-close">&times;</button>
        <p class="modal-upper-text">${c}</p>
        <p class="modal-lower-text">${l}</p>
      </div>
    `,a=S.create(f,{onShow:v=>{document.body.classList.add("no-scroll"),v.element().querySelector(".modal-close").addEventListener("click",()=>{u()})},onClose:()=>{document.body.classList.remove("no-scroll")}});a.show(),a.element().addEventListener("click",v=>{v.target===a.element()&&u()}),document.addEventListener("keydown",m)}function u(){const c=document.querySelector(".basicLightbox");c&&(c.classList.remove("basicLightbox--visible"),setTimeout(()=>{c.remove()},400)),document.querySelectorAll(".modal").forEach(f=>{f.style.display="none"}),document.body.classList.remove("no-scroll"),document.body.style.overflow="",document.removeEventListener("keydown",m)}function m(c){c.key==="Escape"&&u()}});
//# sourceMappingURL=commonHelpers.js.map
