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
  tags: [{ type: Object }],
  cover: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const postsModel = mongoose.model("posts", postsSchema);

export default postsModel;
