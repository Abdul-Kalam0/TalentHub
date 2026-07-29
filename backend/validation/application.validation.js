import Joi from "joi";

export const updateApplicationStatusSchema = Joi.object({
  status: Joi.string()
    .valid("Applied", "Reviewed", "Shortlisted", "Rejected", "Hired")
    .required(),
});
