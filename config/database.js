const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL);
    if (connection) {
      console.log("Successfully connected to database");
    }
    return { success: true, error: null };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
};

module.exports = { connectToDB };
