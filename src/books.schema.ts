import { z } from "zod";

export const BookSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  author: z.string().min(1),
  year: z.number().int().min(0),
});

export type Book = z.infer<typeof BookSchema>;

export const CreateBookSchema = BookSchema.omit({ id: true });
export const UpdateBookSchema = BookSchema.partial();
