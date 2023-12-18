import React from 'react';
import Alert, { AlertProps } from '../alert';

const DescriptionAlert = () => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'test e');
  };
  return (
    <>
      <Alert
        message="Success Tips"
        type="success"
        description="Detailed description and advice about successful copywriting."
      ></Alert>

      <Alert message="Info Text" description="Info Description Info Description Info Description Info Description"/>
      <Alert message="Warning Text" type="warning" description="Warning Description Warning Description Warning Description Warning Description"/>
      <Alert message="Error Text" type="error" description="Error Description Error Description Error Description Error Description" />
    </>
  );
};

export default DescriptionAlert;
