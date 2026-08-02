import Joi from "joi";

export const askHiringAssistantValidation = Joi.object({
  prompt: Joi.string().trim().min(5).max(1000).required().messages({
    "string.empty": "Prompt is required.",
    "string.min": "Prompt must be at least 5 characters.",
    "string.max": "Prompt cannot exceed 1000 characters.",
    "any.required": "Prompt is required.",
  }),
});
