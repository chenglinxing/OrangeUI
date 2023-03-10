import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './select.scss';
import { getElementPosition } from '../utils';

type InputSize = 'lg' | 'default' | 'sm'; //大小

interface IOptions {
  label: string | React.ReactNode;
  key: string | number;
}
export interface SelectProps {
  classname?: string; // 类名
  size?: InputSize; //大小
  clearable?: boolean; //是否清空
  disabled?: boolean; //是否可编辑
  filterable?: boolean; //是否支持查询
  multiple?: boolean; //是否多选
  noMatchText?: string; //搜索条件无匹配时显示的文字
  value?: any; //绑定的值
  options?: IOptions[];
}

const Select: React.FC<SelectProps> = (props) => {
  const {
    classname,
    size,
    clearable,
    disabled,
    filterable,
    multiple,
    noMatchText,
    value,
    options,
    ...resProps
  } = props;

  const prefixCls = 'orange-select';

  const classes = classNames(prefixCls, {
    [`orange-select-${size}`]: size,
    [`orange-select-disabled`]: disabled,
    [`orange-select-filterable`]: filterable,
    [`orange-select-multiple`]: multiple,
  });
  //svg
  let selectSvg = (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="down"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
    </svg>
  );

  //classname
  const selectSearchClassName = 'orange-select-selection-search';

  //hook
  const selectRef = useRef(); //获取select
  let [top, setTop] = useState(0); //获取Y轴位置
  let [left, setLeft] = useState(0); //获取X轴位置
  let [eleemntWidth, setEleemntWidth] = useState(0);

  //methods
  //点击下拉框的方法
  useEffect(() => {
    let [top, left] = getElementPosition(selectRef);
    console.log(top, left, selectRef.current.offsetWidth);
    setTop(top);
    setLeft(left);
    setEleemntWidth(selectRef.current.offsetWidth);
  });
  const handleClickSelect = (e: any) => {};

  return (
    <>
      <div ref={selectRef} className={classes} onClick={handleClickSelect}>
        <span className={selectSearchClassName}>
          <input type="text" readOnly={!filterable} />
        </span>
        <span className="orange-select-arrow">{selectSvg}</span>
      </div>

      <div
        className="orange-select-dropdown"
        style={{ left: left, top: top + 40, width: eleemntWidth }}
      >
        123
      </div>
    </>
  );
};

Select.defaultProps = {
  size: 'default',
  clearable: false,
  filterable: false,
};

export default Select;
