import axios from 'axios';

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});