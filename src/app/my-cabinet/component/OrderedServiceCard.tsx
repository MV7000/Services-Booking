import {
  getCanceledServices,
  getCompletedServices,
  getOrderedServices,
} from '@/app/functions/GetData/getOrderedServices';
import {
  cancelOrder,
  completeOrder,
} from '@/app/functions/PostData/updateOrder';
import {
  cancelConfirm,
  completeConfirm,
} from '@/app/functions/updateOrderConfirm';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { DialogClose } from '@radix-ui/react-dialog';

interface OrderedServiceCardProps {
  status: string;
}

const OrderedServiceCard: FC<OrderedServiceCardProps> = ({ status }) => {
  const [ordersData, setOrdersData] = useState<any>(),
    { data } = useSession();

  useEffect(() => {
    if (
      data?.user?.email !== undefined &&
      data?.user?.email !== null &&
      status === 'ordered'
    ) {
      getOrderedServices(data?.user?.email).then(result =>
        setOrdersData(result)
      );
    }
    if (
      data?.user?.email !== undefined &&
      data?.user?.email !== null &&
      status === 'completed'
    ) {
      getCompletedServices(data?.user?.email).then(result =>
        setOrdersData(result)
      );
    }
    if (
      data?.user?.email !== undefined &&
      data?.user?.email !== null &&
      status === 'canceled'
    ) {
      getCanceledServices(data?.user?.email).then(result =>
        setOrdersData(result)
      );
    }
  }, [data, status]);

  return (
    <div className='flex items-center justify-center gap-5 flex-wrap'>
      {ordersData?.ordersCompleted.map((elem: any) => {
        return (
          <div
            key={elem.id}
            style={{ backgroundColor: `${elem.servicesList.color.hex}` }}
            className='min-h-[calc(var(--index)*15)] p-7 my-3 flex flex-col items-center justify-center text-center rounded-xl shadow-[5px_5px_5px_gray]'
          >
            <Image
              src={elem.servicesList.icon.url}
              alt={elem.name}
              width={100}
              height={100}
            />
            <div className='font-bold [text-shadow:3px_3px_5px_var(--lavender)] text-[var(--darkCyan)]'>
              {elem.name}
            </div>
            <div className='[text-shadow:3px_3px_5px_var(--lavender)]'>
              {elem.date}
            </div>
            <div className='[text-shadow:3px_3px_5px_var(--lavender)]'>
              {elem.time}
            </div>

            <Dialog>
              <DialogTrigger>
                <HoverCard>
                  {status === 'ordered' && (
                    <HoverCardTrigger>
                      <div className='w-[calc(var(--index)*8)] hover:shadow-[3px_7px_3px_var(--darkSky)] active:translate-y-0 active:shadow-[1px_1px_1px_var(--darkSky)] hover:-translate-y-1 bg-[var(--lavender)] rounded-xl text-white font-bold p-1 [text-shadow:2px_2px_2px_var(--darkSky)] transition-all duration-100'>
                        Accomplish
                      </div>
                    </HoverCardTrigger>
                  )}
                  <HoverCardContent className='rounded-xl shadow-[3px_3px_3px_gray]'>
                    ♻Move the order to the completed section♻
                  </HoverCardContent>
                </HoverCard>
              </DialogTrigger>

              <DialogContent className='!rounded-xl shadow-[1px_1px_12px_var(--purpleLight)]'>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your order and remove your data from ORDERED services to
                    COMPLETED.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button className='rounded-xl w-[calc(var(--index)*8)] bg-[var(--darkSky)] mx-auto sm:mx-0 mt-2 sm:mt-0'>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    onClick={() => {
                      completeOrder(elem.id);
                      completeConfirm(elem.id);
                    }}
                    className='rounded-xl w-[calc(var(--index)*8)] mx-auto sm:mx-0'
                  >
                    Accomplish
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger>
                <HoverCard>
                  {status === 'ordered' && (
                    <HoverCardTrigger>
                      <div className='w-[calc(var(--index)*8)] mt-2 hover:shadow-[3px_7px_3px_var(--darkSky)] active:translate-y-0 active:shadow-[1px_1px_1px_var(--darkSky)] hover:-translate-y-1 bg-[var(--lavender)] rounded-xl text-white font-bold p-1 [text-shadow:2px_2px_2px_var(--darkSky)] transition-all duration-100'>
                        Cancel
                      </div>
                    </HoverCardTrigger>
                  )}
                  <HoverCardContent className='rounded-xl shadow-[3px_3px_3px_gray]'>
                    💥Move the order to the canceled section💥
                  </HoverCardContent>
                </HoverCard>
              </DialogTrigger>
              <DialogContent className='!rounded-xl shadow-[1px_1px_12px_var(--purpleLight)]'>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your order and remove your data from ORDERED services to
                    CANCELED.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button className='rounded-xl sm:mx-0 mx-auto mt-2 sm:mt-0 bg-[var(--darkSky)] w-[calc(var(--index)*6)]'>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    onClick={() => {
                      cancelOrder(elem.id);
                      cancelConfirm(elem.id);
                    }}
                    className='rounded-xl mx-auto sm:mx-0 w-[calc(var(--index)*6)]'
                  >
                    Do it
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        );
      })}
    </div>
  );
};

export default OrderedServiceCard;
