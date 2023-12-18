import React from 'react';
import Input, { InputProps } from '../input';

const SizeInput = () => {
  return (
    <>
      <div>
        <Input size="sm" />
        <Input size="default" />
        <Input size="lg" />
      </div>
    </>
  );
};

export default SizeInput;
