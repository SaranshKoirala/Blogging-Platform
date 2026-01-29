const express = require('express');
const { register, login } = require('../controller/authController');
const roleMiddleware = require('../middleware/roleMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const users = require('../controller/user');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

//routes to check the permisson
router.get(
  '/users',
  authMiddleware,
  roleMiddleware('admin', 'user'),
  (req, res) => {
    res.send('Welcome User');
  }
);
router.get('/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
  res.send('Welcome Admin');
});

router.get('/', users);

module.exports = router;
