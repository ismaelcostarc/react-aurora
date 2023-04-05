import React from 'react';
import styles from './ALoading.module.scss';
import '../../assets/css/index.css';
import { Color } from '../../types';
import styled from 'styled-components';

type LoadingType = 'ring' | 'spinner' | 'roller' | 'ellipsis';

interface ALoadingProps {
  /**
   * The type of Loading format.
   */
  type?: LoadingType;
  color?: Color;
}

export const ALoading = ({ type, color }: ALoadingProps) => {
  const styleEllipsis = {
    background: `var(--${color})`,
  };

  const styleRing = {
    borderColor: `var(--${color}) transparent transparent transparent`,
  };

  const DivWithAfterBackground = styled.div`
    &:after {
      background: var(--${color});
    }
  `;

  return type === 'ring' ? (
    <div className={styles.ring} style={styleRing}>
      <div style={styleRing} />
      <div style={styleRing} />
      <div style={styleRing} />
      <div style={styleRing} />
    </div>
  ) : type === 'spinner' ? (
    <div className={styles.spinner}>
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
    </div>
  ) : type === 'roller' ? (
    <div className={styles.roller}>
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
      <DivWithAfterBackground />
    </div>
  ) : type === 'ellipsis' ? (
    <div className={styles.ellipsis}>
      <div style={styleEllipsis}></div>
      <div style={styleEllipsis}></div>
      <div style={styleEllipsis}></div>
      <div style={styleEllipsis}></div>
    </div>
  ) : (
    <></>
  );
};

ALoading.defaultProps = {
  type: 'ring',
  color: 'black',
};
