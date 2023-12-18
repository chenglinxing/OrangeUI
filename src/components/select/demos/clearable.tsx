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
          clearable
        />
        <Select
          options={[
            { key: 1, label: '周黑鸭' },
            { key: 2, label: '绝味' },
          ]}
          clearable
          filterable
        />
      </div>
    </>
  );
};

export default BasicSelect;
