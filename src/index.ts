import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { typeDefs } from "./graphql/typeDefs.js";
const server = new ApolloServer({
  typeDefs,
});
dotenv.config();
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("db connected"));

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port");
