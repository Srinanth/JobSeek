// src/api/profile.routes.ts
import { Router } from 'express';
import multer from 'multer';
import { getProfile, updateProfile, uploadAvatar } from '../controllers/Profile.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();
const storage = multer.memoryStorage(); // Use memory storage for file buffer
const upload = multer({ storage });

// All profile routes are protected
router.use(authMiddleware);

// GET /api/profile/ -> Get the user's own complete profile
router.get('/', getProfile);

// PUT /api/profile/ -> Update basic profile details
router.put('/', updateProfile);

// POST /api/profile/avatar -> Upload a new profile picture
router.post('/avatar', upload.single('avatar'), uploadAvatar);

export default router;