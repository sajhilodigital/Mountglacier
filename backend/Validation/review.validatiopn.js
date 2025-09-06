import * as yup from "yup";

export const createReviewSchema = yup.object({
  tour: yup.string().required("tour id required"),
  rating: yup.number().min(1).max(5).required("rating required"),
  comment: yup.string().optional(),
});

export const updateReviewSchema = yup.object({
  rating: yup.number().min(1).max(5).optional(),
  comment: yup.string().optional(),
});
