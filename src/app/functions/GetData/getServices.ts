import request, { gql } from 'graphql-request';
import { dataServicesProps } from '../../../components/type';

const dataUrl =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_URL_SERVICES_KEY +
  '/master';

const getServices = async () => {
  const query = gql`
    query getAllServices {
      servicesLists {
        id
        name
        icon {
          url
        }
        color {
          hex
        }
      }
    }
  `;

  const result: dataServicesProps = await request(dataUrl, query);
  return result;
};

export default getServices;
