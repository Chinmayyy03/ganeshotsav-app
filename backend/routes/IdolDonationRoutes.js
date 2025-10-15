import express from "express";
import { getIdolDonationsByYear, addIdolDonation } from "../controllers/IdolDonationController.js";

const router = express.Router();

router.get("/:year", getIdolDonationsByYear);
router.post("/", addIdolDonation);

export default router;
