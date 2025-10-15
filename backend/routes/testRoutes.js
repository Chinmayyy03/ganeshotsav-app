import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/testdb", (req, res) => {
  db.query("SELECT NOW() AS time", (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    res.json({ message: "Database connected!", time: results[0].time });
  });
});

export default router;
