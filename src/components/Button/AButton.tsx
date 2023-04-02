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
   * Botão com animação de carregamento.
   */
  loading?: boolean;
  /**
   * Tamanho do botão.
   */
  size?: Size;
  /**
   * Callback que será disparado ao clicar no botão.
   */
  clickCb?: () => void;
  children: React.ReactNode;
}

export const AButton = (props: AButtonProps) => {
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
