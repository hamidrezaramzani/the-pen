import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postsSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [{ type: String }],
  status: {
    type: Boolean,
    default: true,
  },
});

const postsModel = mongoose.model("posts", postsSchema);

export default postsModel;
