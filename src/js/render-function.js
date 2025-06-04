export const createPostCartTemplate = ({ id, title, body }) => {
  return `
<li class="posts-list-item">
  <button class="post-delete-btn" type="button" data-delete data-post-id='${id}' >
    <svg class="post-delete-icon" width="16" height="16">
      <use href="/img/icons.svg#icon-trash"></use>;
      </svg>
   </button>
   <h3 class="posts-list-item-title">${title}</h3>
  <p class="posts-list-item-text">${body}</p>
</li>

  `;
};

/* <use href="../img/icons.svg#icon-trash"></use>; */
