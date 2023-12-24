import mongoose from "mongoose";

const myUserModel = new mongoose.Schema({
    name: String,
    age: Number,
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AddressName'
    }
},
    { timestamps: true }
);

const myUserModelName = mongoose.model("MyUserModelName", myUserModel);

export default myUserModelName;
