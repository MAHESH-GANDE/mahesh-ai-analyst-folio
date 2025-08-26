import { useState } from "react";
import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required").max(100, "Subject must be less than 100 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const useFormValidation = () => {
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: keyof ContactFormData, value: string) => {
    try {
      const fieldSchema = contactFormSchema.shape[name];
      fieldSchema.parse(value);
      setErrors(prev => ({ ...prev, [name]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [name]: error.errors[0].message }));
      }
      return false;
    }
  };

  const validateForm = (data: ContactFormData) => {
    try {
      contactFormSchema.parse(data);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  return {
    errors,
    isSubmitting,
    setIsSubmitting,
    validateField,
    validateForm,
  };
};