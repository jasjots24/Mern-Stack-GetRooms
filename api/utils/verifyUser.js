import JWT from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.acess_token;
  if (!token) return next(errorHandler(401, "Unauthorized"))

  JWT.verify(token, process.env.JWT_SECERT, (err, user) => {
    if (err) return next(errorHandler(403, "forbidden"));
    req.user = user;
    next();
  });
};