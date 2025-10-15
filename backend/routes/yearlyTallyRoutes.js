import express from "express";
import { getTallyByYear, addTally } from "../controllers/YearlyTallyController.js";

const router = express.Router();

router.get("/:year", getTallyByYear);
router.post("/", addTally);

export default router;
