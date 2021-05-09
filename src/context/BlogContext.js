import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    { title: 'Blog Post #1' },
    { title: 'Blog Post #2' },
  ]);

  const addBlogPost = () => {
    setBlogPosts((prev) => [
      ...prev,
      { title: `Blog Post #${prev.length + 1}` },
    ]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
