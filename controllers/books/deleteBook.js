const Book = require('../../models/Book'); // Assuming you have a Book model

const deleteBookController = async (req, res) => {
  try {
    // Extract book ID from request parameters
    const { id } = req.params;

    // Find the book by ID and delete it
    const deletedBook = await Book.findByIdAndDelete(id);

    // Check if the book exists
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Return success message
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error while deleting book:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { deleteBookController };

