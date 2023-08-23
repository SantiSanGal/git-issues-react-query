import axios from 'axios';

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});