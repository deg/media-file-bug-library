import React from 'react'
import styles from './styles.module.css'
import ico_cross from './img/cross.png';

export { ico_cross };

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
