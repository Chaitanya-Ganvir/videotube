import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => console.log("Server started"));
  })
  .catch((err) => console.log(err));

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("Error occurred");
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("Database connected");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// })();
