import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../../api/gitHubApi"
import { Issue } from "../interfaces/issue"

// https://api.github.com/repos/facebook/react/issues
const getIssues = async ():Promise<Issue[]> => {

    //indicamos que data que regresa, es el arreglo de Interface Issue
    const { data } = await gitHubApi.get<Issue[]>('/issues');
    console.log('useIssues', data);
    
    return data;
}

export const useIssues = () => {
    const issuesQuery = useQuery(
        ['issues'],
        getIssues
    );
    
    return {
        issuesQuery,
    }

}

