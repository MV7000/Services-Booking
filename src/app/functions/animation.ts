import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const animation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  tl.set('.preloader_preloaderItem__1ZO2Y', { yPercent: -100 })
    .set('.preloader_loaderTitle__ehm9X', {
      scale: 0.2,
    })
    .to('.preloader_preloaderItem__1ZO2Y', {
      yPercent: 0,
      duration: 1.2,
      stagger: 0.3,
      opacity: 1,
    })
    .to('.preloader_preloaderItem__1ZO2Y', {
      yPercent: 100,
      duration: 1.2,
      stagger: 0.3,
    })
    .set('.preloader_preloaderItem__1ZO2Y', {
      yPercent: -100,
    })
    .to(
      '.preloader_loaderTitle__ehm9X',
      {
        opacity: 1,
        duration: 2,
        scale: 1.5,
      },
      '-=1.2'
    )
    .set('.preloader_loaderTitle__ehm9X', {
      yPercent: -100,
    })
    .to('.preloader_PreloaderWrapper___K9Am', {
      yPercent: -100,
      duration: 1.2,
    });
};
