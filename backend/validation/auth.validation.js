import Joi from "joi";
import { ROLES } from "../constants/roles.js";

const fullName = Joi.string().trim().min(3).max(50).required().messages({
  "string.empty": "Full name is required.",
  "string.min": "Full name must be at least 3 characters.",
  "string.max": "Full name cannot exceed 50 characters.",
  "any.required": "Full name is required.",
});

const email = Joi.string().trim().email().required().messages({
  "string.empty": "Email is required.",
  "string.email": "Please enter a valid email address.",
  "any.required": "Email is required.",
});

const password = Joi.string().min(8).required().messages({
  "string.empty": "Password is required.",
  "string.min": "Password must be at least 8 characters.",
  "any.required": "Password is required.",
});

const confirmPassword = Joi.string()
  .valid(Joi.ref("password"))
  .required()
  .messages({
    "any.only": "Passwords do not match.",
    "string.empty": "Confirm password is required.",
    "any.required": "Confirm password is required.",
  });

export const applicantRegisterSchema = Joi.object({
  fullName,
  email,
  password,
  confirmPassword,

  role: Joi.string().valid(ROLES.APPLICANT).required().messages({
    "any.only": "Invalid role selected.",
    "any.required": "Role is required.",
  }),

  experience: Joi.string()
    .valid("Fresher", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years")
    .required()
    .messages({
      "any.only": "Please select a valid experience.",
      "any.required": "Experience is required.",
    }),

  currentLocation: Joi.string().trim().required().messages({
    "string.empty": "Current location is required.",
    "any.required": "Current location is required.",
  }),

  skills: Joi.array().items(Joi.string().trim()).default([]),

  resume: Joi.string().allow("").default(""),

  bio: Joi.string().max(500).allow("").default("").messages({
    "string.max": "Bio cannot exceed 500 characters.",
  }),

  education: Joi.string().max(200).allow("").default("").messages({
    "string.max": "Education cannot exceed 200 characters.",
  }),
});

export const recruiterRegisterSchema = Joi.object({
  fullName,
  email,
  password,
  confirmPassword,

  role: Joi.string().valid(ROLES.RECRUITER).required().messages({
    "any.only": "Invalid role selected.",
    "any.required": "Role is required.",
  }),

  companyName: Joi.string().trim().max(100).required().messages({
    "string.empty": "Company name is required.",
    "string.max": "Company name cannot exceed 100 characters.",
    "any.required": "Company name is required.",
  }),

  companySize: Joi.string()
    .valid("1-10", "11-50", "51-200", "201-500", "501-1000", "1000+")
    .required()
    .messages({
      "any.only": "Please select a valid company size.",
      "any.required": "Company size is required.",
    }),

  website: Joi.string().uri().allow("").default("").messages({
    "string.uri": "Please enter a valid website URL.",
  }),

  aboutCompany: Joi.string().max(1000).allow("").default("").messages({
    "string.max": "About company cannot exceed 1000 characters.",
  }),
});

export const loginSchema = Joi.object({
  email,
  password,
});


