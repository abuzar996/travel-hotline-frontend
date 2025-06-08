import { z } from "zod";

export const minorInfoSchema = z.object({
  prefferedTime: z.string({ required_error: "Preffered time is required" }),
  activityType: z.string({ required_error: "Activity type is required" }),
  tripMode: z.string({ required_error: "trip mode is required" }),
  birth_date: z.date({ required_error: "Birth date is required" }),
  gender: z.enum(["male", "female"], {
    required_error: "Gender is required",
    invalid_type_error: "Gender must be either 'male' or 'female'",
  }),
});

export type MinorInfoFormType = z.infer<typeof minorInfoSchema>;
