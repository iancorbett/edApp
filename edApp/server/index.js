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
  const { name, email, password } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO teachers (firstname, lastname, username, email, school, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password] // 🔐 NOTE: store hashed password in real apps!
      
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
