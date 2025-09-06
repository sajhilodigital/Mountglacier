import multer from "multer";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: {
    files: 5, // max 5 files
    fileSize: 5 * 1024 * 1024, // 5 MB limit per file
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only JPEG, PNG, and WebP files are allowed"), false);
    }
    cb(null, true);
  },
});
