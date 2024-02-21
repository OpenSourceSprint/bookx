const getAllBooksController = async (req, res) => {
  return res.status(200).json({ message: "Return all books from database" });
};

module.exports = { getAllBooksController };
