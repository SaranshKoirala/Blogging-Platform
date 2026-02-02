const express = require('express');
const { register, login } = require('../controller/authController');
const roleMiddleware = require('../middleware/roleMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const { users, deleteUser } = require('../controller/userController');
const asyncHandler = require('../middleware/asyncMiddleware');
const router = express.Router();

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));

router.get('/users', authMiddleware, roleMiddleware('admin'), users);
router.delete(
  '/users/:id',
  authMiddleware,
  roleMiddleware('admin'),
  deleteUser,
);

module.exports = router;
