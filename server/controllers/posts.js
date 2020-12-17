const newPost = async () => {
  try {
    console.log("new  post");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
    });
  }
};

export { newPost };
