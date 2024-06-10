import request, { gql } from 'graphql-request';

const dataUrl =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_URL_SERVICES_KEY +
  '/master';

export const getOrderedData = async (date: string) => {
  const data =
    gql`
    query getOrderedTime {
      ordersCompleted(where: {date: "` +
    date +
    `",orderStatus: ordered}) {
        time,
        date,
        name
      }
    }
`;

  const result = await request(dataUrl, data);
  return result;
};

export default getOrderedData;
