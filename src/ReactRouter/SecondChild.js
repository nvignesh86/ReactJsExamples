import React from 'react'
import ThirdChild from './ThirdChild';
import WithRouterSample from './WithRouterSample';
export default function SecondChild(){
  
   return (
       <>
            <div>SecondChild</div>
            <ThirdChild />
            <WithRouterSample />
            </>
        );
}