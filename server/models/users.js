import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usersModel = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const usersModel = mongoose.model("users", usersModel);

export default usersModel;
