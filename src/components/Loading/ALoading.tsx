import React from 'react';
import styles from './ALoading.module.scss';
import '../../assets/css/index.css';
import { Color } from '../types';

type LoadingType = 'ring' | 'spinner' | 'roller' | 'ellipsis';

interface ALoadingProps {
  type?: LoadingType;
  color?: Color;
}

export const ALoading = ({ type, color }: ALoadingProps) => {
  const style = {
    background: `var(--${color})`,
  };

  const styleRing = {
    borderColor: `var(--${color}) transparent transparent transparent`,
  };

  return type === 'ring' ? (
    <div className={styles.ring} style={styleRing}>
      <div style={styleRing}></div>
      <div style={styleRing}></div>
      <div style={styleRing}></div>
      <div style={styleRing}></div>
    </div>
  ) : type === 'spinner' ? (
    <>
      <div className={styles.spinner}>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
      </div>
    </>
  ) : type === 'roller' ? (
    <div className={styles.roller} style={style}>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
    </div>
  ) : type === 'ellipsis' ? (
    <div className={styles.ellipsis} style={style}>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
    </div>
  ) : (
    <></>
  );
};

ALoading.defaultProps = {
  type: 'ring',
  color: 'dark-blue',
};
