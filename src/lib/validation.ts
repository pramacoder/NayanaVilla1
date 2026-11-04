import { z } from "zod";

// Helper to get today's date in YYYY-MM-DD
export function getTodayDateString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const inquirySchema = z
  .object({
    checkIn: z
      .string()
      .min(1, "Check-in date is required")
      .refine(
        (date) => date >= getTodayDateString(),
        "Check-in date cannot be in the past"
      ),
    checkOut: z.string().min(1, "Check-out date is required"),
    guests: z.coerce
      .number({ invalid_type_error: "Please enter a valid guest count" })
      .int("Guests must be a whole number")
      .min(1, "At least 1 guest is required")
      .max(20, "Maximum capacity is 20 guests"),
    accommodationSlug: z.string().optional(),
    name: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters")
      .max(100, "Full name cannot exceed 100 characters"),
    email: z
      .string()
      .trim()
      .email("Please provide a valid email address")
      .max(254, "Email is too long"),
    phone: z.string().max(30, "Phone number is too long").optional(),
    message: z.string().max(1000, "Message cannot exceed 1000 characters").optional(),
    privacyAccepted: z.literal(true, {
      errorMap: () => ({
        message: "You must accept the privacy and demonstration notice",
      }),
    }),
  })
  .refine((data) => data.checkOut > data.checkIn, {
    message: "Check-out date must be after check-in date",
    path: ["checkOut"],
  });

export type InquiryFormData = z.infer<typeof inquirySchema>;

