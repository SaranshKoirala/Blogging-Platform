const {
  createBlogService,
  getBlogsService,
  getBlogService,
  getMyBlogsService,
} = require('../services/blogService');
const createBlogValidator = require('../validators/blogValidators');
const Blog = require('../models/Blog');

const getBlog = async (req, res) => {
  const blog = await getBlogService(req.params);
  res.status(200).json({ success: true, message: 'Blog found', data: blog });
};

const getBlogs = async (req, res) => {
  const blogs = await getBlogsService(req);

  res.status(200).json({
    success: true,
    message: 'Blogs fetched sucessfully!',
    data: blogs,
    lenght: blogs.length,
  });
};

const createBlog = async (req, res) => {
  createBlogValidator(req);

  const blog = await createBlogService(req);
  res
    .status(201)
    .json({ success: true, data: blog, message: 'Blog created sucessfully' });
};

const getMyBlogs = async (req, res) => {
  const userId = req.user.id || req.user._id;
  const myBlogs = await getMyBlogsService(userId);
  res.status(200).json({
    success: true,
    message: 'My blogs fetched sucessfully.',
    data: myBlogs,
  });
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findOne({ _id: blogId });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    await blog.deleteOne();

    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

module.exports = { getBlogs, createBlog, getBlog, getMyBlogs, deleteBlog };
