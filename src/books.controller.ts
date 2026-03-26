import { Elysia, t } from "elysia";
import { booksDB } from "./db";
import { CreateBookSchema, UpdateBookSchema } from "./books.schema";

export const booksController = new Elysia({ prefix: "/books" })
  // Get all books
  .get("/", () => booksDB)

  // Get a book by ID
  .get(
    "/:id",
    ({ params }) => {
      const book = booksDB.find((b) => b.id === Number(params.id));
      return book ?? { error: "Book not found" };
    },
    {
      params: t.Object({ id: t.Numeric() }),
    },
  )

  // Create a new book
  .post(
    "/",
    ({ body }) => {
      const newBook = { id: booksDB.length + 1, ...body };
      booksDB.push(newBook);
      return newBook;
    },
    {
      body: CreateBookSchema,
    },
  )

  // Update a book by ID
  .patch(
    "/:id",
    ({ params, body }) => {
      const index = booksDB.findIndex((b) => b.id === Number(params.id));
      if (index === -1) return { error: "Book not found" };

      console.log("libro bbdd antes: ", booksDB[index]);
      booksDB[index].id = booksDB[index].id;
      /*
      const book = booksDB.find((b) => b.id === Number(params.id));
      console.log("libro leido: ", book);
      if (!book) return { error: "Book not found" };

      // book.title = body.title ?? book.title;
      // book.author = body.author ?? book.author;
      // book.year = body.year ?? book.year;
      const updatedBook = { ...book, ...body };
      booksDB[book.id] = updatedBook;

      return updatedBook;
      */

      return index;
    },
    {
      params: t.Object({ id: t.Numeric() }),
      body: UpdateBookSchema,
    },
  )

  // Delete a book by ID
  .delete(
    "/:id",
    ({ params }) => {
      const index = booksDB.findIndex((b) => b.id === Number(params.id));
      if (index === -1) return { error: "Book not found" };

      const deleted = booksDB.splice(index, 1)[0];
      return deleted;
    },
    {
      params: t.Object({ id: t.Numeric() }),
    },
  );
