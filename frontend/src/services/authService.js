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
  return api.post('auth/register', {
    name,
    email,
    password,
    confirmPassword,
    role,
  });
};
