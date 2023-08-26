import { Link, Navigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { useIssue } from '../hooks';
import LoadingIcon from '../../shared/components/LoadingIcon';

export const IssueView = () => {

  //desesctructuramos el id que se indica como parámetro en las routes
  //inicializando en cero por alguna exception
  const {id = '0'} = useParams();
  
  //los parámetros de url siempre vienen como string, entonces parseamos a int
  const { issueQuery, commentsQuery } = useIssue( +id );

  //si está cargado, muestra este icono
  if ( issueQuery.isLoading )
    return ( <LoadingIcon /> )

  //si no hay data, te manda a otra ruta
  if( !issueQuery.data)
    return ( <Navigate to="./issues/list" /> )

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to='./issues/list'>Go Back</Link>
      </div>

      <IssueComment issue={ issueQuery.data } />
      {
        //muestra loading mientras se cargan los otros comentarios
        commentsQuery.isLoading && (<LoadingIcon/>) 
      }
      {
        commentsQuery.data?.map( issue => (
          <IssueComment key={issue.id} issue={ issue } />
        ))
      }
    </div>
  )
}
