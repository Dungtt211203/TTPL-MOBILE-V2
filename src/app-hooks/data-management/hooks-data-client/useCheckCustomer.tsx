import {create} from 'zustand';
interface CounterState {
  is_check_customer: boolean;
  setIsCheckCustomer: (val: boolean) => void;
}

const useCheckCustomer = create<CounterState>(set => ({
  is_check_customer: false,
  setIsCheckCustomer: (val: boolean) => set({is_check_customer: val}),
}));

export default useCheckCustomer;
