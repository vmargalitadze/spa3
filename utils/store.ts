import { create } from 'zustand';
import { Booking } from './types';

type InfoState = {
  bookings: Booking[];
  date: string | undefined; 
};

export const useProperty = create<InfoState>((set) => ({
  bookings: [],
  date: undefined,
}));
