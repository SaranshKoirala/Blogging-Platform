const Blog = require('../models/Blog');
const {
  createBlogService,
  getBlogsService,
  getBlogService,
} = require('../services/blogService');

const getBlog = async (req, res) => {
  const blog = await getBlogService(req.params);
  res.status(200).json({ success: true, message: 'Blog found', data: blog });
};

const getBlogs = async (req, res) => {
  const blogs = await getBlogsService();

  res.status(200).json({
    success: true,
    message: 'Blogs fetched sucessfully!',
    data: blogs,
    lenght: blogs.length,
  });
};

const createBlog = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res
      .status(400)
      .json({ success: false, message: 'Please fill every field.' });
  }

  const blog = await createBlogService(req.body);
  res
    .status(201)
    .json({ success: true, data: blog, message: 'Blog created sucessfully' });
};

module.exports = { getBlogs, createBlog, getBlog };
