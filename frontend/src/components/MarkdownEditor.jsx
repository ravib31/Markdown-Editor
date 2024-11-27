import { useState, useEffect } from 'react';
import axios from 'axios';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');

    useEffect(() => {
        const fetchHtml = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/convert', { markdown });
                setHtml(response.data.html);
            } catch (error) {
                console.error('Error converting Markdown:', error);
            }
        };

        fetchHtml();
    }, [markdown]);

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6">
            {/* Markdown Input */}
            <textarea
                className="flex-1 h-auto lg:h-auto p-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none shadow-sm"
                placeholder="Write Markdown here..."
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />

            {/* HTML Preview */}
            <div
                className="flex-1 h-80 lg:h-auto p-4 bg-gray-100 border border-gray-300 rounded-lg overflow-y-auto shadow-sm"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
};

export default MarkdownEditor;
