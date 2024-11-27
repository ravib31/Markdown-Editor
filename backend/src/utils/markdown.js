import { marked } from 'marked';

export const convertToHtml = (markdown) => {
    return marked(markdown);
};
