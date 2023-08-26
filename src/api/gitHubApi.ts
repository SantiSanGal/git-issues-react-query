import axios from 'axios';

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});