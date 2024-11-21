"use client";

import { deleteBookingAction } from './actions';
import { IconButton } from '@/components/contact/Buttons';
import FormContainer from '@/components/contact/FormContainer';

function DeleteBooking({ bookingId }) {
  const deleteBooking = () => {
    deleteBookingAction({ bookingId })
      .then(() => console.log('Booking deleted:', bookingId))
      .catch((error) => console.error('Delete failed', error));
  };

  return (
    <FormContainer action={deleteBooking}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

export default DeleteBooking;
