import React from 'react';
import classNames from 'classnames';
import './input.scss';

export interface InputProps {
  classname?: string; //类名
  size?: 'larget' | 'default' | 'small'; //大小
  prefix?: React.ReactNode; //前缀
  suffix?: React.ReactNode; //后缀
  status?: 'error' | 'default' | 'warning'; //状态
  clearable?: boolean; //是否清空
  password?: boolean; //密码框
}

const Input: React.FC<InputProps> = (props) => {
  const { classname, size, prefix, suffix, status, clearable, password, ...restProps } = props;

  const classes = classNames('input', classname, {
    [`input-${size}`]: size,
    [`input-password`]: password,
    [`input-${prefix}`]: prefix,
    [`input-${suffix}`]: suffix,
    [`input-${status}`]: status,
    [`input-${clearable}`]: clearable,
  });

  return (
    <div className="orange-space-item">
      <span className={classes}>
        <input className="orange-input" type="text" />

        {password ?? (
          <span className="orange-input-password">
            <span className="orange-input-suffix">X</span>
          </span>
        )}
      </span>
    </div>
  );
};

export default Input;
