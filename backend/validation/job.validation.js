import Joi from "joi";

export const createJobSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    "string.empty": "Job title is required.",
    "any.required": "Job title is required.",
  }),

  description: Joi.string().trim().required().messages({
    "string.empty": "Job description is required.",
    "any.required": "Job description is required.",
  }),

  location: Joi.string().trim().required().messages({
    "string.empty": "Location is required.",
    "any.required": "Location is required.",
  }),

  workplaceType: Joi.string()
    .valid("Remote", "Hybrid", "On-site")
    .required()
    .messages({
      "any.only": "Workplace type must be Remote, Hybrid or On-site.",
      "any.required": "Workplace type is required.",
    }),

  employmentType: Joi.string()
    .valid("Full-time", "Part-time", "Internship", "Contract")
    .required()
    .messages({
      "any.only":
        "Employment type must be Full-time, Part-time, Internship or Contract.",
      "any.required": "Employment type is required.",
    }),

  experience: Joi.string()
    .valid("Fresher", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years")
    .required()
    .messages({
      "any.only": "Please select a valid experience level.",
      "any.required": "Experience is required.",
    }),

  salary: Joi.object({
    min: Joi.number().greater(0).required().messages({
      "number.greater": "Minimum salary must be greater than 0.",
      "any.required": "Minimum salary is required.",
    }),

    max: Joi.number().min(Joi.ref("min")).required().messages({
      "number.min":
        "Maximum salary must be greater than or equal to minimum salary.",
      "any.required": "Maximum salary is required.",
    }),
  }).required(),

  applicationDeadline: Joi.date().greater("now").required().messages({
    "date.base": "Application deadline must be a valid date.",
    "date.greater": "Application deadline cannot be in the past.",
    "any.required": "Application deadline is required.",
  }),

  skills: Joi.array().items(Joi.string().trim()).min(1).required().messages({
    "array.min": "At least one skill is required.",
  }),

  responsibilities: Joi.array()
    .items(Joi.string().trim())
    .min(1)
    .required()
    .messages({
      "array.min": "At least one responsibility is required.",
    }),

  requirements: Joi.array()
    .items(Joi.string().trim())
    .min(1)
    .required()
    .messages({
      "array.min": "At least one requirement is required.",
    }),

  openings: Joi.number().integer().min(1).default(1),
});

export const updateJobSchema = Joi.object({
  title: Joi.string().trim(),

  description: Joi.string().trim(),

  location: Joi.string().trim(),

  workplaceType: Joi.string().valid("Remote", "Hybrid", "On-site"),

  employmentType: Joi.string().valid(
    "Full-time",
    "Part-time",
    "Internship",
    "Contract",
  ),

  experience: Joi.string().valid(
    "Fresher",
    "0-1 Years",
    "1-3 Years",
    "3-5 Years",
    "5+ Years",
  ),

  salary: Joi.object({
    min: Joi.number().greater(0).messages({
      "number.greater": "Minimum salary must be greater than 0.",
    }),

    max: Joi.number().min(Joi.ref("min")).messages({
      "number.min":
        "Maximum salary must be greater than or equal to minimum salary.",
    }),
  }),

  applicationDeadline: Joi.date().greater("now").messages({
    "date.base": "Application deadline must be a valid date.",
    "date.greater": "Application deadline cannot be in the past.",
  }),

  skills: Joi.array().items(Joi.string().trim()),

  responsibilities: Joi.array().items(Joi.string().trim()),

  requirements: Joi.array().items(Joi.string().trim()),

  openings: Joi.number().integer().min(1),
}).min(1);

const singleJobValidation = Joi.object({
  title: Joi.string().trim().required().messages({
    "string.empty": "Job title is required.",
    "any.required": "Job title is required.",
  }),

  description: Joi.string().trim().required().messages({
    "string.empty": "Job description is required.",
    "any.required": "Job description is required.",
  }),

  location: Joi.string().trim().required().messages({
    "string.empty": "Location is required.",
    "any.required": "Location is required.",
  }),

  workplaceType: Joi.string().valid("Remote", "Hybrid", "On-site").required(),

  employmentType: Joi.string()
    .valid("Full-time", "Part-time", "Internship", "Contract")
    .required(),

  experience: Joi.string()
    .valid("Fresher", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years")
    .required(),

  salary: Joi.object({
    min: Joi.number().min(1).required(),

    max: Joi.number().greater(Joi.ref("min")).required(),
  }).required(),

  applicationDeadline: Joi.date().required(),

  skills: Joi.array().items(Joi.string().trim()).min(1).required(),

  responsibilities: Joi.array().items(Joi.string().trim()).min(1).required(),

  requirements: Joi.array().items(Joi.string().trim()).min(1).required(),

  openings: Joi.number().integer().min(1).default(1),
});

export const bulkCreateJobsValidation = Joi.array()
  .items(singleJobValidation)
  .min(1)
  .required()
  .messages({
    "array.base": "Jobs must be an array.",
    "array.min": "At least one job is required.",
    "any.required": "Jobs data is required.",
  });
