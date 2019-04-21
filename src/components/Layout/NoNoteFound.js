import React from 'react';
import styles from './index.module.css';

const NoNoteFound = () => {
  return (
    <div className={styles.NotFound}>
      <p>Look like you didn't have any Note yet.</p>
      <p>Why not you try to create some?</p>
      <p>This will make your schedule more effective!!!</p>
      <p>So let's Get Started</p>
    </div>
  );
}

export default NoNoteFound;