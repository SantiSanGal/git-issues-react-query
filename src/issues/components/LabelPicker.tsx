import { FC } from "react";
import LoadingIcon from "../../shared/components/LoadingIcon";
import { useLabels } from "../hooks/useLabels"

//se especifícan qué tipo de props ba a recibir
interface Props {
    selectedLabels: string[];
    onChange: ( labelName: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onChange }) => {

    const labelsQuery = useLabels();

    // isLoading es cuando se carga la data por primera vez
    //cuando no hay data ni en caché
    if ( labelsQuery.isLoading ){
        return <LoadingIcon/>
    }
    //isFetching se dispara siempre que se realiza la petición

  return (
    <div>
        {
            labelsQuery.data?.map( label => (
                <span 
                    key={label.id} 
                    className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active' : ''}`} 
                    style={{ border: `1px solid #${ label.color }`, color: `#${label.color}`}}
                    onClick={ ()=> onChange( label.name )}
                >
                        { label.name }
                </span>
            ))
        }        
    </div>
  )
}
