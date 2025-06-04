import{a as l,i as n}from"./assets/vendor-2iTncBXz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();l.defaults.baseURL="https://683d54c2199a0039e9e4fc76.mockapi.io/";const f=()=>l.get("/posts"),m=s=>l.post("/posts",s),g=s=>l.delete(`/posts/${s}`),y=({id:s,title:e,body:r})=>`
<li class="posts-list-item">
  <button class="post-delete-btn" type="button" data-delete data-post-id='${s}' >
    <svg class="post-delete-icon" width="16" height="16">
      <use href="/js-practice-PostsRequest/icons.svg#icon-trash"></use>
      </svg>
   </button>
   <h3 class="posts-list-item-title">${e}</h3>
  <p class="posts-list-item-text">${r}</p>
</li>

  `,a={postList:document.querySelector(".js-posts-list"),postForm:document.querySelector(".js-post-form")},u=async()=>{try{const{data:s}=await f(),e=s.map(r=>y(r)).join(" ");a.postList.innerHTML=e}catch(s){console.log(s)}};u();const h=async s=>{try{s.preventDefault();const{currentTarget:e}=s,{post_title:r,post_body:i}=e.elements,t={title:r.value.trim(),body:i.value.trim()};if(Object.values(t).find(p=>p==="")===""){n.warning({title:"Warning",message:"All fields must be filled out",timeout:3e3,position:"topRight",messageColor:"#fff",titleColor:"#fff",backgroundColor:"#FFA500"});return}const{data:d}=await m(t);n.success({title:"Success",message:`${d.title} added successfully!`,timeout:3e3,position:"topRight",messageColor:"#fff",titleColor:"#fff"}),e.reset(),u()}catch(e){console.log(e)}},b=async s=>{try{const e=s.target.closest("button[data-delete]");if(e===null)return;const r=e.dataset.postId,{data:i}=await g(r);n.success({title:"Success",message:`${i.title} successfully deleted!`,timeout:3e3,position:"topRight"}),u()}catch(e){console.log(e)}};a.postForm.addEventListener("submit",h);a.postList.addEventListener("click",b);
//# sourceMappingURL=index.js.map
