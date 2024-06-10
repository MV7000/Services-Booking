'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OrderedServiceCard from './component/OrderedServiceCard';
import { useState } from 'react';

const MyCabinet = () => {
  const [status, setStatus] = useState<string>('ordered');

  return (
    <main>
      <h1 className='font-lobster text-center my-2 text-2xl text-[var(--darkCyan)] [text-shadow:4px_4px_6px_var(--darkSky)]'>
        Welcome to cabinet
      </h1>
      <h2 className='text-center font-vibes text-xl font-black text-[var(--darkCyan)] [text-shadow:4px_4px_6px_var(--darkSky)]'>
        There is a place where all Your booking services are
      </h2>
      <div className='container mx-auto py-10'>
        <div>
          <Tabs
            onValueChange={e => {
              setStatus(e);
            }}
            defaultValue='ordered'
            className='w-full flex items-center justify-center flex-wrap gap-3 md:gap-10 h-auto'
          >
            <TabsList className='w-full h-auto flex items-center justify-center flex-wrap gap-3 md:gap-10 py-5 md:py-2'>
              <TabsTrigger
                value='ordered'
                className='rounded-xl shadow-[3px_3px_3px_gray] duration-700'
              >
                ordered services
              </TabsTrigger>
              <TabsTrigger
                value='completed'
                className='rounded-xl shadow-[3px_3px_3px_gray] duration-700'
              >
                completed services
              </TabsTrigger>
              <TabsTrigger
                value='canceled'
                className='rounded-xl shadow-[3px_3px_3px_gray] duration-700'
              >
                canceled services
              </TabsTrigger>
            </TabsList>
            <TabsContent value='ordered'>
              <OrderedServiceCard status={status} />
            </TabsContent>
            <TabsContent value='completed'>
              <OrderedServiceCard status={status} />
            </TabsContent>
            <TabsContent value='canceled'>
              <OrderedServiceCard status={status} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default MyCabinet;
