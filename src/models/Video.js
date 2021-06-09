import mongoose from "mongoose";
import videoRouter from "../routers/videoRouter";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const video = mongoose.model("Video", videoSchema);
export default video;
