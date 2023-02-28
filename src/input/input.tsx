import React, { InputHTMLAttributes, ReactElement, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import './input.scss';

type InputSize = 'lg' | 'default' | 'sm'; //大小
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  classname?: string; //类名
  size?: InputSize;
  prepand?: string | ReactElement; //后缀
  append?: string | ReactElement; //前缀
  status?: 'error' | 'default' | 'warning'; //状态
  clearable?: boolean; //是否清空
  password?: boolean; //密码框
  showCount?: boolean; //是否带数字展示
  disabled?: boolean; //是否可编辑
}

const prefixCls = 'orange-input';

const Input: React.FC<InputProps> = (props) => {
  const {
    classname,
    size,
    prepand,
    append,
    status,
    clearable,
    password,
    showCount,
    disabled,
    ...restProps
  } = props;

  const classes = classNames(prefixCls, classname, {
    [`orange-input-${size}`]: size,
    [`orange-input-password`]: password,
    [`orange-input-prepand`]: prepand,
    [`orange-input-append`]: append || showCount,
    // [`orange-input-${status}`]: status,
    [`orange-input-clearable`]: clearable,
    [`orange-input-show-number`]: showCount,
    [`orange-input-disabled`]: disabled,
  });

  //判断是否存在前置后置
  const wrapperClassName = `${prefixCls}-group-wrapper`;
  const inputPrependClassName = classNames('orange-input-wrapper-prepand', {
    [`orange-input-group-addon`]: prepand,
  });
  const inputAppendClassName = classNames('orange-input-wrapper-append', {
    [`orange-input-group-addon`]: append,
  });

  let numberSpan = classNames('orange-input-wrapper-append', {
    [`orange-input-show-count-suffix`]: showCount,
  });

  let [valueLen, setValueLen] = useState(0);

  //输入
  const handleOnInput = (e: any) => {
    console.log(e.target.value);
    //获取输入元素的长度
    let len: number = e.target.value.length;
    setValueLen(len);
  };
  //带数字展示

  //clearable
  let inputClearAbleClassName = classNames('orange-input-wrapper-append', {
    [`orange-input-span-clearable`]: clearable,
  });
  let isShowClearAble = clearable && valueLen;
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
  //ref
  const inputRef = useRef();

  //清空输入框的值
  const handleClear = (e: any) => {
    console.log(inputRef, 'inputRef');
    inputRef.current.value = '';
    setValueLen(0);
  };

  return (
    <>
      {/* <div className="orange-input-group-wrapper">
        <input className={classes} type="text" />
      </div> */}

      <div className={wrapperClassName} style={props.style}>
        {prepand && <span className={`${inputPrependClassName}`}>{prepand}</span>}
        <input
          className={classes}
          type={props.password ? 'password' : 'text'}
          onInput={handleOnInput}
          disabled={disabled}
          maxLength={props.maxLength}
          minLength={props.minLength}
          ref={inputRef}
        />
        {append && <span className={`${inputAppendClassName}`}>{append}</span>}
        {!!isShowClearAble && (
          <span className={`${inputClearAbleClassName}`} onClick={handleClear}>
            {clearSvg}
          </span>
        )}
        {showCount && (
          <span className={numberSpan}>
            <span>
              {valueLen}/{props.maxLength}
            </span>
          </span>
        )}
      </div>

      {/* {hasAddon && addonElement} */}

      {/* {showCount && showCountElement} */}

      {/* {password ?? (
        <span className="orange-input-password">
          <span className="orange-input-append">X</span>
        </span>
      )} */}

      {/* {
        <span className="orange-input-wrapper orange-input-group">
          {prepand ?? <span className="orange-input-group-prepand">prepand</span>}
          <span className="orange-input-group-wrapper">
            <input className={classes} type="text" />
            {append ?? <span className="orange-input-group-append">append</span>}
          </span>
        </span>
      } */}
    </>
  );
};

Input.defaultProps = {
  size: 'default',
  password: false,
  prepand: '',
  append: '',
  showCount: false,
};

export default Input;
