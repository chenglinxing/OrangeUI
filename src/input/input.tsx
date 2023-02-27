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
    [`orange-input-${status}`]: status,
    [`orange-input-${clearable}`]: clearable,
    [`orange-input-show-number`]: showCount,
    [`orange-input-disabled`]: disabled,
  });

  //判断是否存在前置后置
  const hasAddon = !!(append || prepand);
  let addonElement: any;
  if (hasAddon) {
    const wrapperClassName = `${prefixCls}-group-wrapper`;
    const inputPrependClassName = classNames('orange-input-wrapper-prepand', {
      [`orange-input-group-addon`]: prepand,
    });
    const inputAppendClassName = classNames('orange-input-wrapper-append', {
      [`orange-input-group-addon`]: append,
    });
    addonElement = (
      <div className={wrapperClassName} style={props.style}>
        {prepand && <span className={`${inputPrependClassName}`}>{prepand}</span>}
        <input className={classes} type="text" />
        {append && <span className={`${inputAppendClassName}`}>{append}</span>}
      </div>
    );
  }

  //带数字展示
  let showCountElement: any;
  if (showCount) {
    let spanClassName = classNames('orange-input-group-wrapper', {
      [`orange-input-disabled`]: disabled,
    });
    let numberSpan = classNames('orange-input-wrapper-append', {
      [`orange-input-show-count-suffix`]: showCount,
    });
    let [valueLen, setValueLen] = useState(0);

    const handleOnInput = (e: any) => {
      console.log(e.target.value);
      //获取输入元素的长度
      let len: number = e.target.value.length;
      setValueLen(len);
    };

    showCountElement = (
      <>
        <span className={spanClassName}>
          <input
            className={classes}
            maxLength={props.maxLength}
            minLength={props.minLength}
            onInput={handleOnInput}
            type="text"
            disabled={disabled}
          />
          <span className={numberSpan}>
            <span>
              {valueLen}/{props.maxLength}
            </span>
          </span>
        </span>
      </>
    );
  }
  return (
    <>
      <div className="orange-input-group-wrapper">
        <input className={classes} type="text" />
      </div>

      {hasAddon && addonElement}

      {showCount && showCountElement}

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
