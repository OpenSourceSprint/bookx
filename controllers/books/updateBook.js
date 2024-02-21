const updateBookController = async (req, res) => {
  return res.status(200).json({ message: "update details of book" });
};

module.exports = { updateBookController };
