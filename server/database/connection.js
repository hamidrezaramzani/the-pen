import mongoose from "mongoose";
import config from "config";
mongoose.connect(config.get("MONGODB_URI"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex : true
});

export default mongoose;
