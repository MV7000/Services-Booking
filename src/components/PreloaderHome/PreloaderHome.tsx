import { useEffect } from 'react';
import styles from './preloader.module.css';

import logoSvg from '../../../public/logo.svg';
import Image from 'next/image';
import { animation } from '@/app/functions/animation';

const PreloaderHome = () => {
  useEffect(() => {
    animation();
    sessionStorage.setItem('preloader', 'false');
  }, []);

  return (
    <div className={styles.PreloaderWrapper}>
      <div className={styles.loaderTitle}>
        <Image src={logoSvg} priority alt='logo' />
        <p>Our Services</p>
      </div>
      <div className={styles.preloaderItem}>Quality</div>
      <div className={styles.preloaderItem}>Service</div>
      <div className={styles.preloaderItem}>Result</div>
    </div>
  );
};

export default PreloaderHome;
