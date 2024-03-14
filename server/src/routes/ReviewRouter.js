import { Router } from "express";
import ReviewController from "../controllers/ReviewController.js";
const ReviewRouter = Router();
ReviewRouter.post("/add", ReviewController.AddReview);
ReviewRouter.get("/get", ReviewController.GetReview);
ReviewRouter.delete("/delete", ReviewController.DeleteReview);
export default ReviewRouter;
