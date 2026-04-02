import Fastify from "fastify";
import { routes } from "./routes/routes";
//import cors from "@fastify/cors";

export const server = Fastify({
  logger: true,
});

// await server.register(cors, {
//   origin: "*",
// });

// Ruta básica
server.get("/", async (request, reply) => {
  return { message: "Bienvenido a la API" };
});

// Registro de rutas
server.register(routes);

// Incorporación de las rutas
//routes.forEach((route) => {
//  server.route(route);
//});

/*
import usersRoutes from "./routes/users.route";


app.register(
  async function (api) {
    api.register(usersRoutes, { prefix: "/users" });
  },
  { prefix: "/api" },
);

const port = Number(process.env.PORT) || 3000;

const start = async () => {
  try {
    await app.listen({
      port,
      host: "0.0.0.0", // IMPORTANTE para Azure
    });

    console.log(`API corriendo en http://0.0.0.0:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
*/
