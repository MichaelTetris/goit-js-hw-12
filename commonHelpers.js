import{a as f,S as m,i as y}from"./assets/vendor-f736e62a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="43418044-448fc0127227a847b3808d395",g="https://pixabay.com/api/";async function v(s,r){const a=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});try{const{data:o,status:e}=await f.get(`${g}?${a}`);if(e!==200)throw new Error(e);return o}catch{throw new Error("Failed to fetch images")}}function b(s){return s.hits.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:n,comments:p,downloads:u})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${o}">
                    <img src="${a}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${t}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${n}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${p}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${u}</span>
                </div>
            </div>
        </li>`).join("")}const w=document.querySelector(".search-form"),c=document.querySelector(".loader"),d=document.querySelector(".load-more-btn"),l=document.querySelector(".list_gallery"),L=new m(".card .place-for-image a",{captionsData:"alt",captionDelay:250});w.addEventListener("submit",S);let i;function S(s){s.preventDefault(),l.innerHTML="",c.style.display="inline-block",i=s.currentTarget.elements.inputElement.value.trim(),console.log(i),v(i).then(r=>{if(!r||r.total===0){console.log("No data or no images found:",r),y.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight",timeout:5e3}),s.target.reset();return}l.insertAdjacentHTML("beforeend",b(r)),d.style.display="block",L.refresh(),s.target.reset()}).catch(r=>{console.error("Error fetching images:",r)}).finally(()=>{c.style.display="none"})}d.addEventListener("click",x);function x(){console.log("ok")}
//# sourceMappingURL=commonHelpers.js.map
