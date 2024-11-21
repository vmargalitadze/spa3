"use server";
import { TableRow, TableCell } from '@/components/ui/table';
import React from 'react';
import { fetchBooking } from './actions';
import DeleteBooking from './DeleteBooking'

async function Info() {
  const bookings = await fetchBooking();
 

  return (
    <>
      {bookings.map((item) => {
        const { id, firstName, lastName, email, phoneNumber, date, time } = item;
        return (
          <TableRow key={id} className="hover:bg-gray-100">
            <TableCell><p className="whitespace-nowrap">{firstName}</p></TableCell>
            <TableCell><p className="whitespace-nowrap">{lastName}</p></TableCell>
            <TableCell><p className="whitespace-nowrap">{email}</p></TableCell>
            <TableCell><p className="whitespace-nowrap">{phoneNumber}</p></TableCell>
            <TableCell><p className="whitespace-nowrap">{time}</p></TableCell>
            <TableCell>
  <p className="whitespace-nowrap">
    {new Date(date).toISOString().split('T')[0]}
  </p>
</TableCell>

            <TableCell><DeleteBooking bookingId={id} /></TableCell>
          </TableRow>
        );
      })}
    </>
  );
}

export default Info;
