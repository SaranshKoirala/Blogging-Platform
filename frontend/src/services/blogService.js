import api from './api';

export const fetchBlogs = ({ page = 1, category, search } = {}) => {
  const params = new URLSearchParams();
  params.append('page', page);

  if (search) {
    params.append('search', search);
  }

  if (category) {
    params.append('category', category);
  }

  return api.get(`/blogs?${params.toString()}`);
};

export const fetchBlogBySlug = (slug) => {
  return api.get(`/blogs/${slug}`);
};

export const fetchMyBlogs = (token) => {
  return api.get('/blogs/my', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createBlog = (token, formData) => {
  return api.post(`/blogs`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
