import { Elysia } from "elysia";
import { getHealth } from "./health.controller";

export const healthRoutes = new Elysia({ prefix: "/health" }).get("/", () => getHealth());
