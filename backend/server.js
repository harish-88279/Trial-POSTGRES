// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors()); // Allow React to talk to this server
app.use(express.json());

// The Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // SECURITY WARNING: In a real app, hash passwords with bcrypt!
    // For this demo, we store it plain as requested.
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
      },
    });
    
    console.log("Saved to DB:", newUser);
    res.json({ success: true, message: "User saved to Neon DB!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Database error" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});