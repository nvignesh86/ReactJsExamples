import React from 'react';
const CallBackHookChild = React.memo(function CallBackHookChild({parentCallBack}){
    console.log("CallBackHookChild");
    parentCallBack();
    return <div>callback hookchild</div>
});
export default CallBackHookChild;