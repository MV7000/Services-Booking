'use client';

import { signIn, useSession } from 'next-auth/react';
import { FC } from 'react';
import { DNA } from 'react-loader-spinner';
import ServiceDetailed from '../_components/ServiceDetailed/ServiceDetailed';

interface ServiceDetailsProps {
  params: {
    serviceID: string;
  };
}

const ServiceDetails: FC<ServiceDetailsProps> = ({ params }) => {
  const { status } = useSession();

  if (status === 'loading') {
    return (
      <main>
        <div className='h-[100%] flex items-center justify-center flex-col text-[calc(var(--index)*2)] text-[var(--yellow)] font-lobster'>
          Loading...
          <DNA
            visible={true}
            height='300'
            width='300'
            ariaLabel='dna-loading'
            wrapperStyle={{}}
            wrapperClass='dna-wrapper'
          />
        </div>
      </main>
    );
  }

  if (status === 'unauthenticated') {
    signIn('descope');
  }

  return (
    status === 'authenticated' && (
      <main>
        <ServiceDetailed serviceID={params.serviceID} />
      </main>
    )
  );
};

export default ServiceDetails;
