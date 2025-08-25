// src/api/skills.routes.ts
import { Router } from 'express';
import { getAllSkills, addUserSkill, removeUserSkill } from '../controllers/Skill.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

// GET /api/skills/ -> Public route to get all skills
router.get('/', getAllSkills);

// Protected routes below
router.use(authMiddleware);

// POST /api/skills/ -> Add a skill to the logged-in user's profile
router.post('/', addUserSkill);

// DELETE /api/skills/:skillId -> Remove a skill from the user's profile
router.delete('/:skillId', removeUserSkill);

export default router;