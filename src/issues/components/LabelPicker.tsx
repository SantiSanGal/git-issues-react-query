import LoadingIcon from "../../shared/components/LoadingIcon";
import { useLabels } from "../hooks/useLabels"

export const LabelPicker = () => {

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
                    className="badge rounded-pill m-1 label-picker" 
                    style={{ border: `1px solid #${ label.color }`, color: `#${label.color}`}}>
                        { label.name }
                </span>
            ))
        }        
    </div>
  )
}
