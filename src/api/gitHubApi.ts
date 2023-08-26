import axios from 'axios';

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});