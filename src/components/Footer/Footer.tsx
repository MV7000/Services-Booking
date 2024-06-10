'use client';
import { ParticlesElement } from './Particles/Particles';

import phone from '../../../public/phone.png';
import mail from '../../../public/email.png';
import linkedin from '../../../public/linkedin.png';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className='flex items-center justify-evenly h-[15vh] z-50 sticky bottom-0 left-0 bg-transparent dark:text-[var(--yellow)] border-2 border-cyan-700 shadow-[5px_-5px_27px_var(--sky)]'>
        <ParticlesElement />
        <div className='flex items-center justify-center gap-12 w-full'>
          <a href='mailto:wladmag82@gmail.com'>
            <Image
              width={40}
              height={40}
              priority
              src={mail}
              alt='mail logo'
              className='shadow-[3px_3px_3px_var(--darkSky)] rounded-xl hover:-translate-y-1 hover:shadow-[5px_5px_3px_var(--darkSky)] duration-300'
            />
          </a>
          <Link href='tel:+380673327000'>
            <Image
              width={40}
              height={40}
              priority
              src={phone}
              alt='phone logo'
              className=' w-10 h-10 shadow-[3px_3px_3px_var(--darkSky)] rounded-3xl hover:-translate-y-1 hover:shadow-[5px_5px_3px_var(--darkSky)] duration-300'
            />
          </Link>
          <Link
            href='https://www.linkedin.com/in/volodymyr-magera-a60a0827a/'
            target='blank'
            className='shadow-[3px_3px_3px_var(--darkSky)] rounded-xl hover:-translate-y-1 hover:shadow-[5px_5px_3px_var(--darkSky)] duration-300'
          >
            <Image
              width={40}
              height={40}
              priority
              src={linkedin}
              alt='linkedin logo'
            />
          </Link>
        </div>
        <div className='absolute bottom-0 text-[var(--darkSky)] text-[calc(var(--index)*.6)]'>
          © 2024 Lutsk Ukraine, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
