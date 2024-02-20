import mongoose from "mongoose";
export const connectiondb=()=>{
    mongoose
  .connect(process.env.Mongo_url, {
    dbName: "Backendapi",
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });
}