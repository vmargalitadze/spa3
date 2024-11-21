"use client";

import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useProperty } from '@/utils/store';
import { generateDisabledDates, generateBlockedPeriods } from '@/utils/calendar';

type FormInputProps = {
  name: string;
};

function BookingCalendar(props: FormInputProps) {
  const { name } = props;
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const bookings = useProperty((state) => state.bookings);
  const blocked = generateBlockedPeriods({ bookings, today: currentDate });
  const { toast } = useToast();
  const unavailableDates = generateDisabledDates(blocked);

  useEffect(() => {
    if (selectedDate && unavailableDates[selectedDate.toISOString()]) {
      setSelectedDate(undefined);
      toast({
        description: 'This date is unavailable. Please select a different date.',
      });
    } else {
      // Set the selected date in ISO string format to Zustand store
      useProperty.setState({ date: selectedDate?.toISOString() || '' });
    }
  }, [selectedDate]);

  return (
    <div className="calendar-wrapper">
      {/* Hidden input to hold the selected date value */}
      <input type="hidden" name={name} value={selectedDate?.toISOString() || ''} />

      <Calendar
        mode="single"
        defaultMonth={currentDate}
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="mb-4"
        disabled={blocked}
      />
    </div>
  );
}

export default BookingCalendar;
