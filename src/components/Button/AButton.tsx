import React, { useMemo } from 'react';
import styles from './AButton.module.scss';
import '../../assets/css/index.css';

interface ButtonProps {
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  width?: string;
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
};
