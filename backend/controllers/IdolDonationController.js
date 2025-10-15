import db from "../config/db.js";

// Get idols donated by year
export const getIdolDonationsByYear = (req, res) => {
  const year = req.params.year;
  db.query("SELECT * FROM idol_donations WHERE year = ?", [year], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Add idol donation
export const addIdolDonation = (req, res) => {
  const { member_id, year } = req.body;
  db.query("INSERT INTO idol_donations (member_id, year) VALUES (?, ?)",
    [member_id, year],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Idol donation added", id: results.insertId });
    }
  );
};
