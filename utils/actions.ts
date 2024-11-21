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
    console.log("Raw Data:", rawData); // Log raw data for debugging

    const ddate = rawData.date as string | undefined;
    if (!ddate) {
      throw new Error("Date is required but not provided.");
    }

    // Parse the date and ensure it's valid
    const parsedDate = new Date(ddate);
    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date format.");
    }

    const parsedData = {
      ...rawData,
      date: parsedDate, // Set the valid parsed date
    };


    // Validate the parsed data with Zod schema
    const validatedFields = validateWithZod(bookingeSchema, parsedData);


    if (!validatedFields) {
      throw new Error("Validation failed. No valid data.");
    }

    // Insert the validated data into the database
    await db.booking.create({
      data: validatedFields,
    });

    return { message: "We will call you soon" };
    
    
  } catch (error) {
    console.error("Error in createBookingAction:", error);
    return renderError(error); 
  }
};

