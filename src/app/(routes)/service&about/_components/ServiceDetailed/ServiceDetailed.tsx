'use client';
import getDetailedService from '@/app/functions/GetData/getDetailedService';
import { ServiceDetailedProps } from '@/components/type';
import { Badge } from '@/components/ui/badge';
import { MailCheck, MapPin } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import OrderModal from './OrderModal/OrderModal';
import Image from 'next/image';

interface ServiceDetailsProps {
  serviceID: string;
}

const ServiceDetailed: FC<ServiceDetailsProps> = ({ serviceID }) => {
  const [detailedServiceCard, setDetailedServiceCard] =
    useState<ServiceDetailedProps>();

  useEffect(() => {
    getDetailedService(serviceID).then(res => {
      setDetailedServiceCard(res);
    });
  }, [serviceID]);

  return (
    detailedServiceCard && (
      <main
        className='dark:text-[white] text-indigo-950 py-[3vh] px-[5vw] font-montserrat'
        style={{
          backgroundColor:
            detailedServiceCard?.serviceCard?.servicesLists[0]?.color.hex,
        }}
      >
        <div className='flex items-center justify-center md:flex-row flex-col gap-[5vw] [text-shadow:3px_3px_5px_var(--lavender)]'>
          <div className='md:w-[35vw] md:h-[35vh] m-5'>
            <Image
              loading='lazy'
              className='h-[100%] w-[100%] object-cover rounded-full shadow-[7px_7px_25px_var(--lavender)]'
              width={150}
              height={100}
              src={detailedServiceCard?.serviceCard.images[0].url}
              alt={detailedServiceCard?.serviceCard.name}
              blurDataURL={detailedServiceCard?.serviceCard.images[0].url}
              placeholder='blur'
            />
          </div>
          <div className='w-[30vw] flex items-center justify-center flex-col gap-2 mb-10'>
            <h2 className='text-[calc(var(--index)*1.5)] font-bold font-lobster text-[var(--sky)] tracking-widest'>
              {detailedServiceCard?.serviceCard.name}
            </h2>
            <Badge className='bg-[var(--lavender)]'>
              {detailedServiceCard?.serviceCard?.servicesLists[0]?.name}
            </Badge>
            <div className='italic'>
              <span className='font-bold'>Contact : </span>
              {detailedServiceCard?.serviceCard?.contactPerson}
            </div>
            <div className='italic flex items-center justify-center gap-3'>
              <span className='font-bold'>
                <MapPin />{' '}
              </span>
              {detailedServiceCard?.serviceCard?.address}
            </div>
            <div className='italic flex items-center justify-center gap-3'>
              <span className='font-bold'>
                <MailCheck />
              </span>
              {detailedServiceCard?.serviceCard?.email}
            </div>
            <OrderModal
              serviceCard={detailedServiceCard}
              name={detailedServiceCard?.serviceCard.name}
            />
          </div>
        </div>
        <p className='md:px-20 text-center dark:text-[var(--purple)] text-[var(--darkSky)] font-semibold text-[calc(var(--index)*1.2)] dark:[text-shadow:3px_3px_4px_white]'>
          {detailedServiceCard?.serviceCard.about}
        </p>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-3 mt-5 mx-auto'>
          {detailedServiceCard?.serviceCard?.images.map((elem, index) => {
            return (
              <div key={index} className='md:w-[20vw] md:h-[30vh]'>
                <Image
                  width={150}
                  height={100}
                  className='w-[100%] h-[100%] object-cover rounded-3xl shadow-[5px_5px_12px_black]'
                  src={elem.url}
                  alt='service image'
                  blurDataURL={elem.url}
                  placeholder='blur'
                />
              </div>
            );
          })}
        </div>
      </main>
    )
  );
};

export default ServiceDetailed;
