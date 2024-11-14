const model = require("../model/posts");
const Post = model.post;
// for creating the post
exports.createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// for the home page  we will select all instead of the official post
exports.getUnofficialPost = async (req, res) => {
  try {
    const posts = await Post.find({ createdBy: { $ne: "official" } });
    res.json(posts.reverse()).status(200);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// for the official page  we will select all  of the official post
exports.getOfficialPost = async (req, res) => {
  try {
    const posts = await Post.find({ createdBy: "official" });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
// get myPost only
exports.getMypost = async (req, res) => {
  try {
    const posts = await Post.find({ createdBy: "self" });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
//  for the searched post
exports.searchPost = async (req, res) => {
  const endpoint = req.params.city;
  const mode = endpoint.split("-")[1];
  const city = endpoint.split("-")[0];
  try {
    if (mode === "all") {
      const posts = await Post.find({ city: city });
      res.status(200).json(posts);
    } else if (mode === "official") {
      const posts = await Post.find({ city: city, createdBy: "official" });
      res.status(200).json(posts);
    } else if (mode === "unofficial") {
      const posts = await Post.find({
        city: city,
        createdBy: { $ne: "official" },
      });
      res.status(200).json(posts);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// this api is for the updation of the post specially made for the option of the like ro unlike and further it can also used as the post Updation
exports.updatePost = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Post.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(304).json(error);
  }
};
exports.deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const doc=await Post.findOneAndDelete({_id:id});
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
