import express from 'express';
import { registerUser, loginUser } from '../controllers/user.controller.js';

const router = express.Router();

// POST /api/users/register
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
