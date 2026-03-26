import type { ServiceJwtPayload } from "../../shared/jwt/jwt";

export const getPrivateData = (user: ServiceJwtPayload) => ({
  message: "Private endpoint",
  user,
});
