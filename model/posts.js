const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");

const postSchema = new Schema({
  p_img: { type: String, default: "userme", trim: true },
  username: { type: String, default: "Deepak_p" },
  time: {
    type: String,
    required: true,
    trime: true,
    default: moment(this.time).format("YYYY-MM-DD HH:mm"),
  },
  city: { type: String, required: true, trime: true },
  localaddress: { type: String, required: true, trime: true },
  zip: Number,
  latitude: Number,
  longitude: Number,
  title: String,
  body: String,
  createdBy: { type: String, default: "self" },
  liked: { type: Boolean, default: false },
});

exports.post = mongoose.model("post", postSchema);
