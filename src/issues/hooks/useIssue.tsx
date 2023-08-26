import { useQuery } from "@tanstack/react-query"
import { gitHubApi } from "../../api/gitHubApi";
import { Issue } from "../interfaces";
import { sleep } from "../../helpers/sleep";

const getIssueInfo = async (issueNumber: number):Promise<Issue> => {
    await sleep(2);
    const { data } = await gitHubApi.get(`/issues/${issueNumber}`)
    return data    
}

const getIssueComments = async (issueNumber: number):Promise<Issue[]> => {
  await sleep(2);
  const { data } = await gitHubApi.get(`/issues/${issueNumber}/comments`)
  return data;
}

export const useIssue = (issueNumber: number) => {
    //cacheamos el id que pasamos
    const issueQuery = useQuery(
    //para cada tipo de dato es un caché diferente
    [ 'issue', issueNumber ], //se carda el id del issue en caché
    () => getIssueInfo(issueNumber),
    );

    const commentsQuery = useQuery(
      //para cada tipo de dato es un caché diferente
      [ 'issue', issueNumber, 'comments' ],
      () => getIssueComments( issueQuery.data!.number ), //operador ! para decir que no será nulo en momento de ejecución
      {
        //no se ejecuta hasta que algo suceda
        // enabled: false // * cuando esté en true, hace la petición
        enabled: issueQuery.data !== undefined
      }
      );

    return {
      issueQuery,
      commentsQuery
  }
}