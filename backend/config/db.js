import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log("connect database ran");
    const conn = await mongoose.connect(
      process.env.MONGO_URI,

      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log("catch:::", err);
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDb;
