import request, { gql } from 'graphql-request';

const url =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_URL_SERVICES_KEY +
  '/master';

export const completeOrder = async (id: string) => {
  const mutationQuery =
    gql`
  mutation MakeOrderCompleted {
    updateCompletedOrders(
      where: {id: "` +
    id +
    `"}
      data: {orderStatus: completed}
    ) {
      id
    }
    publishManyOrdersCompleted(to: PUBLISHED) {
      count
    }
  }
  `;
  const result = await request(url, mutationQuery);
  return result;
};

export const cancelOrder = async (id: string) => {
  const mutationQuery =
    gql`
    mutation MakeOrderCompleted {
      updateCompletedOrders(
        where: {id: "` +
    id +
    `"}
        data: {orderStatus: canceled}
      ) {
        id
      }
      publishManyOrdersCompleted(to: PUBLISHED) {
        count
      }
    }
    `;
  const result = await request(url, mutationQuery);
  return result;
};
