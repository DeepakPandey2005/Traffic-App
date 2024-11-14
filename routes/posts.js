const express = require("express");
const router = express.Router();
const {
  createPost,
  getOfficialPost,
  getUnofficialPost,
  getMypost,
  searchPost,
  updatePost,
  deletePost,
} = require("../controller/posts");

router
  .get("/", getUnofficialPost)
  .get("/official", getOfficialPost)
  .get("/myPost", getMypost)
  .get("/search/:city", searchPost)
  .post("/", createPost)
  .patch("/:id", updatePost)
  .delete("/:id", deletePost);

exports.router = router;
