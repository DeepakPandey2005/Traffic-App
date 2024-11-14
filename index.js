const express = require("express");
require('dotenv').config()
const path=require('path')
const fs=require('fs')
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const { router } = require("./routes/posts");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));

main().catch((err) => console.log(err));
async function main() {
  mongoose.connect( "mongodb+srv://DeepakP05:3QDOpLhvT6DxPkiO@cluster0.yhzmu.mongodb.net/Traffic_app ");
}


app.use("/posts", router);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'dist','index.html'))
})
