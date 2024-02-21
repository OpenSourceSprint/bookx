const loginController = async (req, res) => {
  return res.status(200).json({ message: "Login route" });
};

module.exports = { loginController };
