const deleteBookController = async (req, res) => {
  return res.status(200).json({ message: "Delete a book" });
};

module.exports = { deleteBookController };
