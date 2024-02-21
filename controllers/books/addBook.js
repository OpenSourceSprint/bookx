const addBookController = async (req, res) => {
  return res
    .status(200)
    .json({ message: "Add new book to database from this route" });
};

module.exports = { addBookController };
