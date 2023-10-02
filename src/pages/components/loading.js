import React from 'react';
import styles from '../../styles/components/loading.module.css';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className={styles.loadingScreen}>
        <Image
        alt=''
        width={50}
        height={50}
        src={'/teallogo.png'}>

        </Image>
      <div className={styles.loadingText}>Loading... :)</div>
    </div>
  );
};

export default Loading;
