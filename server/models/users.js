import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  fullname: {  
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique : true
  },
  password: {
    type: String,
    required: true,
  },
});

const usersModel = mongoose.model("users", usersSchema);

export default usersModel;
