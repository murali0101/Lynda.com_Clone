const mongoose = require("mongoose");

const css_postSchema = new mongoose.Schema(
  {
    img: { type: String, required: false },
    title: { type: String, required: false },
    creater: { type: String, required: false },
    level: { type: String, required: false },
    date: { type: String, required: false },
    decription: { type: String, required: false },
    no_learner: { type: String, required: false },
    video_link: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const CssPost = mongoose.model("html_post", css_postSchema);
module.exports = CssPost;
