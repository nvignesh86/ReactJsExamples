import React from 'react';
import {useLocation} from 'react-router-dom';
export default function ThirdChild(){
    const {search} = useLocation();
    const params = new URLSearchParams(search);
    return (
    <div>Params-{params.get('q')}</div>
    );
}