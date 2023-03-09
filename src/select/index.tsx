import React from 'react';
import classNames from 'classnames';
import './index';

type InputSize = 'lg' | 'default' | 'sm'; //大小
export interface SelectProps {
  classname?: string; // 类名
  size?: InputSize; //大小
  clearable?: boolean; //是否清空
  disabled?: boolean; //是否可编辑
  filterable?: boolean; //是否支持查询
}
