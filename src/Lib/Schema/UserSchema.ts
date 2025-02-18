import { z } from 'zod';

export const userFormSchema = z.object({
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
  designation: z.string().min(2, "Position is required"),
  roleId: z.string().min(1, "Position is required"),
  status: z.string().min(1, "Status is required"),
  image: z.any().optional(),
});

export type UserFormData = z.infer<typeof userFormSchema>;
