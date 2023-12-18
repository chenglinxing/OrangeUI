import React from 'react';
import Menu from '../menu';
import MenuItem from '../menuItem';

const BasicMenu = () => {
  return (
    <>
      <Menu defaultIndex={0}>
        <MenuItem index={0} disabled>AAA</MenuItem>
        <MenuItem index={1}>BBB</MenuItem>
        <MenuItem index={2}>CCC</MenuItem>
      </Menu>
    </>
  );
};

export default BasicMenu;
