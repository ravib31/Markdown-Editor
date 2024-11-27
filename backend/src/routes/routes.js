import express from 'express';
import { convertMarkdown } from '../controllers/markdownController.js';

const router = express.Router();

// Endpoint to process Markdown and return HTML
router.post('/convert', convertMarkdown);

export default router;
