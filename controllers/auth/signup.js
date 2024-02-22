const bcrypt = require('bcryptjs');
const User = require('./models/User.js');

const signupController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user with the email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save();

    // Return success response
    return res.status(200).json({
      message: "User signed up successfully",
      user: {
        firstName,
        lastName,
        email
      }
    });
  } catch (error) {
    console.error("Error while signing up user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { signupController };
