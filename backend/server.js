import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";

import memberRoutes from "./routes/memberRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import idolDonationRoutes from "./routes/idolDonationRoutes.js";
import yearlyTallyRoutes from "./routes/yearlyTallyRoutes.js";

dotenv.config();
const app = express();

// Use routes
app.use("/api/members", memberRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/idol-donations", idolDonationRoutes);
app.use("/api/yearly-tally", yearlyTallyRoutes);

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", testRoutes);

app.get("/", (req, res) => {
  res.send("🚩 Ganeshotsav Backend Running!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
