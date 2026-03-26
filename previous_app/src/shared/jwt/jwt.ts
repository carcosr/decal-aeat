import jwt, { type SignOptions, type JwtPayload as DefaultJwtPayload } from "jsonwebtoken";
import { env } from "../../config/env";

export type ServiceJwtPayload = {
  service: string;
};

export const signServiceToken = (): string => {
  const payload: ServiceJwtPayload = {
    service: "internal-service",
  };

  const options: SignOptions = {
    expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
  };

  return jwt.sign(payload, env.JWT_SECRET, options);
};

// strict verification
export const verifyServiceToken = (token: string): (ServiceJwtPayload & DefaultJwtPayload) | null => {
  try {
    return jwt.verify(token, env.JWT_SECRET) as ServiceJwtPayload & DefaultJwtPayload;
  } catch {
    return null;
  }
};

// decode sin verificar (debug)
export const decodeServiceToken = (token: string): (ServiceJwtPayload & DefaultJwtPayload) | null => {
  try {
    return jwt.decode(token) as ServiceJwtPayload & DefaultJwtPayload;
  } catch {
    return null;
  }
};
