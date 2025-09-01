import express, { json } from "express";
import connectDB from "./DBconnection.js";
import cors from "cors";
// import helmet from "helmet";
// import morgan from "morgan";
// import rateLimit from "express-rate-limit";
// import mongoSanitize from "express-mongo-sanitize";
// import xss from "xss-clean";
// import hpp from "hpp";
// import compression from "compression";
import dotenv from "dotenv";
import { userController } from "./user/user.controller.js";
import cookieParser from "cookie-parser";

// Load env variables securely
dotenv.config();

// Initialize app
const app = express(json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 1. Connect database
await connectDB();

// 2. Trust proxy (important for reverse proxy setups, e.g. Nginx, Vercel, Render)
// app.set("trust proxy", 1);

// 3. Middleware
// app.use(express.json({ limit: "10kb" })); // Prevent large payload attacks

// Security headers
// app.use(helmet());

// Enable CORS for multiple environments
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL || "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true, // allow cookies, auth headers
  })
);

// Prevent NoSQL injection
// app.use(mongoSanitize());

// Prevent XSS attacks
// app.use(xss());

// Prevent HTTP parameter pollution
// app.use(hpp());

// Gzip compression for faster responses
// app.use(compression());

// Logging (only in dev)
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

// Rate limiting (protect from brute-force/DDoS)
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 min
//   max: 100, // limit each IP to 100 requests
//   message: "Too many requests from this IP, try again later.",
// });
// app.use("/api", limiter);

// 4. Routes
app.use(userController);

// 5. Global error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     message: "Something went wrong!",
//     error: process.env.NODE_ENV === "development" ? err.message : undefined,
//   });
// });

// 6. Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `✅ Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
