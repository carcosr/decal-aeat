import type { User } from "./user.model";

export const userDb: User[] = [];

export const seedUsers = () => {
  userDb.push({ id: 1, name: "Juan" }, { id: 2, name: "Ana" }, { id: 3, name: "Sergio" });
};
