import{a as v,S as w,i as u}from"./assets/vendor-f736e62a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const L="43418044-448fc0127227a847b3808d395",S="https://pixabay.com/api/";async function f(o,e=1,s){const r=new URLSearchParams({key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return await v.get(`${S}?${r}`)}function m(o){const e=o.hits;return console.log(o),e.map(({webformatURL:s,largeImageURL:r,tags:t,likes:a,views:i,comments:h,downloads:b})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${r}">
                    <img src="${s}" alt="${t}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${a}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${i}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${h}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${b}</span>
                </div>
            </div>
        </li>`).join("")}const q=document.querySelector(".search-form"),d=document.querySelector(".loader"),c=document.querySelector(".load-more-btn"),l=document.querySelector(".list_gallery"),y=new w(".card .place-for-image a",{captionsData:"alt",captionDelay:250});let n=1,g,p;q.addEventListener("submit",x);async function x(o){o.preventDefault(),l.innerHTML="",d.style.display="inline-block",c.style.display="none",p=o.currentTarget.elements.inputElement.value.trim(),n=1;try{await f(p,n,l).then(e=>{if(console.log(e),!e||e.data.total===0){console.log("No data or no images found:",e.data),u.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight",timeout:5e3}),o.target.reset();return}l.insertAdjacentHTML("beforeend",m(e.data)),c.style.display="block",y.refresh(),o.target.reset(),g=Math.floor(e.data.totalHits/15)})}catch(e){console.error("Error fetching images:",e)}finally{d.style.display="none"}}c.addEventListener("click",$);async function $(o){o.preventDefault(),d.style.display="inline-block",console.log(p),n+=1;try{await f(p,n,l).then(e=>{if(!e||e.data.total===0){console.log("No data or no images found:",e.data),u.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight",timeout:5e3}),o.target.reset();return}l.insertAdjacentHTML("beforeend",m(e.data));const s=document.querySelector("li"),{height:r}=s.getBoundingClientRect();C(r*2,0),c.style.display="block",y.refresh(),n===g&&(u.show({title:"Ops.",titleColor:"white",message:"This is last page, sorry!",messageColor:"white",color:"red",position:"topRight",timeout:5e3}),c.style.display="none")})}catch{console.error("Error fetching images:",error)}finally{d.style.display="none"}}function C(o=0,e=0){window.scrollBy({top:o,left:e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
