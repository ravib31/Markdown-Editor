import { convertToHtml } from '../utils/markdown.js';

export const convertMarkdown = (req, res) => {
    const { markdown } = req.body;

    if (!markdown) {
        return res.status(400).json({ error: 'Markdown content is required' });
    }

    try {
        const html = convertToHtml(markdown);
        res.json({ html });
    } catch (error) {
        res.status(500).json({ error: 'Failed to convert Markdown' });
    }
};
