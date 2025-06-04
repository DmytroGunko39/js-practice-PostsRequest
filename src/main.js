import { getAllPosts, createNewPost, deletePostById } from './js/mockapi';
import { createPostCartTemplate } from './js/render-function';
import iziToast from 'izitoast';

console.log(deletePostById);
const refs = {
  postList: document.querySelector('.js-posts-list'),
  postForm: document.querySelector('.js-post-form'),
};

const renderPosts = () => {
  getAllPosts()
    .then(({ data: posts }) => {
      const postTemplate = posts
        .map(post => createPostCartTemplate(post))
        .join(' ');

      refs.postList.innerHTML = postTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};
renderPosts();

const onPostFotmSubmit = event => {
  event.preventDefault();

  const { currentTarget: postForm } = event;

  console.dir(postForm);
  const formData = {
    title: postForm.elements.post_title.value.trim(),
    body: postForm.elements.post_body.value.trim(),
  };

  const formDataValues = Object.values(formData);

  const emptyValue = formDataValues.find(value => value === '');

  if (emptyValue === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'All fields must be filled out',
      timeout: 3000,
      position: 'topRight',
      messageColor: '#fff',
      titleColor: '#fff',
      backgroundColor: '#FFA500',
    });
    return;
  }

  createNewPost(formData)
    .then(post => {
      iziToast.success({
        title: 'Success',
        message: `${post.title} added successfully!`,
        timeout: 3000,
        position: 'topRight',
        messageColor: '#fff',
        titleColor: '#fff',
      });
      postForm.reset();

      renderPosts();

      console.log(post);
    })
    .catch(err => {
      console.log(err);
    });
};

const onDeleteBtnClick = event => {
  const deleteBtn = event.target.closest('button[data-delete]');

  if (deleteBtn === null) {
    return;
  }

  const postId = deleteBtn.dataset.postId;

  deletePostById(postId)
    .then(post => {
      iziToast.success({
        title: 'Success',
        message: `${post.title} successfully deleted!`,
        timeout: 3000,
        position: 'topRight',
      });
      renderPosts();
    })
    .catch(err => {
      console.log(err);
    });
};

refs.postForm.addEventListener('submit', onPostFotmSubmit);
refs.postList.addEventListener('click', onDeleteBtnClick);
