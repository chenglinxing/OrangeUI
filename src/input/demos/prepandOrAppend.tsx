import React from 'react';

import Input from '../input';

const PrepandAndAppend = () => {
  return (
    <>
      <Input append={'com'} prepand={'http://'} />
      <Input prepand={'www'} />
      <Input append={'com'} />
    </>
  );
};

export default PrepandAndAppend;
