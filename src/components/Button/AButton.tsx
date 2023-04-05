import React, { useMemo } from 'react';
import styles from './AButton.module.scss';
import '../../assets/css/index.css';
import { Size } from '../../types';

interface AButtonProps {
  /**
   * Button type.
   */
  type?: 'default' | 'warning' | 'black' | 'outlined';
  /**
   * The disabled version of the button.
   */
  disabled?: boolean;
  /**
   * Button Size.
   */
  size?: Size;
  /**
   * Length of the button, whether it will be the size of the child content, or will it occupy the entire line block.
   */
  width?: 'children' | 'block';
  /**
   * Callback function that will be triggered when clicking on the button.
   */
  clickCb?: () => void;
  children: React.ReactNode;
}

export const AButton = ({ type, disabled, size, width, clickCb, children }: AButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    clickCb && clickCb();
  };

  const className = useMemo(
    () => `
  ${styles.button} 
  ${styles['button--' + type]} 
  ${styles['button--' + size]} 
  ${styles['button--' + width]} 
  ${disabled && styles['button--disabled']} 
  `,
    [type],
  );

  return (
    <button className={className} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  );
};

AButton.defaultProps = {
  type: 'default',
  disabled: false,
  size: 'medium',
  width: 'children',
};
