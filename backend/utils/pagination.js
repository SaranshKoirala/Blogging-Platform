const pagination = async (model, page, category) => {
  const filter = {};
  const LIMIT = 10;
  const skip = (page - 1) * 10;

  if (category) {
    filter.category = category;
  }

  const total = await model.countDocuments(filter);

  const data = await model
    .find(filter)
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
