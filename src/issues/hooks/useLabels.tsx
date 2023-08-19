import {useQuery} from "@tanstack/react-query";
import {gitHubApi} from "../../api/gitHubApi";
import { Label } from "../interfaces/labels";
import { sleep } from "../../helpers/sleep";


const getLabels = async():Promise<Label[]> => {

    await sleep(2);

    const { data } = await gitHubApi.get<Label[]>('/labels');
    console.log(data);
    
    return  data;
}

export const useLabels = () => {

    //el primer arreglo es el manejador de caché
    const labelsQuery = useQuery(
        ['labels'],
            getLabels,
        {
            // con esto, evito que se realice de nuevo la peticion al dar click en la pantalla
            refetchOnWindowFocus: false,
            // por 1 hora, se mantiene "fresca" la información, luego pasa a stale
            // stale = estado de información no confiable, que puede ser desactualizada
            staleTime: 60, //cada 1 hora se cargará nueva información o al cargar por primera vez
            
            //muestra por defecto y tiene a la data como si fuera fresca y la recarga hasta el staleTime
            // initialData: [
            // {
            //     id: 725156255,
            //     node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
            //     url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
            //     name: "good first issue (taken)",
            //     color: "b60205",
            //     default: false
            // }, 
            // {
            //     id: 717031390,
            //     node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
            //     url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
            //     name: "good first issue",
            //     color: "6ce26a",
            //     default: true
            // }],

            //Muestra por defecto, hasta que llegue la nueva data
            placeholderData: [
            {
                id: 725156255,
                node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
                url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
                name: "good first issue (taken)",
                color: "b60205",
                default: false
            }, 
            {
                id: 717031390,
                node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
                url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
                name: "good first issue",
                color: "6ce26a",
                default: true
            }]
        }
    );

    return labelsQuery ;
}