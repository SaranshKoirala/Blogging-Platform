const User = require('../models/User');
const {
  registerValidator,
  loginValidator,
} = require('../validators/authValidators');
const { registerService, loginService } = require('../services/authService');

const register = async (req, res) => {
  registerValidator(req.body);
  const user = await registerService(req.body);
  res
    .status(201)
    .json({ success: true, message: 'User is created', data: user });
};

const login = async (req, res) => {
  loginValidator(req.body);
  const token = await loginService(req.body);
  res.status(200).json({
    token,
  });
};

module.exports = { register, login };
