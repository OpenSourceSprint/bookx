const signupController = async (req, res) => {
  return res.status(200).json({ message: "Signup route" });
};

module.exports = { signupController };
