import React from 'react';
import Select from '../select';

const BasicSelect = () => {
  return (
    <>
      <div>
        <Select
          options={[
            { key: 1, label: '周黑鸭' },
            { key: 2, label: '绝味' },
          ]}
        />
        <Select disabled />
        <Select filterable />
      </div>
    </>
  );
};

export default BasicSelect;
