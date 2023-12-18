import React from 'react';
import Input from '../input';

const ShowNumber = () => {
  return (
    <>
      <Input showcount maxLength={20}></Input>
      <Input showcount maxLength={50} disabled></Input>
    </>
  );
};

export default ShowNumber;
