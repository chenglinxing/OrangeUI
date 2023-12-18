import React from 'react';
import Select from '../select';

const BasicSelect = () => {
  return (
    <>
      <div>
        <Select
          defaultValue={1}
          options={[
            { key: 1, label: '周黑鸭' },
            { key: 2, label: '绝味' },
          ]}
        />
        <Select disabled />
        <Select
          filterable
          options={[
            { key: 1, label: '周黑鸭' },
            { key: 2, label: '绝味' },
          ]}
        />
        <Select
          defaultValue={2}
          options={[
            { key: 1, label: '周黑鸭' },
            { key: 2, label: '绝味' },
          ]}
          clearable
        />
      </div>
    </>
  );
};

export default BasicSelect;
