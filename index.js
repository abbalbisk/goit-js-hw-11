import{a as s,S as h,i as c}from"./assets/vendor-C1DvvBV_.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();s.defaults.baseURL="https://pixabay.com/api/";s.defaults.params={key:"51771971-26538829ed76446a8c68a5295",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function p(o){return s.get("",{params:{...s.defaults.params,q:o}}).then(a=>a.data)}const m=document.querySelector(".gallery"),n=document.querySelector(".loader-hidden");let u=null;function y(o){let a=o.map(r=>`<li class="item-gallery">
        <a href="${r.largeImageURL}"><img src="${r.webformatURL}" alt="${r.tags}" width="360px" height="152px"> </a>
        <ul class="card-info">
          <li>
            <h4>Likes</h4>
            <p>${r.likes}</p>
          </li>

          <li>
            <h4>Views</h4>
            <p>${r.views}</p>
          </li>
          <li>
            <h4>Comments</h4>
            <p>${r.comments}</p>
          </li>
          <li>
            <h4>Downloads</h4>
            <p>${r.downloads}</p>
          </li>
        </ul>
      </li>`).join("");m.insertAdjacentHTML("afterbegin",a),u?u.refresh():u=new h(".gallery a",{captionsData:"alt",captionDelay:250})}function f(){m.innerHTML=""}function g(){n&&n.classList.add("is-active")}function L(){n&&n.classList.remove("is-active")}const d=document.querySelector(".form"),q=document.querySelector('[type="text"]');d.addEventListener("submit",o=>{o.preventDefault();const a=q.value.trim();if(!a){c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),f();return}f(),g(),p(a).then(r=>{const i=r.hits;if(i.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(i)}).catch(r=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{L()}),d.reset()});
//# sourceMappingURL=index.js.map
