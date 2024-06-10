import request, { gql } from 'graphql-request';

const url =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_URL_SERVICES_KEY +
  '/master';

const postOrder = async (
  date: string,
  time: string,
  email: string,
  name: string,
  id: string
) => {
  const mutationQuery =
    gql`
    mutation CreateCompletedOrder {
      createCompletedOrders(
        data: {date: "` +
    date +
    `", email: "` +
    email +
    `", name: "` +
    name +
    `", time: "` +
    time +
    `", servicesList: {connect: {id: "` +
    id +
    `"}},orderStatus: ordered}
      ) {
        id
        servicesList {
          color {
            hex
          }
          icon {
            url
          }
        }
      }
      publishManyOrdersCompleted(to: PUBLISHED) {
        count
      }
    }
`;
  const result = await request(url, mutationQuery);
  return result;
};

export default postOrder;
