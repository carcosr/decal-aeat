import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { booksController } from "./books.controller";

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "Book API",
          description: "A simple API to manage books",
          version: "1.0.0",
        },
      },
    }),
  )
  .get("/", () => "Welcome to the Book API!. Visit http://localhost:3000/swagger for API documentation.")
  .use(booksController)
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
