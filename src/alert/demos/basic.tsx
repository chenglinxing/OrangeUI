import React from 'react';
import Alert, { AlertProps } from '../alert';

const BasicAlert = () => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'test e');
  };
  return (
    <>
      <Alert message="Success Text" type="success" />
      <Alert message="Info Text" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
    </>
  );
};

export default BasicAlert;
