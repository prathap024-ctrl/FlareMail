//require('dotenv').config({path: "./env"})
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// import express from "express"
// const app = express()

// (async()=>{
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     app.on("error", (error)=>{
//       console.log("ERR: ", error);
//       throw error
//     })

//     app.listen(process.env.PORT, ()=>{
//       console.log(`APP is listening on Port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.error("ERROR: ", error)
//   }
// })()
