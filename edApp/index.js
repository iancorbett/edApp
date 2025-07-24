import express from "express";
import cors from "cors";
import { Pool } from "pg";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

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
      [firstname, lastname, username, email, school, password] 
      
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
      const teacher = result.rows[0];

      console.log("Teacher row from DB:", teacher);


      const token = jwt.sign(
        { teacher_id: teacher.teacher_id },
        SECRET_KEY,
        { expiresIn: "1h" } 
      );

      res.status(200).json({ message: "Login successful!", token });
    } else {
      res.status(401).json({ message: "Invalid username or password." });
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

  const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });

    req.user = user; 
    next();
  });
};

app.post("/api/addstudent", authenticateToken, async (req, res) => {
  const { first_name, last_name } = req.body;
  const teacher_id = req.user.teacher_id;

  try {
    const result = await pool.query(
      "INSERT INTO students (first_name, last_name, teacher_id) VALUES ($1, $2, $3) RETURNING *",
      [first_name, last_name, teacher_id]
    );
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
