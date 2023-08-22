import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';


export const ListView = () => {

  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const { issuesQuery } = useIssues();

  const onLabelChange = (labelName: string) => {
    ( selectedLabels.includes( labelName) ) //se verifica si incluye el label en el array de los labels
      ? setSelectedLabels(selectedLabels.filter(label => label != labelName)) //si existe, lo borro
    : setSelectedLabels([...selectedLabels, labelName]); //si no, lo añado
  }

  return (
    <div className="row mt-5">
      
      <div className="col-8">
        <IssueList />
      </div>
      
      <div className="col-4">
        <LabelPicker 
          selectedLabels={ selectedLabels }
          onChange={ (labelName)=> onLabelChange(labelName)}
        />
      </div>
    </div>
  )
}
