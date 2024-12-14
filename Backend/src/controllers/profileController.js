const db = require('../models/index.js'); 
const Signup = db.signup; // Adjusted to match Sequelize initialization

// Get Profile by Email
exports.getProfile = async (req, res) => {
  const { email } = req.params; // Extract email from the URL params

  try {
    // Fetch profile using Sequelize's findOne method
    const profile = await Signup.findOne({
      where: { stud_email: email }, // Match email field from the model
      attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, // Optional: Exclude unnecessary fields
    });

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


