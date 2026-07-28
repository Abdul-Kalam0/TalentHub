import Joi from "joi";

export const updateApplicantProfileSchema = Joi.object({
  photo: Joi.string().trim().uri().allow("").messages({
    "string.uri": "Please enter a valid photo URL.",
  }),

  bio: Joi.string().trim().max(500).messages({
    "string.max": "Bio cannot exceed 500 characters.",
  }),

  experience: Joi.string()
    .valid("Fresher", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years")
    .messages({
      "any.only": "Please select a valid experience level.",
    }),

  education: Joi.string().trim().max(200).messages({
    "string.max": "Education cannot exceed 200 characters.",
  }),

  skills: Joi.array().items(Joi.string().trim()).messages({
    "array.base": "Skills must be an array of strings.",
  }),

  resume: Joi.string().trim().uri().allow("").messages({
    "string.uri": "Please enter a valid resume URL.",
  }),

  currentLocation: Joi.string().trim().messages({
    "string.base": "Current location must be a string.",
  }),
})
  .min(1)
  .messages({
    "object.min": "Please provide at least one field to update.",
  });
