import { Router } from "express";
import { generateEmail } from "../langchain/langchain.controllers.js";

const router = Router();

router.route("/generate-email").post(generateEmail);

export default router;
