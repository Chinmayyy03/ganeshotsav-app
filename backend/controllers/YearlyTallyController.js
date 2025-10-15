import db from "../config/db.js";

// Get yearly tally by year
export const getTallyByYear = (req, res) => {
  const year = req.params.year;
  db.query("SELECT * FROM yearly_tally WHERE year = ?", [year], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Add yearly tally (PDF path)
export const addTally = (req, res) => {
  const { year, pdf_path } = req.body;
  db.query("INSERT INTO yearly_tally (year, pdf_path) VALUES (?, ?)",
    [year, pdf_path],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Tally added", id: results.insertId });
    }
  );
};
