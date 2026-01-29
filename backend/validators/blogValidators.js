const createBlogValidator = async (data) => {
  const { title, content } = data.body;
  const file = data.file;
  if (!title || !content) {
    throw new Error('Please fill out the form!');
  }
  if (!file) {
    throw new Error('Image is required!');
  }
};

module.exports = createBlogValidator;
