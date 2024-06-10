import { ServiceCardListProps } from '@/components/type';
import request, { gql } from 'graphql-request';

const dataUrl =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_URL_SERVICES_KEY +
  '/master';

export const getCategoryCards = async (category: string) => {
  const data =
    gql`
    query CategoryServiceList {
        serviceCards(where: {servicesLists_some: {name: "` +
    category +
    `"}}) {
          about
          address
          contactPerson
          email
          id
          name
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
  } = await request(dataUrl, data);
  return result;
};

export default getCategoryCards;
