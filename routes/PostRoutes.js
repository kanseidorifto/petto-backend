import { Router } from 'express';

import * as PostController from '../controllers/PostController.js';
import checkAuth from '../utils/checkAuth.js';
import { uploadStorage } from '../utils/uploadStorage.js';

const PostRoutes = Router();

PostRoutes.use(checkAuth);

PostRoutes.get('/me', PostController.getMyPostList);
PostRoutes.post('/me', uploadStorage.array('mediaList'), PostController.createPost);
PostRoutes.get('/user', PostController.getUserPostList);
PostRoutes.get('/pet', PostController.getPetPostList);
PostRoutes.post('/like', PostController.createLike);
PostRoutes.delete('/like', PostController.cancelLike);
PostRoutes.post('/comment', PostController.createComment);
PostRoutes.delete('/comment', PostController.deleteComment);
PostRoutes.get('/:id', PostController.getPost);
PostRoutes.delete('/:id', PostController.deletePost);

export default PostRoutes;
