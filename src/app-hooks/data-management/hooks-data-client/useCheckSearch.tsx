import {create} from 'zustand';
interface CounterState {
  is_search: boolean;
  setIsSearch: (val: boolean) => void;
}

const useCheckSearch = create<CounterState>(set => ({
    is_search: false,
    setIsSearch: (val:boolean) => set({is_search: val}),
}));

export default useCheckSearch;
