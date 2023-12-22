import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";
import { connecterDb } from "./config/db.js";
import userRouter from "./routes/user.js";
import cors from "cors";

config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors()); // Use the cors middleware to handle CORS headers

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", userRouter);

connecterDb()
  .then(() => {
    app.listen(3000, () => {
      console.log("server en marche");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });


