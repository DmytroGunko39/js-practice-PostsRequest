import{a as l,i as n}from"./assets/vendor-2iTncBXz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();l.defaults.baseURL="https://683d54c2199a0039e9e4fc76.mockapi.io/";const d=()=>l.get("/posts"),p=s=>l.post("/posts",s),f=s=>l.delete(`/posts/${s}`),m=({id:s,title:t,body:r})=>`
<li class="posts-list-item">
  <button class="post-delete-btn" type="button" data-delete data-post-id='${s}' >
    <svg class="post-delete-icon" width="16" height="16">
      <use href="/js-practice-PostsRequest/icons.svg#icon-trash"></use>;
      </svg>
   </button>
   <h3 class="posts-list-item-title">${t}</h3>
  <p class="posts-list-item-text">${r}</p>
</li>

  `,a={postList:document.querySelector(".js-posts-list"),postForm:document.querySelector(".js-post-form")},u=async()=>{try{const{data:s}=await d(),t=s.map(r=>m(r)).join(" ");a.postList.innerHTML=t}catch(s){console.log(s)}};u();const g=async s=>{try{s.preventDefault();const{currentTarget:t}=s,r={title:t.elements.post_title.value.trim(),body:t.elements.post_body.value.trim()};if(Object.values(r).find(c=>c==="")===""){n.warning({title:"Warning",message:"All fields must be filled out",timeout:3e3,position:"topRight",messageColor:"#fff",titleColor:"#fff",backgroundColor:"#FFA500"});return}const{data:o}=p(r);n.success({title:"Success",message:`${o.title} added successfully!`,timeout:3e3,position:"topRight",messageColor:"#fff",titleColor:"#fff"}),t.reset(),u()}catch(t){console.log(t)}},y=async s=>{try{const t=s.target.closest("button[data-delete]");if(t===null)return;const r=t.dataset.postId,{data:i}=await f(r);n.success({title:"Success",message:`${i.title} successfully deleted!`,timeout:3e3,position:"topRight"}),u()}catch(t){console.log(t)}};a.postForm.addEventListener("submit",g);a.postList.addEventListener("click",y);
//# sourceMappingURL=index.js.map
