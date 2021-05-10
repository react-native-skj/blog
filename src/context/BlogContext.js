import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET':
      return payload;
    case 'EDIT':
      return [...state].map((blogPost) => {
        return blogPost.id === payload.id ? payload : blogPost;
      });
    case 'DELETE':
      return state.filter((blog) => blog.id !== payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const { data } = await jsonServer.get('/blogposts');
    dispatch({ type: 'GET', payload: data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });

    if (callback) {
      callback();
    }
  };
};

const updateBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });

    dispatch({
      type: 'EDIT',
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);

    dispatch({ type: 'DELETE', payload: id });
  };
};

export const {
  Provider: BlogProvider,
  Context: BlogContext,
} = createDataContext(
  reducer,
  { getBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost },
  []
);
