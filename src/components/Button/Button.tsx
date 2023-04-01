import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  width?: string;
  clickCb?: () => void;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    props.clickCb && props.clickCb();
  };

  return (
    <button className={styles.button} disabled={props.disabled} onClick={handleClick}>
      {props.loading ? 'loading' : props.children}
    </button>
  );
};
