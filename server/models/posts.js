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
  description: {
    type: String,
    required: true,
  },
  tags: [{ type: Object }],
  cover: {
    type: String,
    default: null,
  },
  createAt: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
});

const postsModel = mongoose.model("posts", postsSchema);

export default postsModel;
