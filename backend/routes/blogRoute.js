const express = require('express');
const {
  getBlogs,
  createBlog,
  getBlog,
  getMyBlogs,
} = require('../controller/blogController');
const asyncHandler = require('../middleware/asyncMiddleware');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/my', authMiddleware, asyncHandler(getMyBlogs));
// router.get('/:userId/blogs', authMiddleware, asyncHandler(getUserBlogs))
router.get('/:slug', asyncHandler(getBlog));
router.get('/', asyncHandler(getBlogs));
router.post(
  '/',
  authMiddleware,
  upload.single('image'),
  asyncHandler(createBlog),
);
module.exports = router;
