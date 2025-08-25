// src/api/jobs.routes.ts
import { Router } from 'express';
import { searchJobs, saveJob } from '../controllers/Job.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

// All job routes require authentication
router.use(authMiddleware);

// GET /api/jobs/search?query=react&location=london
router.get('/search', searchJobs);

// POST /api/jobs/save
router.post('/save', saveJob);

//  GET /saved and DELETE /saved/:id should be added here later
// have to add more stuff here



export default router;