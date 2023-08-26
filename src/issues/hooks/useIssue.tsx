import { useQuery } from "@tanstack/react-query"
import { gitHubApi } from "../../api/gitHubApi";
import { Issue } from "../interfaces";
import { sleep } from "../../helpers/sleep";

const getIssueInfo = async (issueNumber: number):Promise<Issue> => {
    await sleep(2);
    const { data } = await gitHubApi.get(`/issues/${issueNumber}`)
    console.log(data);
    return data    
}

export const useIssue = (issueNumber: number) => {
  
    //cacheamos el id que pasamos
    const issueQuery = useQuery(
    //para cada tipo de dato es un caché diferente
    [ 'issue', issueNumber ],
    () => getIssueInfo(issueNumber),
    );
    return {
      issueQuery
  }
}