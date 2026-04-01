import type { User } from "./user.model";
import { userDb } from "./db";

class UserController {
  constructor() {}

  async create(req, res) {
    try {
      const user: User = req.body;
      if (user) {
        userDb.push(user);
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
