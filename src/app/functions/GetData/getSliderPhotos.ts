import { dataPhotosProps } from '@/components/type';
import request, { gql } from 'graphql-request';

const dataUrl =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_URL_SERVICES_KEY +
  '/master';

const getSliderPhotos = async () => {
  const query = gql`
    query CardsPhotos {
      assets(last: 25) {
        url
        id
        fileName
      }
    }
  `;

  const result: dataPhotosProps = await request(dataUrl, query);
  return result;
};

export default getSliderPhotos;
