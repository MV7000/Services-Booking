import { dataServicesProps } from '../type';
import { AnimatedTooltip } from '../ui/animated-tooltip';

type ServicesListsProps = {
  dataServices: dataServicesProps;
  side?: string;
};

type ServicesType = {
  id: number | string;
  name: string;
  designation: string;
  image: string;
  color: string;
};

const ServicesList = ({ dataServices, side }: ServicesListsProps) => {
  const dataAll = dataServices.servicesLists;
  console.log(dataAll);
  const services: ServicesType[] = dataAll.map(elem => {
    return {
      id: elem.id,
      name: elem.name,
      designation: '',
      image: elem.icon.url,
      color: elem.color.hex,
    };
  });

  console.log(services);

  if (!dataServices) {
    return <h2> There aren`t any data </h2>;
  }

  return (
    <div className='flex justify-evenly items-center flex-wrap gap-3 mx-auto mt-6 cursor-pointer'>
      <AnimatedTooltip items={services} />
    </div>
  );
};

export default ServicesList;
