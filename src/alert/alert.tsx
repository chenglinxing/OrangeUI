import React from 'react';
import classNames from 'classnames';
import './alert.scss';

export interface AlertProps {
  //类名
  className?: string;
  //   内容
  description?: React.ReactNode;
  //显示类型
  type?: 'success' | 'info' | 'warning' | 'error';
  //  是否显示关闭
  closable?: boolean;
  //警告提示的辅助性文字介绍
  closeText?: React.ReactNode;
  //警告提示内容
  message?: React.ReactNode;
  //是否显示辅助图标
  icon?: React.ReactNode;
  //关闭事件
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

interface CloseProps {
  //是否关闭
  isClosable: boolean;
  //关闭的文字
  closeText: AlertProps['closeText'];
  //关闭事件
  handleClose: AlertProps['onClose'];
}

/**
 * 关闭
 * @param props
 */
const CloseBtn: React.FC<CloseProps> = (props) => {
  const { isClosable, handleClose, closeText } = props;
  return isClosable ? (
    <>
      <button onClick={handleClose} className="alert-close-icon">
        {closeText ? <span className="alert-close-text">{closeText}</span> : 'x'}
      </button>
    </>
  ) : null;
};

/**
 * Alert组件
 * @param props
 * @returns
 */
const Alert: React.FC<AlertProps> = (props) => {
  const [closed,setClosed] = React.useState(false)

  const { type, closable, icon, message, closeText, description, className, ...restProps } = props;
  const classes = classNames('alert', className, { [`alert-${type}`]: type });

  //判断是否显示关闭按钮
  const isClosable = closeText ? true : closable;

  //判断是否展示icon
  const isShowIcon = !!icon;

  //关闭事件
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    //关闭该alert
    setClosed(true)
    //传递给父组件
    props.onClose?.(e);
  };
  return (
    <>
      { !closed && <div className={classes}>
        {isShowIcon && <span className="alert-icon">{icon}</span>}
        <div className="alert-content">
          <div className="alert-message">{message}</div>
          <div className="alert-description">{description}</div>
        </div>
        {<CloseBtn isClosable={!!isClosable} closeText={closeText} handleClose={handleClose} />}
      </div>}
    </>
  );
};

Alert.defaultProps = {
  type: 'info',
};

export default Alert;
