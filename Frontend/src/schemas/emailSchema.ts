
import { z } from 'zod';

export const emailFormSchema = z.object({
  targetAudience: z.string().min(1, 'Target audience is required'),
  productService: z.string().min(1, 'Product/Service is required'),
  tone: z.enum(['Friendly', 'Professional', 'Bold'], {
    required_error: 'Please select a tone',
  }),
  cta: z.string().optional(),
  keywords: z.array(z.string()).default([]),
  emailLength: z.array(z.number()).default([150]),
});

export type EmailFormSchema = z.infer<typeof emailFormSchema>;
