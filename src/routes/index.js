import express from 'express';
import { indexPage, messagesPage, addMessage,messagesById, messagesByName,SendEmail } from '../controllers/index.js';
const indexRouter = express.Router();

indexRouter.post('/SendEmail', SendEmail);
indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);
indexRouter.post('/getValueByName', messagesByName);
indexRouter.get('/messages/:id', messagesById);

export default indexRouter;