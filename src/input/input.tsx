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
  showpassword?: boolean; //显示密码
  showcount?: boolean; //是否带数字展示
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
    showcount,
    disabled,
    showpassword,
    ...restProps
  } = props;

  const classes = classNames(prefixCls, classname, {
    [`orange-input-${size}`]: size,
    [`orange-input-password`]: password,
    [`orange-input-prepand`]: prepand,
    [`orange-input-append`]: append || showcount,
    // [`orange-input-${status}`]: status,
    [`orange-input-clearable`]: clearable,
    [`orange-input-show-number`]: showcount,
    [`orange-input-disabled`]: disabled,
  });

  //判断是文本还是密码
  let isPassword = password;
  let [typePassword, setTypePassword] = useState(isPassword);

  //判断是否存在前置后置
  const wrapperClassName = `${prefixCls}-group-wrapper`;
  const inputPrependClassName = classNames('orange-input-wrapper-prepand', {
    [`orange-input-group-addon`]: prepand,
  });
  const inputAppendClassName = classNames('orange-input-wrapper-append', {
    [`orange-input-group-addon`]: append,
  });

  let numberSpan = classNames('orange-input-wrapper-append', {
    [`orange-input-show-count-suffix`]: showcount,
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
  let inputClearAbleClassName = classNames('', {
    [`orange-input-span-clearable`]: clearable,
  });
  //是否展示清除图标
  let isShowClearAble = clearable && !!valueLen;

  //是否展示展示或隐藏密码的图标
  let isShowPasswordIcon = showpassword && !!valueLen;
  //只要有内容  默认不展示密码
  let [hidePassword, setHidePassword] = useState(false);
  let inputPasswordClassName = classNames('', {
    [`orange-input-span-password`]: showpassword,
  });

  //ref
  const inputRef = useRef();

  //清空输入框的值
  const handleClear = (e: any) => {
    console.log(inputRef, 'inputRef');
    inputRef.current.value = '';
    setValueLen(0);
  };

  //切换是否展示密码
  const handleToggleShowPassword = (e: any) => {
    setHidePassword(!hidePassword);
    setTypePassword(!typePassword);
  };

  let hidePasswordSvg = (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="eye-invisible"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
      <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
    </svg>
  );

  let showPasswordSvg = (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="eye"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
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

  return (
    <>
      {/* <div className="orange-input-group-wrapper">
        <input className={classes} type="text" />
      </div> */}

      <div className={wrapperClassName} style={props.style}>
        {prepand && <span className={`${inputPrependClassName}`}>{prepand}</span>}
        <input
          className={classes}
          type={typePassword ? 'password' : 'text'}
          onInput={handleOnInput}
          disabled={disabled}
          maxLength={props.maxLength}
          minLength={props.minLength}
          ref={inputRef}
          readOnly={props.readOnly}
        />
        {append && <span className={`${inputAppendClassName}`}>{append}</span>}
        {/* 清除 */}
        {!!isShowClearAble && (
          <span className={`${inputClearAbleClassName}`} onClick={handleClear}>
            {clearSvg}
          </span>
        )}
        {/* 密码 */}
        {!!isShowPasswordIcon && (
          <span className={`${inputPasswordClassName}`} onClick={handleToggleShowPassword}>
            {hidePassword ? showPasswordSvg : hidePasswordSvg}
          </span>
        )}
        {showcount && (
          <span className={numberSpan}>
            <span>
              {valueLen}/{props.maxLength}
            </span>
          </span>
        )}
      </div>

      {/* {hasAddon && addonElement} */}

      {/* {showcount && showCountElement} */}

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
  showcount: false,
  showpassword: false,
};

export default Input;
