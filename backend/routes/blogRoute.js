const express = require('express');
const {
  getBlogs,
  createBlog,
  getBlog,
} = require('../controller/blogController');
const asyncHandler = require('../middleware/asyncMiddleware');
const router = express.Router();

router.get('/:slug', asyncHandler(getBlog));
router.get('/', asyncHandler(getBlogs));
router.post('/', asyncHandler(createBlog));

module.exports = router;
