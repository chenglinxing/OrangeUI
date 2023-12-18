import React from 'react';
import Select from '../select';

const BasicSelect = () => {
  return (
    <>
      <div>
        <Select
          filterable
          options={[
            { key: 1, label: '周黑鸭' },
            { key: 2, label: '绝味' },
          ]}
        />

        <Select
          filterable
          clearable
          options={[
            { key: 1, label: '周黑鸭' },
            { key: 2, label: '绝味' },
          ]}
        />
      </div>
    </>
  );
};

export default BasicSelect;
