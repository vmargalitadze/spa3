'use server'
import { useTranslations } from 'next-intl';
import { bookingeSchema, validateWithZod } from "./schemas"
import db from './db';


const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  };
};





export const createBookingAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const rawData = Object.fromEntries(formData);

    const validatedFields = validateWithZod(bookingeSchema, rawData);

    await db.booking.create({
      data: validatedFields,
    });
console.log(rawData);

   
    return { message: "მალე დაგიკავშირდებით" };
  } catch (error) {
    return renderError(error);
  }
};

