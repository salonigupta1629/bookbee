// import mongoose from "mongoose";

// const DbConnect = function(){
//     try{
// mongoose.connect(process.env.MONGODB_URI)
//     }
//     catch(error){
// console.error("Database connection failed",error);
// process.exit(1);
//     }
// }

// export default DbConnect;





import mongoose from 'mongoose';

const DbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return; // Already connected
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
  } catch (err) {
    console.error("Error connecting to database:", err);
    throw new Error("Failed to connect to database");
  }
};

export default DbConnect;
