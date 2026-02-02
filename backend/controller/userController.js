const User = require('../models/User');

const users = async (req, res) => {
  try {
    const users = await User.find().select(
      'name email role createdAt updatedAt',
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

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.deleteOne();

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

module.exports = { users, deleteUser };
