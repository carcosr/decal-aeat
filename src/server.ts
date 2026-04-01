import Fastify from "fastify";

export const server = Fastify({
  logger: true,
});

// Ruta básica
server.get("/", async (request, reply) => {
  return { message: "Bienvenido a la API" };
});

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
