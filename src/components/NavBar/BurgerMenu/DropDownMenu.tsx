'use client';
import Link from 'next/link';
import { FC } from 'react';

type DropDownProps = {
  setOpen: (value: boolean) => void;
};

const DropDownMenu: FC<DropDownProps> = ({ setOpen }) => {
  return (
    <div className='w-[70%] h-full absolute top-0 flex items-center justify-center sm:hidden  px-10 z-50 bg-white rounded-2xl translate-x-0'>
      <ul className='flex items-center justify-center transition-all duration-1000 flex-col smLarge:flex-row gap-[3vh] smLarge:gap-[5vw] list-none font-[Montserrat] font-bold text-[calc(var(--index))] text-[var(--lavender)] cursor-pointer translate-x-0'>
        <Link href='/' onClick={() => setTimeout(() => setOpen(false), 500)}>
          <li
            className='relative text-[var(--lavender)] dark:text-[var(--yellow)] cursor-pointer
                  active:text-[var(--purpleLight)] hover:text-[var(--purpleLight)]
                  before:content-[""] before:absolute before:bottom-[-3px]
                   before:w-0 before:h-[2px] before:bg-[var(--purpleLight)] 
                before:transition-[0.5s] 
                  hover:before:content-[""] hover:before:absolute hover:before:bottom-[-3px] hover:before:w-[100%]
                  hover:before:h-[2px]'
          >
            Home
          </li>
        </Link>
        <Link
          href='/about'
          onClick={() => setTimeout(() => setOpen(false), 500)}
        >
          <li
            className='relative text-[var(--lavender)] dark:text-[var(--yellow)] cursor-pointer
                  active:text-[var(--purpleLight)] hover:text-[var(--purpleLight)]
                  before:content-[""] before:absolute before:bottom-[-3px]
                   before:w-0 before:h-[2px] before:bg-[var(--purpleLight)] 
                before:transition-[0.5s] 
                  hover:before:content-[""] hover:before:absolute hover:before:bottom-[-3px] hover:before:w-[100%]
                  hover:before:h-[2px]'
          >
            About Project
          </li>
        </Link>
        <Link
          href='/services/1'
          onClick={() => setTimeout(() => setOpen(false), 500)}
        >
          <li
            className='relative text-[var(--lavender)] dark:text-[var(--yellow)] cursor-pointer
                  active:text-[var(--purpleLight)] hover:text-[var(--purpleLight)]
                  before:content-[""] before:absolute before:bottom-[-3px]
                   before:w-0 before:h-[2px] before:bg-[var(--purpleLight)] 
                before:transition-[0.5s] 
                  hover:before:content-[""] hover:before:absolute hover:before:bottom-[-3px] hover:before:w-[100%]
                  hover:before:h-[2px]'
          >
            Services
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DropDownMenu;
