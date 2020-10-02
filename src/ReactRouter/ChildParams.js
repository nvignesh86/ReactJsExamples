import React from 'react';
import { useParams, useRouteMatch } from 'react-router';

export default function ChildParams(){
    const {childId,q} = useParams();
    const {path,url} = useRouteMatch();
    console.log(useRouteMatch());
    return (
      <>
      <div>Param Value={childId}</div>
    {q&&<div>Query={q}</div>}
      <div>path Value={path}</div>
      <div>url Value={url}</div>
      </>  
    );
}