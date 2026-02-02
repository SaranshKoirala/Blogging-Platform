const express = require('express');
const {
  getBlogs,
  createBlog,
  getBlog,
  getMyBlogs,
  deleteBlog,
} = require('../controller/blogController');
const asyncHandler = require('../middleware/asyncMiddleware');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/my', authMiddleware, asyncHandler(getMyBlogs));
router.get('/:slug', asyncHandler(getBlog));
router.get('/', asyncHandler(getBlogs));
router.post(
  '/',
  authMiddleware,
  upload.single('image'),
  asyncHandler(createBlog),
);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteBlog);
module.exports = router;
