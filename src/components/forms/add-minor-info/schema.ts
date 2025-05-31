import { z } from "zod";

export const minorInfoSchema = z.object({
  first_name: z.string({ required_error: "First name is required" }),
  middle_name: z.string().optional(),
  last_name: z.string({ required_error: "Last name is required" }),
  birth_date: z.date({ required_error: "Birth date is required" }),
  gender: z.enum(["male", "female"], {
    required_error: "Gender is required",
    invalid_type_error: "Gender must be either 'male' or 'female'",
  }),
});

export type MinorInfoFormType = z.infer<typeof minorInfoSchema>;
