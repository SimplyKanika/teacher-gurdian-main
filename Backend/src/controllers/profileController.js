const Signup = require('../models/signup.model');

exports.getProfile = async (req, res) => {
  const { email } = req.params; // Extract email from the URL params

  try {
    const profile = await Signup.getProfileByEmail(email);

    if (profile) {
      res.status(200).json(profile);
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

