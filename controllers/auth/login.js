const jwt = require('jsonwebtoken');

const loginController = async (req, res) => {
  // Assuming you have a function to authenticate the user
  const { email, password } = req.body;

  // Checking email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  // Check if email and password are valid (Authenticate the user)
  if (email !== "jhon@example.com" || password !== "password123") {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  // User is authenticated, generate JWT token
  const user = {
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhon@example.com"
  };

  const accessToken = jwt.sign(user, 'your_secret_key_here', { expiresIn: '1h' });

  // Return the token along with the success message
  return res.status(200).json({
    message: "User logged in successfully",
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      accessToken: accessToken
    }
  });
};

module.exports = { loginController };
