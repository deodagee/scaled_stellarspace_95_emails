import React from 'react';
import styles from '../../styles/components/loading.module.css';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className={styles.loadingScreen}>
        <div>
        <Image
        alt=''
        width={50}
        height={50}
        src={'/teallogo.png'}>

        </Image>
        </div>
      <div className={styles.loadingText}>StellarSpace</div>
    </div>
  );
};

export default Loading;
