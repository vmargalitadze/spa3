import { create } from 'zustand';
import { Booking } from './types';

type InfoState = {
  bookings: Booking[];
  date: string | undefined; // Updated type to string
};

export const useProperty = create<InfoState>((set) => ({
  bookings: [],
  date: undefined,
}));
