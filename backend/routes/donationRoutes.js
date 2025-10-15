import express from "express";
import { getDonationsByMember, addDonation } from "../controllers/DonationController.js";

const router = express.Router();

router.get("/:memberId", getDonationsByMember);
router.post("/", addDonation);

export default router;
