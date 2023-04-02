import React, { useMemo } from 'react';
import styles from './AButton.module.scss';
import '../../assets/css/index.css';
import { Size } from '../../types';

interface AButtonProps {
  /**
   * O tipo de botão.
   */
  type?: 'default' | 'warning' | 'black' | 'outlined';
  /**
   * A versão desabilitada do botão.
   */
  disabled?: boolean;
  /**
   * Tamanho do botão.
   */
  size?: Size;
  /**
   * Comprimento do botão, se ele será do tamanho do conteúdo filho, ou irá ocupar o block de linha inteiro.
   */
  width?: 'children' | 'block';
  /**
   * Callback que será disparado ao clicar no botão.
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
