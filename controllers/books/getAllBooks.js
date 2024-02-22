const Book = require('./models/Book');

const getAllBooksController = async (req, res) => {
  try {
    // Fetch all books from the database
    const books = await Book.find();

    // Return the fetched books in the response
    return res.status(200).json({
      status: 200,
      message: "Books fetched successfully",
      books: books
    });
  } catch (error) {
    console.error("Error while fetching books:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllBooksController };
