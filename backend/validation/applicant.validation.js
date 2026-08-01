import Joi from "joi";

export const updateApplicantProfileSchema = Joi.object({
  photo: Joi.string().trim().uri().allow("").messages({
    "string.uri": "Please enter a valid photo URL.",
  }),

  headline: Joi.string().trim().max(100).allow("").messages({
    "string.max": "Headline cannot exceed 100 characters.",
  }),

  bio: Joi.string().trim().max(500).allow("").messages({
    "string.max": "Bio cannot exceed 500 characters.",
  }),

  phone: Joi.string()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .allow("")
    .messages({
      "string.pattern.base": "Please enter a valid 10-digit phone number.",
    }),

  experience: Joi.string()
    .valid("Fresher", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years")
    .messages({
      "any.only": "Please select a valid experience level.",
    }),

  education: Joi.string().trim().max(200).allow("").messages({
    "string.max": "Education cannot exceed 200 characters.",
  }),

  skills: Joi.array().items(Joi.string().trim().min(1)).messages({
    "array.base": "Skills must be an array of strings.",
  }),

  resume: Joi.string().trim().uri().allow("").messages({
    "string.uri": "Please enter a valid resume URL.",
  }),

  currentLocation: Joi.string().trim().allow("").messages({
    "string.base": "Current location must be a string.",
  }),

  socialLinks: Joi.object({
    github: Joi.string().trim().uri().allow("").messages({
      "string.uri": "Please enter a valid GitHub URL.",
    }),

    linkedin: Joi.string().trim().uri().allow("").messages({
      "string.uri": "Please enter a valid LinkedIn URL.",
    }),

    portfolio: Joi.string().trim().uri().allow("").messages({
      "string.uri": "Please enter a valid Portfolio URL.",
    }),
  }).unknown(false),
})
  .min(1)
  .messages({
    "object.min": "Please provide at least one field to update.",
  });
