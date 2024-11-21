'use server'






import db from "./db";
import { revalidatePath } from 'next/cache';

export const fetchBooking = async () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 6);

  try {
    console.log("Fetching bookings...");
    const bookings = await db.booking.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
        date:true,
        time:true
      },
    });
   
    return bookings;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};





export async function deleteBookingAction(prevState: { bookingId: string }) {
  const { bookingId } = prevState;


  try {
    const result = await db.booking.delete({
      where: {
        id: bookingId,
      
      },
    });

    revalidatePath('/admin');
    return { message: 'Booking deleted successfully' };
  } catch (error) {
    console.error("Error deleting booking:", error);  
    return { message: 'Failed to delete booking',  };
  }
}