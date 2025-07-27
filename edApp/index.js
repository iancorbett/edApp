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
  const { firstname, lastname, username, email, password, role, school_id } = req.body;

  if (role === "teacher") {
    await pool.query(
      "INSERT INTO teachers (first_name, last_name, username, email, password, school_id) VALUES ($1, $2, $3, $4, $5, $6)",
      [firstname, lastname, username, email, password, school_id]
    );
  } else if (role === "admin") {
    await pool.query(
      "INSERT INTO admins (name, email, password, school_id) VALUES ($1, $2, $3, $4)",
      [`${firstname} ${lastname}`, email, password, school_id]
    );
  } else {
    return res.status(400).json({ error: "Invalid role selected" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const teacherResult = await pool.query(
      "SELECT * FROM teachers WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (teacherResult.rows.length > 0) {
      const teacher = teacherResult.rows[0];

      console.log("Teacher row from DB:", teacher);


      const token = jwt.sign(
        { teacher_id: teacher.teacher_id, role: "teacher" },
        SECRET_KEY,
        { expiresIn: "1h" } 
      );

      return res.status(200).json({ message: "Login successful!", token });
    } 
    
    const adminResult = await pool.query(
      "SELECT * FROM admins WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (adminResult.rows.length > 0) {
      const admin = adminResult.rows[0];
      const token = jwt.sign(
        { user_id: admin.admin_id, role: "admin" },
        SECRET_KEY,
        { expiresIn: "1h" }
      );
    
      return res.status(401).json({ message: "Invalid username or password." });
    
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
    res.status(201).json({
      message: "Student added successfully",
      student: result.rows[0],
    });
  } catch (err) {
    console.error("Error adding student:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add to your server code
app.get("/api/students", authenticateToken, async (req, res) => {
  const teacher_id = req.user.teacher_id;

  try {
    const result = await pool.query(
      "SELECT * FROM students WHERE teacher_id = $1",
      [teacher_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get("/", (req, res) => {
  res.send("API is running");
});


app.listen(3001, () => console.log("Server running on http://localhost:3001"));
