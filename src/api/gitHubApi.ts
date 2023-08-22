import axios from 'axios';

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});