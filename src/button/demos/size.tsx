import React from 'react';
import Button from '../button';

const SizeButton = () => {
  return (<>
    <div className='test-large'>
        <Button onClick={()=>console.log("primary button")} btnType="primary" size='large'>primary button</Button>
        <Button onClick={()=>console.log("danger button")} btnType="danger" size='large'>danger button</Button>
        <Button onClick={()=>console.log("dashed button")} btnType="dashed" size='large'>dashed dashed</Button>
        <Button onClick={()=>console.log("default button")} btnType="default" size='large'>default button</Button>
        <Button onClick={()=>console.log("default button")} btnType="text" size='large'>default button</Button>
    </div>

    <div className='test-large'>
        <Button onClick={()=>console.log("primary button")} btnType="primary" size='mddile'>primary button</Button>
        <Button onClick={()=>console.log("danger button")} btnType="danger" size='mddile'>danger button</Button>
        <Button onClick={()=>console.log("dashed button")} btnType="dashed" size='mddile'>dashed dashed</Button>
        <Button onClick={()=>console.log("default button")} btnType="default" size='mddile'>default button</Button>
        <Button onClick={()=>console.log("default button")} btnType="text" size='mddile'>default button</Button>
    </div>

    <div className='test-small'>
        <Button onClick={()=>console.log("primary button")} btnType="primary" size='small'>primary button</Button>
        <Button onClick={()=>console.log("danger button")} btnType="danger" size='small'>danger button</Button>
        <Button onClick={()=>console.log("dashed button")} btnType="dashed" size='small'>dashed dashed</Button>
        <Button onClick={()=>console.log("default button")} btnType="default" size='small'>default button</Button>
        <Button onClick={()=>console.log("default button")} btnType="text" size='small'>default button</Button>

    </div>
  </>)
};

export default SizeButton
