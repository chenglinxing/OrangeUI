import React from 'react';
import Input, { InputProps } from '../input';

const SizeInput = () => {
  return (
    <>
      <div>
        <Input size="small" />
        <Input size="default" />
        <Input size="large" />
      </div>
    </>
  );
};

export default SizeInput;
