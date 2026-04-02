import { FastifyInstance } from "fastify";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../user.controller.js";

export async function routes(fastify: FastifyInstance) {
  fastify.get("/users", getUsers);
  fastify.get("/users/:id", getUserById);
  fastify.post("/users", createUser);
  fastify.put("/users/:id", updateUser);
  fastify.delete("/users/:id", deleteUser);
}

/*
export const routes = [
  {
    method: "POST",
    url: "/users",
    handler: userController.create,
  },
  {
    method: "GET",
    url: "/users",
    handler: userController.getAll,
  },
  {
    method: "PUT",
    url: "/usuarios/:id",
    handler: async (req, res) => {
      res.status(200).send({ status: "OK - PUT" });
    },
  },
  {
    method: "DELETE",
    url: "/usuarios/:id",
    handler: async (req, res) => {
      res.status(200).send({ status: "OK - DELETE" });
    },
  },
];
*/
