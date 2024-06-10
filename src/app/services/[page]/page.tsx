import ServiceCardList from '@/components/ServiceCardList/ServiceCardList';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import getServiceCards from '@/app/functions/GetData/getServiceCards';
import ServicesList from '@/components/ServicesList/ServicesList';
import getServices from '@/app/functions/GetData/getServices';

type ServicesPageProps = {
  params: {
    page: number;
  };
};

const ServicesPage = async ({ params }: ServicesPageProps) => {
  const dataServices = await getServices(),
    dataServiceCards = await getServiceCards(params.page);

  let prevPage = +params.page - 1,
    nextPage = +params.page + 1;

  return (
    <main className='mb-10'>
      <h1 className='[text-shadow:_3px_3px_5px_var(--lavender)] text-[calc(var(--index)*2)] font-lobster text-center '>
        Our Services
      </h1>
      <h2 className='[text-shadow:_3px_3px_5px_var(--lavender)] text-[var(--lavender)] text-[calc(var(--index)*1.5)] [word-spacing:1vw] font-vibes text-center'>
        Here is everething for YOU !
      </h2>
      <h5 className='text-[var(--lavender)] text-[calc(var(--index))] font-monteserrat text-center'>
        Choose the service you need
      </h5>

      <ServicesList side='' dataServices={dataServices} />

      <ServiceCardList dataServiceCards={dataServiceCards} />

      <Pagination className='mt-3'>
        <PaginationContent>
          {dataServiceCards.ordersCompletedConnection.pageInfo
            .hasPreviousPage && (
            <PaginationItem>
              <PaginationPrevious href={`/services/${prevPage}`} />
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLink href='/services/1/' isActive={params.page === 1}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='/services/2/' isActive={params.page === 2}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          {params.page < 3 && (
            <PaginationItem>
              <PaginationNext href={`/services/${nextPage}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </main>
  );
};

export default ServicesPage;
