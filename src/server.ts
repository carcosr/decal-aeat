import fastify from "fastify";

const server = fastify({ logger: true });

server.get("/", async () => {
  return { message: "API funcionando 🚀" };
});

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3000;
    await server.listen({ port, host: "0.0.0.0" });
    console.log(`Servidor corriendo en puerto ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
