import { create } from 'zustand';
import { Booking } from './types';

type InfoState = {
  bookings: Booking[];
  date: Date | null; // Default to null, since there's no initial date selected
};

export const useProperty = create<InfoState>((set) => ({
  bookings: [],
  date: null,
}));
