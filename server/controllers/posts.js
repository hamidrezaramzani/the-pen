import _ from "lodash";
import Posts from "../models/posts.js";
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

export { newPost };
