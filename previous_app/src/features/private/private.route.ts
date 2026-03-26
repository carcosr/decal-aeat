import { Elysia } from "elysia";
import { getPrivateData } from "./private.controller";
import { authMiddleware } from "../../shared/middleware";
import type { ServiceJwtPayload } from "../../shared/jwt/jwt";

const isErrorResponse = (value: any): value is { error: string } => {
  return value && typeof value.error === "string";
};

export const privateRoutes = new Elysia({ prefix: "/private" }).get("/", async (ctx) => {
  const result = await authMiddleware(ctx);

  if (isErrorResponse(result)) {
    // devolver directamente el error sin llamar a getPrivateData
    return result;
  }

  // Aquí TS sabe que result es ServiceJwtPayload
  return getPrivateData(result as ServiceJwtPayload);
});
