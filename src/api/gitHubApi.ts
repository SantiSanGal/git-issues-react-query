import axios from 'axios';

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});