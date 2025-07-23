import express from "express";
import cors from "cors";
import { Pool } from "pg";

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "ianmclaren",
  host: "localhost",
  database: "edapp",
  password: "Murray1738",
  port: 5432,
});

// API route to save signup data
app.post("/api/signup", async (req, res) => {
  const { firstname, lastname, username, email, school, password } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO teachers (first_name, last_name, username, email, school, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [firstname, lastname, username, email, school, password] // 🔐 NOTE: store hashed password in real apps!
      
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM teachers WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ message: "Login successful!" });
    } else {
      res.status(401).json({ message: "Invalid username or password." });
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
