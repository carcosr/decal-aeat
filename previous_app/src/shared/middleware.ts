import { verifyServiceToken } from "./jwt/jwt";

export const authMiddleware = async ({ request, set }: any) => {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    set.status = 401;
    return { error: "Unauthorized" };
  }

  const token = authHeader.replace("Bearer ", "");
  const decoded = verifyServiceToken(token);

  if (!decoded) {
    set.status = 401;
    return { error: "Unauthorized" };
  }

  return decoded;
};
