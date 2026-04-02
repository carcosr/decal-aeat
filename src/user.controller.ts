import { FastifyRequest, FastifyReply } from "fastify";
import type { User } from "./user.model";
import { userDb } from "./db";

// Get all users
export const getUsers = async (req: FastifyRequest, res: FastifyReply) => {
  return res.status(200).send({ status: true, users: userDb.getAll() });
};

// Get user by ID
export const getUserById = async (req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply) => {
  const user = userDb.getById(parseInt(req.params.id));
  if (!user) {
    return res.status(404).send({ status: false, message: "User not found" });
  }

  return res.status(200).send({ status: true, user });
};

// Create new user
export const createUser = async (req: FastifyRequest<{ Body: User }>, res: FastifyReply) => {
  const user = req.body;
  if (!user || !user.name || !user.id) {
    return res.status(400).send({ status: false, message: "Invalid user data" });
  }

  userDb.create(user);
  return res.status(201).send({ status: true, user });
};

// Update user
export const updateUser = async (req: FastifyRequest<{ Params: { id: string }; Body: User }>, res: FastifyReply) => {
  const id = parseInt(req.params.id);
  const user = req.body;

  const dbuser = userDb.update(id, user.name);
  if (!dbuser) {
    return res.status(404).send({ status: false, message: "User not found" });
  }

  return res.status(200).send({ status: true, user: dbuser });
};

// Delete user

export const deleteUser = async (req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply) => {
  const deleted = userDb.delete(parseInt(req.params.id));
  if (!deleted) {
    return res.status(404).send({ status: false, message: "User not found" });
  }

  return res.status(200).send({ status: true, message: "User deleted" });
};

/*
class UserController {
  constructor() {}

  async create(req, res) {
    try {
      const user: User = req.body;
      if (user) {
        userDb.create(user);
        res.status(200).send({ status: true, user });
      }
    } catch (error) {
      res.status(500).send({ status: false, error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      res.status(201).send({ status: true, users: userDb });
    } catch (error) {
      res.status(500).send({ status: false, error: error.message });
    }
  }
}

export const userController = new UserController();
*/
