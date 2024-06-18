export type dataServicesProps = {
  servicesLists: [
    {
      id: number | string;
      name: string;
      icon: {
        url: string;
      };
      color: {
        hex: string;
      };
    }
  ];
};

export type dataPhotosProps = {
  assets: [{ id: string; filename: string; url: string }];
};

type ServicesListsType = {
  name: string;
  color: {
    hex: string;
  };
};

type ImagesType = {
  url: string;
};

export interface ServiceCardListProps {
  address: string;
  email: string;
  id: string;
  name: string;
  contactPerson: string;
  servicesLists: [ServicesListsType];
  images: [ImagesType];
}

export interface OrdersCompletedConnectionProps {
  aggregate: {
    count: number;
  };
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageSize: number;
    startCursor: string;
    endCursor: string;
  };
}

export interface ServiceDetailedProps {
  serviceCard: {
    about: string;
    address: string;
    contactPerson: string;
    email: string;
    id: string;
    images: [{ url: string }];
    name: string;
    servicesLists: [{ color: { hex: string }; name: string; id: string }];
  };
}

export interface OrdersProps {
  ordersData: {
    orders: [
      {
        date: string;
        time: string;
        name: string;
        id: string;
        servicesLists: [
          {
            color: { hex: string };
            icon: { url: string };
            name: string;
            order: { orderStatus: [string] };
          }
        ];
      }
    ];
  };
  status: string;
  setDefaultVal?: (str: string) => void;
  setRefresh?: (prev: boolean) => void;
}
