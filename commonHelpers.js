import{a as u,S as f,i as n}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="43418044-448fc0127227a847b3808d395",h="https://pixabay.com/api/";async function y(r,o){const s=new URLSearchParams({key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page});try{const{data:a,status:e}=await u.get(`${h}?${s}`);if(e!==200)throw new Error(e);return a}catch{throw new Error("Failed to fetch images")}}function g(r){return r.hits.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:p})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${a}">
                    <img src="${s}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${t}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${i}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${d}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${p}</span>
                </div>
            </div>
        </li>`).join("")}const v=document.querySelector(".search-form"),c=document.querySelector(".loader"),l=document.querySelector(".list_gallery"),w=new f(".card .place-for-image a",{captionsData:"alt",captionDelay:250});v.addEventListener("submit",b);function b(r){r.preventDefault(),l.innerHTML="",c.style.display="inline-block";const o=r.currentTarget.elements.inputElement.value;y(o).then(s=>{if(s.total==0)return n.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight",timeout:"5000"}),r.target.reset(),0;l.insertAdjacentHTML("beforeend",g(s)),w.refresh(),r.target.reset()}).catch(s=>{n.show({title:"Ops.",titleColor:"white",message:s,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})}).finally(()=>{c.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
