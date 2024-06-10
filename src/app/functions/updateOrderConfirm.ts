import { cancelOrder, completeOrder } from './PostData/updateOrder';
import { toast } from 'sonner';

export const completeConfirm = (id: string) => {
  completeOrder(id).then(
    resp => {
      if (resp) {
        toast('You have successfully change status on ♻COMPLETED!♻');
      }
    },
    e => {
      toast('Something went wrong... Try again later.');
    }
  );
};

export const cancelConfirm = (id: string) => {
  cancelOrder(id).then(
    resp => {
      if (resp) {
        toast('You have successfully 💥CANCELED!💥 an order');
      }
    },
    e => {
      toast('Something went wrong... Try again later.');
    }
  );
};
