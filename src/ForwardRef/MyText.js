import React from 'react';

const  MyText = (props,ref)=>{
    return (
        <input ref={ref} value={"test Name"}/>
    );
}
export default React.forwardRef(MyText);
