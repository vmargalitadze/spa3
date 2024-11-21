import * as z from 'zod';
import { ZodSchema } from 'zod';

export const bookingeSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters',
  }),
  email: z.string().email({
    message: 'Invalid email address',
  }),
  phoneNumber: z.string().min(9, {
    message: 'Phone number must be at least 9 characters',
  }),
  date: z.date({
    invalid_type_error: 'Invalid date',
    required_error: 'Date is required',
  }),
  time: z.string().min(1, "Time is required"),
});


export function validateWithZod<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(','));
  }
  return result.data;
}






