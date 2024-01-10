const port = 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());

//Database Connection with mongoGB

mongoose.connect(
  "mongodb+srv://sithumjeevantha:Sithum2000@cluster0.8ihmoek.mongodb.net/E_SHOPPING"
);

//API creation

app.get("/", (req, res) => {
  res.send("Hello World");
});

//=====================================================================================================================
//image storage engine

const storage = multer.diskStorage({
  destination: "./Upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

//image upload
const upload = multer({ storage: storage });

//-----------------------------------------------------------------------------------------------
//Create upload Endpoints for images
app.use("/images", express.static("/Upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:4000/images/${req.file.filename}`,
  });
});
//------------------------------------------------------------------------------------------

//=================================================================================================
//Schema for Products
const Product = mongoose.model("product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});
//=================================================================================================

app.post("/addProduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    id = products[products.length - 1].id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("product added");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//=================================================================================================

//Creating API for deleting a product
app.post("/deleteProduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//=================================================================================================

//Creating API for getting all products

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("all products gets");
  res.send(products);
});

//=================================================================================================
//
app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port: " + port);
  } else {
    console.log("Error: " + error);
  }
});
