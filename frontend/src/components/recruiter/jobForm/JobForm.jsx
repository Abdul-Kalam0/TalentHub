import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { createJob, updateJob } from "../../../redux/jobs/jobsThunks";

import BasicInformation from "./BasicInformation";
import SalarySection from "./SalarySection";
import DescriptionSection from "./DescriptionSection";
import SkillsSection from "./SkillsSection";
import ResponsibilitiesSection from "./ResponsibilitiesSection";
import RequirementsSection from "./RequirementsSection";
import FormActions from "./FormActions";

const initialFormData = {
  title: "",
  description: "",
  location: "",
  workplaceType: "",
  employmentType: "",
  experience: "",
  openings: 1,
  applicationDeadline: "",

  salary: {
    min: "",
    max: "",
  },

  skills: [],
  responsibilities: [],
  requirements: [],
};

const JobForm = ({ mode = "create", job = null }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { createLoading, updateLoading } = useSelector((state) => state.jobs);

  const loading = mode === "create" ? createLoading : updateLoading;

  const [formData, setFormData] = useState(initialFormData);

  const [skill, setSkill] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [requirement, setRequirement] = useState("");

  useEffect(() => {
    if (mode !== "edit" || !job) {
      return;
    }

    setFormData({
      ...job,
      applicationDeadline: job.applicationDeadline
        ? job.applicationDeadline.split("T")[0]
        : "",
    });
  }, [mode, job]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSalaryChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      salary: {
        ...previous.salary,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    if (Number(formData.salary.min) > Number(formData.salary.max)) {
      toast.error("Minimum salary cannot be greater than maximum salary.");
      return;
    }

    try {
      if (mode === "create") {
        await dispatch(createJob(formData)).unwrap();

        toast.success("Job created successfully.");
      } else {
        await dispatch(
          updateJob({
            jobId: job._id,
            jobData: formData,
          }),
        ).unwrap();

        toast.success("Job updated successfully.");
      }

      navigate("/recruiter/jobs");
    } catch (error) {
      toast.error(error?.message || error || "Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      <BasicInformation formData={formData} handleChange={handleChange} />

      <SalarySection
        salary={formData.salary}
        handleSalaryChange={handleSalaryChange}
      />

      <DescriptionSection
        description={formData.description}
        handleChange={handleChange}
      />

      <SkillsSection
        formData={formData}
        setFormData={setFormData}
        skill={skill}
        setSkill={setSkill}
      />

      <ResponsibilitiesSection
        formData={formData}
        setFormData={setFormData}
        responsibility={responsibility}
        setResponsibility={setResponsibility}
      />

      <RequirementsSection
        formData={formData}
        setFormData={setFormData}
        requirement={requirement}
        setRequirement={setRequirement}
      />

      <FormActions mode={mode} loading={loading} />
    </form>
  );
};

export default JobForm;
