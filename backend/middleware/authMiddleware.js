const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: 'No token, authorization denied!' });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      next();
      console.log(req.user);
    } catch (error) {
      res.status(400).json({ message: "Token isn't valid!" });
    }
  }
};

module.exports = verifyToken;
