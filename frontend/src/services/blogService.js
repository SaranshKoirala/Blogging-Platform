import api from './api';

export const fetchBlogs = ({ page = 1, category } = {}) => {
  const params = new URLSearchParams();
  params.append('page', page);

  if (category) {
    params.append('category', category);
  }

  return api.get(`/blogs?${params.toString()}`);
};

export const fetchBlogBySlug = (slug) => {
  return api.get(`/blogs/${slug}`);
};
