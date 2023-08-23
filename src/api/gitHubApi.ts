import axios from 'axios';

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});