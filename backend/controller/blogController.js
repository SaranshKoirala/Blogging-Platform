const Blog = require('../models/Blog');
const {
  createBlogService,
  getBlogsService,
  getBlogService,
} = require('../services/blogService');
const createBlogValidator = require('../validators/blogValidators');

const getBlog = async (req, res) => {
  const blog = await getBlogService(req.params);
  res.status(200).json({ success: true, message: 'Blog found', data: blog });
};

const getBlogs = async (req, res) => {
  const page = Number(req.query.page) || 1;

  const blogs = await getBlogsService(page);

  res.status(200).json({
    success: true,
    message: 'Blogs fetched sucessfully!',
    data: blogs,
    lenght: blogs.length,
  });
};

const createBlog = async (req, res) => {
  createBlogValidator(req);

  const blog = await createBlogService(req.body, req.file);
  res
    .status(201)
    .json({ success: true, data: blog, message: 'Blog created sucessfully' });
};

module.exports = { getBlogs, createBlog, getBlog };
