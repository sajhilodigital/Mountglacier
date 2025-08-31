import jwt from "jsonwebtoken";
import UserTable from "../user/user.model.js";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "ajfdkadjak8329jkdakdj";

// 🔒 Extract token from HTTP-only cookie
const extractTokenFromCookie = (req) => {
  return req.cookies?.accessToken;
};

// ✅ Generic middleware generator
const authorizeRole = (role) => {
  return async (req, res, next) => {
    try {
      const token = extractTokenFromCookie(req);

      if (!token) {
        return res
          .status(401)
          .json({ message: "Unauthorized. No token provided." });
      }

      const payload = jwt.verify(token, JWT_SECRET);

      const user = await UserTable.findOne({ email: payload.email }).lean();

      if (!user) {
        return res
          .status(401)
          .json({ message: "Unauthorized. User not found." });
      }

      // Role check if required
      if (role && user.role !== role) {
        return res
          .status(403)
          .json({ message: `Access denied for ${user.role}.` });
      }

      req.loggedInUserId = user._id;
      req.loggedInUserRole = user.role;

      next();
    } catch (error) {
      console.error("Authorization error:", error);
      return res.status(401).json({ message: "Unauthorized. Invalid token." });
    }
  };
};

// ✅ Specific role middlewares
export const isAdmin = authorizeRole("admin");
export const isTraveler = authorizeRole("traveler");
