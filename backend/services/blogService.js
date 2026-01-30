const generateSlug = require('../utils/slugUtils');
const pagination = require('../utils/pagination');
const Blog = require('../models/Blog');

const createBlogService = async (data, file) => {
  const slug = generateSlug(data.title);

  const exists = await Blog.findOne({ slug });
  if (exists) {
    throw new Error('Blog with same title already exists!');
  }
  return await Blog.create({ ...data, image: file.path, slug });
};

const getBlogsService = async (req) => {
  const blogs = await pagination(Blog, req);

  if (blogs.length == 0) {
    throw new Error('No Blogs found!');
  }

  return blogs;
};

const getBlogService = async (data) => {
  const { slug } = data;
  const blog = await Blog.findOne({ slug });
  if (!blog) {
    throw new Error("Blog isn't found!");
  }
  return blog;
};

module.exports = { createBlogService, getBlogsService, getBlogService };
