import {create} from 'zustand';

export interface addressLocation {
  description?: string;
  currentPosition: currentPosition;
}

export interface currentPosition {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface CounterState {
  address_me: addressLocation | null | undefined;
  list_address_ship: addressLocation[];
  setAddressMe: (val: addressLocation) => void;
  setListAddressShip: (val: addressLocation[]) => void;
}

const useAddressMaps = create<CounterState>(set => ({
  address_me: {
    description: '',
    currentPosition: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.010221090759589657,
      longitudeDelta: 0.005057975649833679,
    },
  },
  list_address_ship: [
    {
      description: '',
      currentPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.010221090759589657,
        longitudeDelta: 0.005057975649833679,
      },
    },
  ],
  setAddressMe: (val: addressLocation) => set({address_me: val}),
  setListAddressShip: (val: addressLocation[]) => set({list_address_ship: val}),
}));

export default useAddressMaps;
