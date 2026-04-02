import type { User } from "./user.model.js";

let users: User[] = [];

export const userDb = {
  getAll: () => users,

  getById: (id: number): User | undefined => users.find((user) => user.id === id),

  create: (user: User) => {
    users.push(user);
    return user;
  },

  update: (id: number, name: string): User | undefined => {
    const user = users.find((id) => user.id === id);
    if (!user) return null;

    user.name = name;
    return user;
  },

  delete: (id: number): boolean => {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
  },
};

export const seedUsers = () => {
  users.push({ id: 1, name: "Juan" }, { id: 2, name: "Ana" }, { id: 3, name: "Sergio" });
};
