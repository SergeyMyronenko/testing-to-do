import { connect } from "mongoose";
import { app } from "./app.js";
import "dotenv/config";

const { DB_HOST, PORT } = process.env;

const startServer = async () => {
  try {
    await connect(DB_HOST);
    app.listen(PORT, () => {
      console.log(`Startin on port: ${PORT}`);

      console.log("DATABASE succsesfully start!");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
