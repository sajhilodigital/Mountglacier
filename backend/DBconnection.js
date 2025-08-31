import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = `mongodb+srv://tour:tour123@pramod.49wcu.mongodb.net/Mountglacier?retryWrites=true&w=majority&appName=pramod`;
    await mongoose.connect(url);
    console.log("connect database successful.....");
  } catch (error) {
    console.log("db connection failed....");
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
