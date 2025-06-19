import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

export const targetAudiences = [
  "Marketing Managers",
  "Sales Directors",
  "CEOs/Founders",
  "HR Managers",
  "IT Directors",
  "Product Managers",
  "Small Business Owners",
  "E-commerce Managers",
];

export const tones = ["friendly", "professional", "bold"];

export const EmailConfig = z.object({
  targetAudience: z.enum(targetAudiences),
  service: z.string().min(5).describe("The product or service you're pitching"),
  tone: z.enum(tones),
  cta: z
    .string()
    .min(5)
    .describe("Call to action (e.g., Book a demo, Try free)"),
  keywords: z
    .string()
    .optional()
    .describe("Optional keywords to include in the email"),
});

const EmailOutputZodSchema = z.object({
  email: z.string().describe("The body of the cold email"),
  subject: z.string().describe("The subject line of the email"),
});

export const emailOutputSchema = zodToJsonSchema(EmailOutputZodSchema);
