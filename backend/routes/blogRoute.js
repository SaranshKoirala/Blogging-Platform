const express = require('express');
const {
  getBlogs,
  createBlog,
  getBlog,
} = require('../controller/blogController');
const asyncHandler = require('../middleware/asyncMiddleware');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:slug', asyncHandler(getBlog));
router.get('/', asyncHandler(getBlogs));
router.post(
  '/',
  authMiddleware,
  upload.single('image'),
  asyncHandler(createBlog),
);

module.exports = router;
