import db from "../config/db.js";

// Get all members
export const getAllMembers = (req, res) => {
  db.query("SELECT * FROM members", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Add a new member
export const addMember = (req, res) => {
  const { name, phone, role } = req.body;
  db.query("INSERT INTO members (name, phone, role) VALUES (?, ?, ?)",
    [name, phone, role],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Member added", memberId: results.insertId });
    }
  );
};
