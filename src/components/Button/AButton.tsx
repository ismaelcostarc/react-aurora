import React, { useMemo } from 'react';
import styles from './AButton.module.scss';
import '../../assets/css/index.css';

interface ButtonProps {
  type?: 'default' | 'warning' | 'black' | 'outlined';
  disabled?: boolean;
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
  clickCb?: () => void;
  children: React.ReactNode;
}

export const AButton = (props: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    props.clickCb && props.clickCb();
  };

  const className = useMemo(
    () => `
  ${styles.button} 
  ${styles['button--' + props.type]} 
  ${styles['button--' + props.size]} 
  ${props.disabled && styles['button--disabled']} 
  `,
    [props.type],
  );

  return (
    <button className={className} disabled={props.disabled} onClick={handleClick}>
      {props.loading ? 'loading' : props.children}
    </button>
  );
};

AButton.defaultProps = {
  type: 'default',
  size: 'medium',
};
