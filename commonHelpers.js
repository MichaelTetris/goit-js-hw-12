import{a as p,S as u,i as f}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="43418044-448fc0127227a847b3808d395",y="https://pixabay.com/api/";async function h(s,o){const r=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});try{const{data:a,status:e}=await p.get(`${y}?${r}`);if(e!==200)throw new Error(e);return a}catch{throw new Error("Failed to fetch images")}}function g(s){return s.hits.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:n,comments:l,downloads:d})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${a}">
                    <img src="${r}" alt="${e}" class="picture"/>
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
                    <span class="info-value">${l}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${d}</span>
                </div>
            </div>
        </li>`).join("")}const v=document.querySelector(".search-form"),i=document.querySelector(".loader"),b=document.querySelector(".load-more-btn"),c=document.querySelector(".list_gallery"),w=new u(".card .place-for-image a",{captionsData:"alt",captionDelay:250});v.addEventListener("submit",L);function L(s){s.preventDefault(),c.innerHTML="",i.style.display="inline-block";const o=s.currentTarget.elements.inputElement.value;console.log(o),h(o).then(r=>{if(!r||r.total===0){console.log("No data or no images found:",r),f.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight",timeout:5e3}),s.target.reset();return}c.insertAdjacentHTML("beforeend",g(r)),b.style.display="block",w.refresh(),s.target.reset()}).catch(r=>{console.error("Error fetching images:",r)}).finally(()=>{i.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
