import express from 'express';
import postController from '../controllers/post.controller';
import { authenticateUser } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', authenticateUser, postController.createPost);
router.put('/:id', authenticateUser, postController.updatePost);
router.delete('/:id', authenticateUser, postController.deletePost);

export default router;
