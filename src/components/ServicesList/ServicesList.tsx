import { dataServicesProps } from '../type';
import Image from 'next/image';
import Link from 'next/link';

type ServicesListsProps = {
  dataServices?: dataServicesProps;
  side?: string;
};

const ServicesList = ({ dataServices, side }: ServicesListsProps) => {
  const dataAll = dataServices?.servicesLists;

  if (!dataServices) {
    return <h2> There aren`t any data </h2>;
  }

  return (
    <div className='flex justify-evenly items-center flex-wrap gap-3 mx-auto mt-6 cursor-pointer'>
      {dataAll?.map((elem: any) => {
        return (
          <Link href={'/search/' + elem.name} key={elem.id}>
            <div
              className='rounded-full w-32 text-center p-3 shadow-[5px_5px_3px_var(--lavender)] hover:-translate-y-1 hover:shadow-[1px_8px_8px_var(--lavender)] active:shadow-[1px_1px_3px_var(--lavender)] active:translate-y-2 transition-[.5s] '
              style={{ backgroundColor: `${elem.color.hex}` }}
            >
              <h2 className='text-[calc(var(--index)*.5)] font-montserrat font-bold '>
                {elem.name}
              </h2>
              <div className='flex items-center justify-center'>
                <Image
                  width={side ? 30 : 50}
                  height={side ? 30 : 50}
                  src={elem.icon.url}
                  alt={elem.name}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ServicesList;
