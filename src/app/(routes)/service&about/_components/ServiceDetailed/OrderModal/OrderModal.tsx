'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
import timeSet from '@/app/functions/timeSet';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import moment from 'moment';
import postOrder from '@/app/functions/PostData/postOrder';
import { CalendarHeart } from 'lucide-react';
import getOrderedData from '@/app/functions/GetData/getOrderedData';
import { useSession } from 'next-auth/react';

const OrderModal = ({ serviceCard, name }: any) => {
  const [date, setDate] = useState<Date | undefined>(new Date()),
    [time, setTime] = useState<string[]>([]),
    [pressed, setPressed] = useState(''),
    [orderedTime, setOrderedTime] = useState<any>([]),
    [userEmail, setUserEmail] = useState<string>(''),
    [nameCompany, setNameCompany] = useState<string>(''),
    { data } = useSession();

  useEffect(() => {
    if (data?.user?.email !== undefined && data?.user?.email !== null) {
      setUserEmail(data.user.email);
    }
  }, [data]);

  useEffect(() => {
    setTime(timeSet());
  }, [serviceCard]);

  const timeArr: string[] = [];
  useEffect(() => {
    getOrderedData(moment(date).format('DD-MMM-yyyy')).then((res: any) => {
      res?.ordersCompleted.map((elem: any) => {
        timeArr.push(elem.time);
      });
      setOrderedTime(timeArr);
      setNameCompany(res?.ordersCompleted[0]?.name);
    });
  }, [date]);

  const saveBooking = () => {
    postOrder(
      moment(date).format('DD-MMM-yyyy'),
      pressed,
      userEmail,
      serviceCard.serviceCard.name,
      serviceCard?.serviceCard?.servicesLists[0].id
    ).then(
      resp => {
        if (resp) {
          setDate(new Date());
          setTime(timeSet());
          toast('You have successfully booked the service !');
        }
      },
      e => {
        toast('Something went wrong... Try again later.');
      }
    );
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div className='rounded-2xl w-80 flex items-center justify-center gap-5 text-[white] font-semibold hover:bg-[var(--darkSky)] p-3 bg-[var(--lavender)] dark:text-[black]'>
          <CalendarHeart /> Order Service
        </div>
      </SheetTrigger>
      <SheetContent className='overflow-auto'>
        <SheetHeader>
          <SheetTitle className='text-center font-lobster text-[var(--lavender)]'>
            Service order for You
          </SheetTitle>
          <SheetDescription className='text-center'>
            Please order our service, specifying the date and time
          </SheetDescription>
        </SheetHeader>
        <div className='flex items-center justify-center flex-col'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            className='rounded-2xl border mt-3'
          />
          <div className='grid grid-cols-3 gap-3 my-3'>
            {time &&
              time.map((elem, index) => {
                return (
                  <div key={index}>
                    <Button
                      variant='outline'
                      className={`rounded-2xl hover:bg-[var(--lavender)]
    ${pressed === elem && 'bg-[var(--lavender)] text-[white]'}
    `}
                      disabled={
                        name === nameCompany && orderedTime?.includes(elem)
                      }
                      onClick={() => setPressed(elem)}
                    >
                      {elem}
                    </Button>
                  </div>
                );
              })}
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className='mt-3'>
              <Button variant='destructive' className='rounded-2xl mr-5 '>
                Cancel Order
              </Button>
              <Button
                onClick={() => saveBooking()}
                disabled={!(pressed && time)}
                className='active:text-[red] rounded-2xl hover:bg-[var(--purpleLight)] hover:text-[white] mt-3'
              >
                Make an Order
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default OrderModal;
