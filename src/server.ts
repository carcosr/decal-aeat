import Fastify from "fastify";
import usersRoutes from "./routes/users.route";

const app = Fastify({
  logger: true,
});

app.register(usersRoutes, { prefix: "/users" });

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
