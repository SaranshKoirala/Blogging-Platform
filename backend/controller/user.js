const User = require('../models/User');

const users = async (req, res) => {
  try {
    const users = await User.find().select(
      'name email role createdAt updatedAt'
    );
    if (!users) {
      return res.status(404).json({ message: 'No user available!' });
    }
    const length = await User.countDocuments();
    res.status(200).json({ message: 'success', length, users });
  } catch (error) {
    res.status(500).json({ message: "Couldn't fetch the user" });
  }
};

module.exports = users;
