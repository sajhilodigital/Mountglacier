
// import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// import rateLimit from "express-rate-limit";
// import helmet from "helmet";
// import hpp from "hpp";
// import morgan from "morgan";
// import xss from "xss";
import connectDB from "./DBconnection.js";
import { userController } from "./user/user.controller.js";
// import { sanitizeRequest, sanitizeXSS } from "./middleware/InjuctionPrevention.js";
import { tourController } from "./user/tour.controller.js";
import { bookingController } from "./user/booking.controller.js";

// Load env variables
dotenv.config();

// Initialize app
const app = express();

// ------------------------ MIDDLEWARE ------------------------ //

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

// Connect to MongoDB
await connectDB();

// ------------------------ SECURITY ------------------------ //

// Set security HTTP headers
// app.use(helmet());

// Enable CORS for frontend domains
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL || "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);

// Prevent NoSQL injection
// app.use(express.json());
// app.use(sanitizeRequest);
// app.use(sanitizeXSS);


// Prevent XSS attacks 
// todo: fix issue prevent attack

// app.use(xss());

// Prevent HTTP parameter pollution
// app.use(hpp());

// Gzip compression
// app.use(compression());

// ------------------------ LOGGING ------------------------ //

// Only in development
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

// ------------------------ RAhttp://localhost:8000/auth/api/tour/get-detail/68baa2f8e6c40e8ece4b4fb1TE LIMIT ------------------------ //

// const apiLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 request per window
//   message: {
//     success: false,
//     message: "Too many request from this IP, try again later.",
//   },
//   standardHeaders: true,
//   legacyHeaders: false,
// });
// app.use("/api", apiLimiter);

// ------------------------ ROUTES ------------------------ //

// Prefix all user routes
app.use("/auth/api", userController);
app.use("/auth/api", tourController);
app.use("/auth/api", bookingController);

// ------------------------ GLOBAL ERROR HANDLER ------------------------ //

// app.use((err, req, res, next) => {
//   console.error("Global Error Handler:", err.stack);
//   res.status(500).json({
//     success: false,
//     message: "Something went wrong!",
//     error: process.env.NODE_ENV === "development" ? err.message : undefined,
//   });
// });

// ------------------------ START SERVER ------------------------ //

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `✅ Server running in ${
      process.env.NODE_ENV || "development"
    } mode on port ${PORT}`
  );
});
