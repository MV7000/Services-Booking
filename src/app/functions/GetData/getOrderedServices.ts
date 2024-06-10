import request, { gql } from 'graphql-request';

const dataUrl =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_URL_SERVICES_KEY +
  '/master';

export const getOrderedServices = async (email: string) => {
  const data =
    gql`
    query getCompletedOrderes {
      ordersCompleted(where: {email: "` +
    email +
    `", orderStatus: ordered}) {
        id
        email
        name
        time
        date
        servicesList {
          color {
            hex
          }
          icon {
            url
          }
        }
        orderStatus
      }
    }
  `;

  const result = await request(dataUrl, data);
  return result;
};

export const getCompletedServices = async (email: string) => {
  const data =
    gql`
    query getCompletedOrderes {
      ordersCompleted(where: {email: "` +
    email +
    `", orderStatus: completed}) {
        id
        email
        name
        time
        date
        servicesList {
          color {
            hex
          }
          icon {
            url
          }
        }
        orderStatus
      }
    }
  `;

  const result = await request(dataUrl, data);
  return result;
};

export const getCanceledServices = async (email: string) => {
  const data =
    gql`
    query getCompletedOrderes {
      ordersCompleted(where: {email: "` +
    email +
    `", orderStatus: canceled}) {
        id
        email
        name
        time
        date
        servicesList {
          color {
            hex
          }
          icon {
            url
          }
        }
        orderStatus
      }
    }
  `;

  const result = await request(dataUrl, data);
  return result;
};
