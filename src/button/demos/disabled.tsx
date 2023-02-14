import React from 'react';
import Button from '../button';

const BasicButton = () => {
  return (<>
    <div>
        <Button onClick={()=>console.log("primary button")} disabled btnType="primary">primary button</Button>
        <Button onClick={()=>console.log("danger button")} disabled btnType="danger">danger button</Button>
        <Button onClick={()=>console.log("dashed button")} disabled btnType="dashed">dashed dashed</Button>
        <Button onClick={()=>console.log("link button")} disabled btnType="link">link button</Button>
        <Button onClick={()=>console.log("default button")} disabled btnType="default">default button</Button>
        <Button onClick={()=>console.log("default button")} disabled btnType="text">default button</Button>
    </div>
  </>)
};

export default BasicButton
