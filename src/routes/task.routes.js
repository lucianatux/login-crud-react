import {Router} from 'express';
import {authRequired} from '../middlewares/validateToken.js';
import {getTask, getTasks, createTask, updateTask, deleteTask, } from '../controllers/task.controller.js'

const router = Router();

router.get('/api/tasks', authRequired, getTasks);
router.get('/api/tasks/:id', authRequired, getTask);
router.post('/api/tasks', authRequired, createTask);
router.delete('/api/tasks/:id', authRequired, deleteTask);
router.put('/api/tasks/:id', authRequired, updateTask);

export default router;