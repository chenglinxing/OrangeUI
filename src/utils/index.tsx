import React from 'react';

<<<<<<< HEAD
/**
 * 获取元素所在位置
 * 当页面滚动时，使用 getBoundingClientRect() 方法获取的位置信息会受到滚动的影响。
 * 为了获取元素在整个文档中的位置，可以结合 window.scrollX 和 window.scrollY 属性来进行修正。
 * @param elRef
 * @returns
 */
export const getElementPosition = (elRef: React.MutableRefObject<any>) => {
  let rect = elRef.current.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const top = rect.top + scrollTop;
  const left = rect.left + scrollLeft;
  const bottom = rect.bottom + scrollTop;
  const right = rect.right + scrollLeft;
  return { top, left, bottom, right, height: rect.height, width: rect.width };
=======
export const getElementPosition = (elRef: React.MutableRefObject<any>) => {
  let top = elRef.current.getBoundingClientRect().top;
  let left = elRef.current.getBoundingClientRect().left;
  return [top, left];
>>>>>>> 0404831c3504f04bd29f24c04a7d66607f2d040d
};
