'use client';

import Image from 'next/image';
import logo from '../../../public/logo.svg';

import Link from 'next/link';
import { ModeToggle } from '@/app/ThemeProvider/ModeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const NavBar = () => {
  const { data } = useSession();
  const [userLogin, setUserLogin] = useState<any>();

  useEffect(() => {
    if (data !== null) setUserLogin(data);
  }, [data]);

  return (
    <header className='sticky top-0 left-0 z-50 drop-shadow-xl bg-white dark:bg-[var(--lavender)] overflow-hidden'>
      <div className='flex items-center justify-between py-[3vh] px-[10vw] shadow-2xl border-b-2 '>
        <Link href='/'>
          <Image
            priority
            src={logo}
            alt='header logo'
            onClick={() => setTimeout(() => location.reload(), 1000)}
          />
        </Link>
        <div className='burgerWrapper'>
          <BurgerMenu />
        </div>
        <div className='hidden sm:inline-block'>
          <ul className='flex items-center justify-evenly gap-[5vw] list-none font-[Montserrat] font-bold text-[calc(var(--index))] text-[var(--lavender)] cursor-pointer'>
            <Link href='/'>
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
            <Link href='/about'>
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
            <Link href='/services/1'>
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
        {userLogin ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={'https://github.com/shadcn.png'}
                width={40}
                height={40}
                className='rounded-full'
                alt='header logo'
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='rounded-xl'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/my-cabinet'>My CABINET</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  signOut();
                  setTimeout(() => (location.href = '/'), 1000);
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            onClick={() => signIn('descope', { callbackUrl: '/services/1' })}
            className='rounded-xl dark:bg-white dark:hover:bg-[var(--brightPurple)]'
          >
            Sign In / Sign Up
          </Button>
        )}

        <ModeToggle />
      </div>
    </header>
  );
};

export default NavBar;
