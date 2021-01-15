import _ from "lodash";
import Posts from "../models/posts.js";
import moment from "moment";
const newPost = async (req, res) => {
  try {
    const { body, files } = req;

    let filename = "";
    if (files) {
      filename += Math.ceil(Math.random() * 9999999) + files.cover.name;
      files.cover.mv("public/covers/" + filename);
    }

    body.cover = filename;
    body.tags = JSON.parse(body.tags);
    body.createAt = new moment().unix();
    const newPost = new Posts(body);
    await newPost.save();
    res.status(200).json({
      message: "Post Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
    });
  }
};

const postsByUserId = async (req, res) => {
  try {
    const { userid } = req.params;
    const posts = await Posts.find({ user_id: userid }).populate("user_id");
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
    });
  }
};

const posts = async (req, res) => {
  try {
    const posts = await Posts.find({})
      .populate("user_id")
      .sort({ createAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
    });
  }
};

const postSlides = async (req, res) => {
  try {
    const posts = await Posts.find({ cover: { $ne: "" } })
      .populate("user_id")
      .limit(3);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
    });
  }
};

const deleteUserPost = async (req, res) => {
  try {
    const { id, userid } = req.params;
    await Posts.findByIdAndRemove({ _id: id, user_id: userid });
    res.status(200).json({
      removePost: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
    });
  }
};

export { newPost, posts, postsByUserId, postSlides, deleteUserPost };
