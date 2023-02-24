import React, { InputHTMLAttributes, ReactElement } from 'react';
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
}

const prefixCls = 'orange-input';

const Input: React.FC<InputProps> = (props) => {
  const { classname, size, prepand, append, status, clearable, password, ...restProps } = props;

  const classes = classNames(prefixCls, classname, {
    [`orange-input-${size}`]: size,
    [`orange-input-password`]: password,
    [`orange-input-prepand`]: prepand,
    [`orange-input-append`]: append,
    [`orange-input-${status}`]: status,
    [`orange-input-${clearable}`]: clearable,
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

  return (
    <>
      <div className="orange-input-group-wrapper">
        <input className={classes} type="text" />
      </div>

      {hasAddon && addonElement}

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
};

export default Input;
