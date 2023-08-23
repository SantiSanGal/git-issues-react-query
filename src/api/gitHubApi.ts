import axios from 'axios';

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});