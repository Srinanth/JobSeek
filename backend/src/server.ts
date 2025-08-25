// src/server.ts
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import JobRoute from './api/JobRoute.js';
import ProfileRoute from './api/ProfileRoute.js'; 
import SkillRoute from './api/SkillRoute.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors()); // Allow requests from your frontend
app.use(express.json()); // Parse JSON bodies

// API Routes
app.use('/api/jobs', JobRoute);
app.use('/api/profile', ProfileRoute);
app.use('/api/skills', SkillRoute); 
// app.use('/api/profile', profileRoutes);

app.get('/', (_req, res) => {
  res.send('Job Seeker API is running! 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});