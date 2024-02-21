const getBookByIdController = async (req, res) => {
  return res.status(200).json({ message: "Return a book by its id" });
};

module.exports = { getBookByIdController };
