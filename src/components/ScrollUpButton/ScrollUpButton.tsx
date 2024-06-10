'use client';
import { useEffect, useState } from 'react';
import drugUp from '../../../public/scroll-up.png';
import Image from 'next/image';

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 180) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <Image
          src={drugUp}
          width={70}
          height={70}
          alt='scroll on top'
          id={'arrow-up'}
          onClick={() => handleClick()}
          aria-label='Скролл вгору'
          className='fixed bottom-36 right-5 cursor-pointer animate animate-pulse repeat-infinite'
        />
      )}
    </>
  );
};

export { ScrollUpButton };
