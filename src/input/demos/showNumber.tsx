import React from 'react';
import Input from '../input';

const ShowNumber = () => {
  return (
    <>
      <Input showCount maxLength={20}></Input>
      <Input showCount maxLength={50} disabled></Input>
      <Input password></Input>
    </>
  );
};

export default ShowNumber;
