import ServiceCard from '../ServiceCard/ServiceCard';
import { ServiceCardListProps } from '../type';

type ServiceCardsListProps = {
  dataServiceCards: {
    serviceCards: [ServiceCardListProps];
  };
};

const ServiceCardList = async ({ dataServiceCards }: ServiceCardsListProps) => {
  if (!dataServiceCards.serviceCards.length) {
    return <h2> There aren`t any data </h2>;
  }

  return (
    <div className='flex items-center justify-center gap-12 mt-5 w-[80%] mx-auto flex-wrap'>
      {dataServiceCards.serviceCards.map(elem => {
        return (
          <div key={elem.id}>
            <ServiceCard dataCardsProps={elem} />
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCardList;
