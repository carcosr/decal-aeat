import { userController } from "../user.controller";

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
