import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/auth-routes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Server is connected at ${process.env.PORT}`))
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));

app.use((err, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Somthing Went Wrong!!";
  return res.status(status).json({
    status: false,
    status,
    message,
  });
});
