import React from 'react';

export const getElementPosition = (elRef: React.MutableRefObject<any>) => {
  let top = elRef.current.getBoundingClientRect().top;
  let left = elRef.current.getBoundingClientRect().left;
  return [top, left];
};
