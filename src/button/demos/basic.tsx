import React from 'react';
import Button from '../button';

const BasicButton = () => {
  return (<>
    <div>
        <Button onClick={()=>console.log("primary button")} btnType="primary">primary button</Button>
        <Button onClick={()=>console.log("danger button")} btnType="danger">danger button</Button>
        <Button onClick={()=>console.log("dashed button")} btnType="dashed">dashed dashed</Button>
        <Button onClick={()=>console.log("link button")} btnType="link">link button</Button>
        <Button onClick={()=>console.log("default button")} btnType="default">default button</Button>
        <Button onClick={()=>console.log("default button")} btnType="text">default button</Button>
    </div>
  </>)
};

export default BasicButton
