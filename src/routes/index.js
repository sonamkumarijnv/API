import express from 'express';
import { indexPage, messagesPage, addMessage,messagesById } from '../controllers/index.js';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);
indexRouter.get('/messages/:id', messagesById);

export default indexRouter;