import { FastifyReply, FastifyRequest } from "fastify";

let users = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Ana" },
];

export const getUsers = async (req: FastifyRequest, reply: FastifyReply) => {
  reply.send(users);
};

export const createUser = async (req: FastifyRequest<{ Body: { name: string } }>, reply: FastifyReply) => {
  const { name } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);

  reply.code(201).send(newUser);
};
