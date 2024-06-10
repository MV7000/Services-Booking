'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'animate.css';

import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import VivusSvgComponent from '../Footer/VivusSvg/VivusSvg';

const HomeElement = () => {
  const targetText = useRef(null);

  function autoScrollDown() {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (targetText.current !== null) {
      window.scrollBy(0, 1.8);
    }
    if (!bottom) {
      setTimeout(autoScrollDown, 50);
    }
  }

  useEffect(() => {
    let scrollText = setTimeout(autoScrollDown, 5000);
    return () => {
      clearTimeout(scrollText);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (targetText.current) {
      gsap.set(targetText.current, { visibility: 'visible' });
      const text = new SplitType(targetText.current);
      gsap.from(text.chars, {
        yPercent: -50,
        opacity: 0,
        stagger: {
          from: 'start',
          each: 0.05,
        },
        duration: 2,
        delay: 5,
        scale: 0.5,
        ease: 'expo.out',
      });
    }
  }, [targetText]);

  return (
    <main>
      <section className='py-12 flex items-center justify-center flex-col'>
        <VivusSvgComponent />
        <p
          ref={targetText}
          className='w-[70%] my-5 mx-auto font-black font-montserrat text-[calc(var(--index)*1.5)] text-center [text-shadow:3px_3px_3px_var(--darkSky)] text-white italic reveal-text'
        >
          This project is developed as a full-stack project. NextJS, TypeScript,
          TailwindCSS, GSAP are used on the front-end side. The backend is
          implemented using Hygraph - the excellent next generation GraphQL
          Headless CMS (liked it more than Firebase for this purposes). The
          project implements the possibility of registering for a certain
          service using a calendar and a booking timer. Reservations made by the
          client can be viewed in the client&apos;s personal cabinet. The
          possibility of booking services and entering the user&apos;s account
          occurs after registration using a password, Google account, Linkedin,
          etc.
          <br />
          <span className='text-[var(--darkBlue)] not-italic text-[calc(var(--index)*1.1)] [text-shadow:3px_3px_3px_var(--rose)]'>
            Please, enjoy viewing the project as much as I enjoy making it! :)
          </span>
        </p>
      </section>
    </main>
  );
};

export default HomeElement;
