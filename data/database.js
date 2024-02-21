import mongoose from "mongoose";
export const connectiondb=()=>{
    mongoose
  .connect(process.env.Mongo_url, {
    dbName: "Backendapi",
  })
  .then((c) => {
    console.log(`Database Connected with ${c.connection.host}`);
  })
  .catch((e) => {
    console.log(e);
  });
}