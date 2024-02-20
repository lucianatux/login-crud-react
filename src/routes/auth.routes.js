import {Router} from 'express';
import {login, logout, register} from '../controllers/auth.controller.js';

const router = Router();

router.post('/api/register', register);
router.post('/api/login', login);
router.post('/api/logout', logout);


export default router;