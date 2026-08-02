const formatArray = (items = []) => {
  if (!Array.isArray(items) || items.length === 0) {
    return "Not Provided";
  }

  return items.map((item) => `- ${item}`).join("\n");
};

const formatValue = (value) => {
  if (value === undefined || value === null || value === "") {
    return "Not Provided";
  }

  return value;
};

export const buildApplicantContext = (job, applications) => {
  const context = [];

  context.push("# JOB DETAILS");
  context.push("");

  context.push(`Title: ${formatValue(job.title)}`);
  context.push(`Location: ${formatValue(job.location)}`);
  context.push(`Employment Type: ${formatValue(job.employmentType)}`);
  context.push(`Workplace Type: ${formatValue(job.workplaceType)}`);
  context.push(`Experience Required: ${formatValue(job.experience)}`);

  context.push(
    `Salary: ₹${job.salary?.min?.toLocaleString() || 0} - ₹${job.salary?.max?.toLocaleString() || 0}`,
  );

  context.push("");

  context.push("Job Description:");

  context.push(formatValue(job.description));

  context.push("");

  context.push("Required Skills:");

  context.push(formatArray(job.skills));

  context.push("");

  context.push("Responsibilities:");

  context.push(formatArray(job.responsibilities));

  context.push("");

  context.push("Requirements:");

  context.push(formatArray(job.requirements));

  context.push("");

  context.push("======================================================");

  context.push("");

  context.push(`Total Applicants: ${applications.length}`);

  context.push("");

  applications.forEach((application, index) => {
    const applicant = application.applicant;

    context.push(`# APPLICANT ${index + 1}`);

    context.push("");

    context.push(`Name: ${formatValue(applicant.user?.fullName)}`);

    context.push("");

    context.push(`Application Status: ${formatValue(application.status)}`);

    context.push("");

    context.push(`Experience: ${formatValue(applicant.experience)}`);

    context.push("");

    context.push("Skills:");

    context.push(formatArray(applicant.skills));

    context.push("");

    context.push(`Resume Uploaded: ${applicant.resume ? "Yes" : "No"}`);

    context.push("");

    context.push(
      `Applied On: ${new Date(application.createdAt).toLocaleDateString(
        "en-IN",
      )}`,
    );

    context.push("");

    context.push("------------------------------------------------------");

    context.push("");
  });

  context.push("======================================================");

  context.push("");

  context.push("IMPORTANT RULES");

  context.push("");

  context.push("- Answer ONLY using the information above.");

  context.push(
    "- Never invent skills, experience, education, projects, or certifications.",
  );

  context.push("- If there isn't enough information, clearly state that.");

  context.push(
    "- When recommending candidates, compare them against the job requirements.",
  );

  context.push(
    "- Explain every recommendation with evidence from the provided data.",
  );

  return context.join("\n");
};
