const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerService = async (data) => {
  const { name, email, password, confirmPassword, role } = data;
  if (password !== confirmPassword) {
    throw new Error('Password do not match!');
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User with the email already exists!');
  }
  return await User.create({ name, email, password: hashedPassword, role });
};

const loginService = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Couldn't find the user!");
  }

  //comparing the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid Credentials!');
  }

  const token = jwt.sign(
    { id: user._id, name: user.name, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '10m' },
  );

  return { token, user };
};
module.exports = { registerService, loginService };
