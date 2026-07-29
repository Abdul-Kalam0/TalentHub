import Joi from "joi";
import { ROLES } from "../constants/roles.js";

export const updateRecruiterProfileSchema = Joi.object({
  companyName: Joi.string().trim().max(100).messages({
    "string.max": "Company name cannot exceed 100 characters.",
  }),

  companyLogo: Joi.string().trim().uri().allow("").messages({
    "string.uri": "Please enter a valid company logo URL.",
  }),

  website: Joi.string().trim().uri().allow("").messages({
    "string.uri": "Please enter a valid website URL.",
  }),

  companySize: Joi.string()
    .valid("1-10", "11-50", "51-200", "201-500", "501-1000", "1000+")
    .messages({
      "any.only": "Please select a valid company size.",
    }),

  aboutCompany: Joi.string().trim().max(1000).messages({
    "string.max": "About company cannot exceed 1000 characters.",
  }),
})
  .min(1)
  .messages({
    "object.min": "Please provide at least one field to update.",
  });

