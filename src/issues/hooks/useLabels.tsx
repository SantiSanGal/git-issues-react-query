import {useQuery} from "@tanstack/react-query";
import {gitHubApi} from "../../api/gitHubApi";
import { Label } from "../interfaces/labels";
import { sleep } from "../../helpers/sleep";


const getLabels = async():Promise<Label[]> => {

    await sleep(2);

    const { data } = await gitHubApi.get<Label[]>('/labels');
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
            staleTime: 1000 * 60 * 60 //cada 1 hora se cargará nueva información o al cargar por primera vez
        }
    );

    return labelsQuery ;
}