import { getAllPosts, createNewPost, deletePostById } from './js/mockapi';
import { createPostCartTemplate } from './js/render-function';
import iziToast from 'izitoast';

const refs = {
  postList: document.querySelector('.js-posts-list'),
  postForm: document.querySelector('.js-post-form'),
};

const renderPosts = async () => {
  try {
    const { data: posts } = await getAllPosts();

    const postTemplate = posts
      .map(post => createPostCartTemplate(post))
      .join(' ');

    refs.postList.innerHTML = postTemplate;
  } catch (err) {
    console.log(err);
  }
};
renderPosts();

const onPostFormSubmit = async event => {
  try {
    event.preventDefault();

    const { currentTarget: postForm } = event;
    const { post_title, post_body } = postForm.elements;

    const formData = {
      title: post_title.value.trim(),
      body: post_body.value.trim(),
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

    const { data: post } = await createNewPost(formData);
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
  } catch (err) {
    console.log(err);
  }
};

const onDeleteBtnClick = async event => {
  try {
    const deleteBtn = event.target.closest('button[data-delete]');

    if (deleteBtn === null) {
      return;
    }

    const postId = deleteBtn.dataset.postId;

    const { data: post } = await deletePostById(postId);
    iziToast.success({
      title: 'Success',
      message: `${post.title} successfully deleted!`,
      timeout: 3000,
      position: 'topRight',
    });
    renderPosts();
  } catch (err) {
    console.log(err);
  }
};

refs.postForm.addEventListener('submit', onPostFormSubmit);
refs.postList.addEventListener('click', onDeleteBtnClick);
