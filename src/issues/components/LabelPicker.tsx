import {useQuery} from "@tanstack/react-query";
import {gitHubApi} from "../../api/gitHubApi";
import { Label } from "../interfaces/labels";

const getLabels = async():Promise<Label[]> => {
    const { data } = await gitHubApi.get<Label[]>('/labels');
    return  data;
}

export const LabelPicker = () => {
    //el primer arreglo es el manejador de caché
    const labelsQuery = useQuery(
        ['labels'],
            getLabels,
        {
            // con esto, evito que se realice de nuevo la peticion al dar click en la pantalla
            refetchOnWindowFocus: false,
        }
        );

  return (
    <div>
        <span 
            className="badge rounded-pill m-1 label-picker"
            style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
        >
            Primary
        </span>
        
    </div>
  )
}
