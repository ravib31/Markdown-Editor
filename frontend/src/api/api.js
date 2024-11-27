import axios from "axios";

const apiUrl = `http://localhost:3000/api`

export const fetchHtml = async (markdown) => {
    try {
        const response = await axios.post(`${apiUrl}/convert`, { markdown });
        return (response.data.html);
    } catch (error) {
        console.error('Error converting Markdown:', error);
    }
};