import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import adidas_products from "./data/new_data.js";
import nike_products from "./data/nike_products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProductsNike = nike_products.map((product) => {
      return { ...product, user: adminUser };
    });
    const sampleProductsAdidas = adidas_products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProductsNike);
    await Product.insertMany(sampleProductsAdidas);

    console.log("Data Imported");
    process.exit();
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
