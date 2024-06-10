import { ServiceDetailedProps } from '@/components/type';
import request, { gql } from 'graphql-request';

const dataUrl =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_URL_SERVICES_KEY +
  '/master';

export const getDetailedService = async (id: string) => {
  const data =
    gql`
    query getDetailedService {
        serviceCard(where: {id: "` +
    id +
    `"}) {
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
            id
          }
        }
      }
`;

  const result: ServiceDetailedProps = await request(dataUrl, data);
  return result;
};

export default getDetailedService;
