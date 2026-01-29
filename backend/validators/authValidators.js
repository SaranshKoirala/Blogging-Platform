const registerValidator = (data) => {
  const { name, email, password, confirmPassword, role } = data;
  if (!name || !email || !password || !confirmPassword || !role) {
    throw new Error('Please fill out the form!');
  }
};

const loginValidator = (data) => {
  const { email, password } = data;
  if (!email || !password) {
    throw new Error('Please fill out the form!');
  }
};

module.exports = { registerValidator, loginValidator };
