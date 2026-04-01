import Fastify from "fastify";
import { server } from "./server.js";

// Puerto y arranque
const start = async () => {
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log("Servidor corriendo en http://localhost:3000");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
