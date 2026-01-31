const pagination = async (model, req, populateOptions = null) => {
  const page = Number(req.query.page) || 1;
  const filter = {};
  const LIMIT = 10;
  const skip = (page - 1) * 10;

  const { category, search } = req.query;

  if (category) {
    filter.category = category;
  }

  if (search) {
    filter.title = { $regex: search, $options: 'i' };
  }

  let query = model.find(filter);

  if (populateOptions) {
    query = query.populate(populateOptions);
  }

  const total = await model.countDocuments(filter);

  const data = await query.skip(skip).limit(LIMIT).sort({ createdAt: -1 });

  return {
    data,
    hasMore: skip + data.length < total,
  };
};

module.exports = pagination;
