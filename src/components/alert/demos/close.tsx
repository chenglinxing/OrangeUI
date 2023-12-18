import React from 'react';
// @ts-ignore
import Alert, { AlertProps } from '../alert';
import Button from '../../button/button';

const CloseAlert = () => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'test e');
  };
  return (
    <>
      <Alert
        message="Success Tips"
        icon="√"
        type="success"
        description="Detailed description and advice about successful copywriting."
        closable
        onClose={onClose}
      ></Alert>

      <Alert message="Info Text" type="info" closeText="X" onClose={onClose} />
    </>
  );
};

export default CloseAlert;
