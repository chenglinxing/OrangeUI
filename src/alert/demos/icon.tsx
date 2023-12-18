import React from 'react';
import Alert, { AlertProps } from '../alert';

const IconAlert = () => {
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
      ></Alert>

      <Alert message="Info Text" icon="i" description="Additional description and information about copywriting."/>
      <Alert message="Warning Text" icon="!" type="warning" description="This is a warning notice about copywriting."/>
      <Alert message="Error Text" icon="X" type="error" description="This is an error message about copywriting." />
    </>
  );
};

export default IconAlert;
