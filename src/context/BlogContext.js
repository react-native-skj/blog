import createDataContext from './createDataContext';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD':
      return [...state, { key: `${Date.now()}`, ...payload }];
    case 'EDIT':
      const newState = [...state];
      const editIndex = state.findIndex((s) => s.key === payload.id);
      newState[editIndex] = {
        ...newState[editIndex],
        ...payload.data,
      };
      return newState;
    case 'DELETE':
      return state.filter((blog, index) => index !== payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (payload) => {
    dispatch({ type: 'ADD', payload });
  };
};

const updateBlogPost = (dispatch) => {
  return (id, data) => {
    dispatch({ type: 'EDIT', payload: { id, data } });
  };
};

const deleteBlogPost = (dispatch) => {
  return (index) => {
    dispatch({ type: 'DELETE', payload: index });
  };
};

export const {
  Provider: BlogProvider,
  Context: BlogContext,
} = createDataContext(
  reducer,
  { addBlogPost, updateBlogPost, deleteBlogPost },
  []
);
