const pagination = async (model, page) => {
  const LIMIT = 10;
  const skip = (page - 1) * 10;

  const total = await model.countDocuments();

  const data = await model
    .find()
    .skip(skip)
    .limit(LIMIT)
    .sort({ createdAt: -1 });

  return {
    data,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(total / LIMIT),
    },
  };
};

module.exports = pagination;
