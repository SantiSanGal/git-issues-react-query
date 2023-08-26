import axios from 'axios';

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});