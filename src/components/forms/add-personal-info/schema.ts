import { z } from "zod";

export const personalInfoSchema = z.object({
  email: z.string().email({ message: "Invalid Email Format" }),
  first_name: z.string({ required_error: "First name is required" }),
  middle_name: z.string().optional(),
  last_name: z.string({ required_error: "Last name is required" }),
  birth_date: z.date({ required_error: "Birth date is required" }),
  mobile_number: z.string({ required_error: "Mobil number is required" }),
  gender: z.enum(["male", "female"], {
    required_error: "Gender is required",
    invalid_type_error: "Gender must be either 'male' or 'female'",
  }),
});

export type PersonalInfoFormType = z.infer<typeof personalInfoSchema>;
