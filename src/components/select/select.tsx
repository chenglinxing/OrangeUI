import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './select.scss';
import { getElementPosition } from '../../utils';

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
  defaultValue: string | string[] | number | number[]; //默认值
  onChange?: Function; //onChange方法
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
    defaultValue,
    onChange,
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

  let clearSvg = (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="close-circle"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
    </svg>
  );

  //classname
  const selectSearchClassName = 'orange-select-selection-search';
  const inputClassName = classNames('orange-select-input', {
    [`orange-select-disabled`]: disabled,
    [`orange-select-filterable`]: filterable,
  });

  //hook
  const selectRef = useRef(); //获取select
  const inputRef = useRef(); //获取input
  const dropDownRef = useRef(); //获取下拉框
  let [dropHeight, setDropHeight] = useState(0); //下拉框的高度
  let [top, setTop] = useState(0); //获取Y轴位置
  let [left, setLeft] = useState(0); //获取X轴位置
  let [elementWidth, setElementWidth] = useState(0);
  let [isShowQuery, setIsShowQuery] = useState<boolean>(false);
  let [selected, setSelected] = useState<boolean>(false); //选中的值
  let [inputVal, setInputVal] = useState<any>(null); //input 的 value
  let [selectOptions, setSelectOptions] = useState(options);

  //赋默认值
  useEffect(() => {
    if (defaultValue) {
      let arr: any = options?.filter((i) => i.key == defaultValue);
      setInputVal(arr[0].label);
    }
  }, [defaultValue]);

  useEffect(() => {
    let params = getElementPosition(selectRef);
    let { bottom, height, left, top } = params;
    setTop(top + height);
    setLeft(left);
    setElementWidth(selectRef.current.offsetWidth);
  });

  //是否展示clearable图标  清除  可编辑 且有值
  let isShowClear: boolean = (clearable && !disabled && inputVal) ?? false;

  //methods
  /**
   * 点击下拉框的方法
   * @param e
   */
  const handleClickSelect = (e: any) => {
    e.stopPropagation();
    setIsShowQuery(true);
  };

  /**
   * 点击label
   * @param e
   * @param i 遍历的对象
   */
  const handleClickLabel = (e: any, i: any) => {
    console.log(e, i, '11');
    //选择后高亮展示
    //赋值
    setInputVal(i.label);
    //赋值后隐藏
    setIsShowQuery(false);
  };

  /**
   * input输入事件
   * filterable必须为true 且options一定有数据
   */
  const hanldeInput = (e: any) => {
    // setInputVal(e.currentTarget.value);
    // let currentVal = e.currentTarget.value;
    let currentVal = inputRef.current.value;

    if (options?.length) {
      let option = options.filter((i) => {
        return (i.label as string)?.includes(currentVal);
      });
      console.log(option, 'option');
      setSelectOptions(option);
    }
  };

  /**
   * 失去焦点
   * @param e
   */
  const handleMouseMove = (e: any) => {
    // console.log('blur', e);
    setIsShowQuery(false);
  };

  const handleFocus = (e: any) => {
    setIsShowQuery(false);
  };

  const handleChangeVal = () => {};

  /**
   * 清除
   */
  const handleClearValue = (e: any) => {
    console.log('清除');
    e.stopPropagation();
    setInputVal(null);
    //赋值后隐藏
    setIsShowQuery(false);
  };

  const labelClassNames = classNames('orange-select-item-option', {
    [`orange-select-item-option-selected`]: selected,
  });

  return (
    <>
      <div ref={selectRef} className={classes} onClick={handleClickSelect}>
        <span className={selectSearchClassName}>
          <input
            ref={inputRef}
            className={inputClassName}
            type="text"
            disabled={disabled}
            readOnly={!filterable}
            value={inputVal}
            onInput={hanldeInput}
            onChange={handleChangeVal}
            onBlur={handleMouseMove}
          />
        </span>
        {isShowClear ? (
          <span className="orange-select-arrow arrow-clear" onClick={handleClearValue}>
            {clearSvg}
          </span>
        ) : (
          <span className="orange-select-arrow arrorw-select">{selectSvg}</span>
        )}
      </div>

      {isShowQuery && !disabled && (
        <div
          className="orange-select-dropdown"
          style={{ left: left, top: top, width: elementWidth }}
          ref={dropDownRef}
        >
          <div className="query-list">
            {selectOptions?.map((i) => {
              return (
                <div className="query-item" key={i.key}>
                  <div
                    className="query-item-label"
                    onClick={(e) => {
                      handleClickLabel(e, i);
                    }}
                  >
                    <span className={labelClassNames}>{i.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

Select.defaultProps = {
  size: 'default',
  clearable: false,
  filterable: false,
  defaultValue: null,
  options: [],
};

export default Select;
