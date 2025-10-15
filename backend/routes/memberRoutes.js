import express from "express";
import { getAllMembers, addMember } from "../controllers/MemberController.js";

const router = express.Router();

router.get("/", getAllMembers);
router.post("/", addMember);

export default router;
