import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddlewares.js";

dotenv.config();
connectDb();

const app = express();

app.get("/", (req, res) => {
  res.send("api is running");
});



app.use("/api/product", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
