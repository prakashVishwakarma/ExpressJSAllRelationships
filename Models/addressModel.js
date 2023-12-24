import mongoose from "mongoose";

const address = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: String
},
    { timestamps: true }
);

const addressName = mongoose.model("AddressName", address);

export default addressName;
