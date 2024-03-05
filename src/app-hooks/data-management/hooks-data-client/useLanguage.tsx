import {create} from 'zustand';
interface CounterState {
  language: string;
  setLanguage: (val: string) => void;
}

const useLanguage = create<CounterState>(set => ({
  language: '',
  setLanguage: val => set({language: val}),
}));

export default useLanguage;
