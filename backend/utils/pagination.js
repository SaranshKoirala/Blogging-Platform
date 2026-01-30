const pagination = async (model, req) => {
  const page = Number(req.query.page) || 1;
  const filter = {};
  const LIMIT = 10;
  const skip = (page - 1) * 10;

  const { category, search } = req.query;

  if (category) {
    filter.category = category;
  }

  if (filter) {
    filter.title = { $regex: search, $options: 'i' };
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
