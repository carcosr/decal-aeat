import { Elysia } from "elysia";
import { healthRoutes } from "./features/health/health.route";
import { privateRoutes } from "./features/private/private.route";

export const app = new Elysia().use(healthRoutes).use(privateRoutes);
