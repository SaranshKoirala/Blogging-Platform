import api from './api';

export const loginUser = (email, password) => {
  return api.post('/auth/login', {
    email,
    password,
  });
};

export const signupUser = (
  name,
  email,
  password,
  confirmPassword,
  role = 'user',
) => {
  return api.post('/auth/register', {
    name,
    email,
    password,
    confirmPassword,
    role,
  });
};

export const fetchUsers = (token) => {
  return api.get('/auth/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteUser = (id, token) => {
  return api.delete(`/auth/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
