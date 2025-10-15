import db from "../config/db.js";

// Get donations by member
export const getDonationsByMember = (req, res) => {
  const memberId = req.params.memberId;
  db.query("SELECT * FROM donations WHERE member_id = ?", [memberId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Add a donation
export const addDonation = (req, res) => {
  const { member_id, amount, year } = req.body;
  db.query("INSERT INTO donations (member_id, amount, year) VALUES (?, ?, ?)",
    [member_id, amount, year],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Donation added", donationId: results.insertId });
    }
  );
};
