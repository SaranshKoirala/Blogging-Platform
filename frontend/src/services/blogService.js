import api from './api';

export const fetchBlogs = (page = 1) => {
  return api.get(`/blogs?page=${page}`);
};

export const fetchBlogBySlug = (slug) => {
  return api.get(`/blogs/${slug}`);
};
