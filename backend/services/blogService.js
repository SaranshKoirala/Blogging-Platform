const generateSlug = require('../utils/slugUtils');
const pagination = require('../utils/pagination');
const Blog = require('../models/Blog');

const createBlogService = async (req) => {
  const slug = generateSlug(req.body.title);
  const userId = req.user.id;
  const path = req.file.path;

  const exists = await Blog.findOne({ slug });
  if (exists) {
    throw new Error('Blog with same title already exists!');
  }
  return await Blog.create({ ...req.body, image: path, slug, author: userId });
};

const getBlogsService = async (req) => {
  const blogs = await pagination(Blog, req, { path: 'author', select: 'name' });

  if (blogs.length == 0) {
    throw new Error('No Blogs found!');
  }

  return blogs;
};

const getBlogService = async (data) => {
  const { slug } = data;
  const blog = await Blog.findOne({ slug }).populate('author', 'name email');
  if (!blog) {
    throw new Error("Blog isn't found!");
  }
  return blog;
};

const getMyBlogsService = async (id) => {
  const myBlogs = await Blog.find({ author: id }).sort({ createdAt: -1 });
  return myBlogs;
};

module.exports = {
  createBlogService,
  getBlogsService,
  getBlogService,
  getMyBlogsService,
};
