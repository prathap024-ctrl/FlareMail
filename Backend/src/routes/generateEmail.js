import { Router } from "express";
import { generateEmail } from "../LangGraph/langGraph.js";

const router = Router();

router.route("/generate-email").post(generateEmail);


export default router