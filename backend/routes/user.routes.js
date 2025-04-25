import express from 'express';
import { registerUser, loginUser, verifyEmail } from '../controllers/user.controller.js';

const router = express.Router();

// POST /api/users/register
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verify-email', verifyEmail);

export default router;
