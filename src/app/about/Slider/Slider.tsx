'use client';
import { useEffect, useState } from 'react';
import getSliderPhotos from '@/app/functions/GetData/getSliderPhotos';
import { dataPhotosProps } from '@/components/type';
import HeroSlider, { Slide } from 'hero-slider';
import 'hero-slider/dist/index.css';

const Slider = () => {
  const [allPhotos, setAllPhotos] = useState<dataPhotosProps>();

  useEffect(() => {
    getSliderPhotos().then(res => setAllPhotos(res));
  }, []);

  return (
    <section className='-z-1 overflow-hidden max-h-[85vh]'>
      <div className=''>
        <HeroSlider
          className='w-[100vw]'
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
          }}
        >
          {allPhotos?.assets.map((elem, index) => (
            <div key={index}>
              <Slide
                key={index}
                shouldRenderMask
                label='Giau Pass - Italy'
                background={{ backgroundImageSrc: elem.url }}
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </section>
  );
};

export default Slider;
