import {
  OrdersCompletedConnectionProps,
  ServiceCardListProps,
} from '@/components/type';
import request, { gql } from 'graphql-request';

const dataUrl =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_URL_SERVICES_KEY +
  '/master';

export const getServiceCards = async (pageNumber: number) => {
  const data = gql`
    query MyQuery {
      
            ordersCompletedConnection (first: 3, orderBy: publishedAt_ASC, skip: ${
              (pageNumber - 1) * 3
            }) {
    aggregate {
      count
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
      endCursor
    }
  }
    serviceCards (first: 3, orderBy: publishedAt_ASC, skip: ${
      (pageNumber - 1) * 3
    }){
  name
  id
  about
  address
  contactPerson
  email
  images {
    url
  }
  servicesLists {
    color {
      hex
    }
    name
  }

}
    }
    
`;

  const result: {
    serviceCards: [ServiceCardListProps];
    ordersCompletedConnection: OrdersCompletedConnectionProps;
  } = await request(dataUrl, data);
  return result;
};

export default getServiceCards;
