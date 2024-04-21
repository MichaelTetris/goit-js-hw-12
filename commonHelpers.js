import{a as b,S as w,i as d}from"./assets/vendor-f736e62a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=c(t);fetch(t.href,a)}})();const L="43418044-448fc0127227a847b3808d395",S="https://pixabay.com/api/";async function f(o,e=1,c){const s=new URLSearchParams({key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return await b.get(`${S}?${s}`)}function m(o){const e=o.hits;return console.log(o),e.map(({webformatURL:c,largeImageURL:s,tags:t,likes:a,views:r,comments:h,downloads:v})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${s}">
                    <img src="${c}" alt="${t}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${a}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${r}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${h}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${v}</span>
                </div>
            </div>
        </li>`).join("")}const x=document.querySelector(".search-form"),p=document.querySelector(".loader"),n=document.querySelector(".load-more-btn"),u=document.querySelector(".list_gallery"),g=new w(".card .place-for-image a",{captionsData:"alt",captionDelay:250});let i=1,y;x.addEventListener("submit",$);let l;function $(o){o.preventDefault(),u.innerHTML="",p.style.display="inline-block",n.style.display="none",l=o.currentTarget.elements.inputElement.value.trim(),console.log(l),i=1,f(l,i).then(e=>{if(console.log(e),!e||e.data.total===0){console.log("No data or no images found:",e.data),d.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight",timeout:5e3}),o.target.reset();return}u.insertAdjacentHTML("beforeend",m(e.data)),n.style.display="block",g.refresh(),o.target.reset(),y=Math.floor(e.data.totalHits/15)}).catch(e=>{console.error("Error fetching images:",e)}).finally(()=>{p.style.display="none"})}n.addEventListener("click",q);function q(o){o.preventDefault(),console.log(l),i+=1,f(l,i).then(e=>{if(!e||e.data.total===0){console.log("No data or no images found:",e.data),d.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight",timeout:5e3}),o.target.reset();return}u.insertAdjacentHTML("beforeend",m(e.data)),n.style.display="block",g.refresh(),i===y&&(d.show({title:"Ops.",titleColor:"white",message:"This is last page, sorry!",messageColor:"white",color:"red",position:"topRight",timeout:5e3}),n.style.display="none")}).catch(e=>{console.error("Error fetching images:",e)}).finally(()=>{p.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
