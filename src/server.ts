import Fastify from "fastify";
import usersRoutes from "./routes/users.route";

const app = Fastify({
  logger: true,
});

app.register(usersRoutes, { prefix: "/users" });

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("API corriendo en http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
