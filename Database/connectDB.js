import mongoose from "mongoose";

const connectDb = () => {
  try {
    let connectionString = 'mongodb+srv://prakash-altas:atlas-password@cluster0.fvhgsjf.mongodb.net/expressjsallrelationships?retryWrites=true&w=majority';

    if (!connectionString) {
      throw new Error("Connection string is giving undefined");
    }

    return mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
