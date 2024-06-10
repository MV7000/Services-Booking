import Image from 'next/image';
import { ServiceCardListProps } from '../type';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
// import getBase64 from '@/app/functions/GetData/getBase64';

interface ServiceCardProps {
  dataCardsProps: ServiceCardListProps;
}

const ServiceCard = async ({ dataCardsProps }: ServiceCardProps) => {
  const { contactPerson, address, name, servicesLists, images, id, email } =
    dataCardsProps;

  // const myBlurDataUrl = await getBase64(images[0].url)

  return (
    <Link
      href={'/service&about/' + id}
      style={{ backgroundColor: `${servicesLists[0].color.hex}` }}
      className='flex items-center justify-between flex-col overflow-hidden w-[calc(var(--index)*12)] h-[calc(var(--index)*15)] border-2 hover:shadow-[7px_7px_10px_var(--lavender)] active:shadow-[1px_1px_5px_var(--lavender)] rounded-2xl shadow-[3px_3px_12px_var(--lavender)] hover:-translate-y-1 active:translate-y-3 transition-[1s] cursor-pointer'
    >
      <div className='w-[calc(var(--index)*11.8)] h-[calc(var(--index)*7)]'>
        <Image
          className='w-[100%] h-[100%] object-cover'
          width={150}
          height={100}
          src={images[0].url}
          alt='imageCard'
          // blurDataURL={myBlurDataUrl}
          // placeholder='blur'
          // loading='lazy'
        />
        <div className='ml-1'>
          <Badge
            variant='secondary'
            className='text-[var(--sky)] text-[calc(var(--index)*.65)] hidden md:inline-block'
          >
            {servicesLists[0].name}
          </Badge>
        </div>
      </div>
      <div className='flex items-center justify-evenly flex-col'>
        <h2 className='font-lobster text-[calc(var(--index)*.9)]'>
          <b>Company : </b>
          {name}
        </h2>
        <p className='fotn-montserrat text-[calc(var(--index)*.65)] text-[var(--sky)]'>
          <b>Contact:</b> {contactPerson}
        </p>
        <p className='fotn-montserrat text-[calc(var(--index)*.65)] p-2'>
          {address}
        </p>
        <p className='fotn-montserrat text-[calc(var(--index)*.5)] sm:text-[calc(var(--index)*.65)] p-2'>
          {email}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
