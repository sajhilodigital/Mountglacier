import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    await mongoose.connect(url);
    console.log("connect database successful.....");
  } catch (error) {
    console.log("db connection failed....");
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
