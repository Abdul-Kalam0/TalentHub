// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// import { createJob } from "../../redux/jobs/jobsThunks";

// const CreateJobPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { loading } = useSelector((state) => state.jobs);

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     location: "",
//     workplaceType: "",
//     employmentType: "",
//     experience: "",
//     salary: {
//       min: "",
//       max: "",
//     },
//     applicationDeadline: "",
//     openings: 1,
//     skills: [],
//     responsibilities: [],
//     requirements: [],
//   });

//   const [skill, setSkill] = useState("");
//   const [responsibility, setResponsibility] = useState("");
//   const [requirement, setRequirement] = useState("");

//   // ==========================
//   // Handle Input Change
//   // ==========================
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ==========================
//   // Handle Salary Change
//   // ==========================
//   const handleSalaryChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       salary: {
//         ...prev.salary,
//         [name]: value,
//       },
//     }));
//   };

//   // ==========================
//   // Skills
//   // ==========================
//   const addSkill = () => {
//     if (!skill.trim()) return;

//     setFormData((prev) => ({
//       ...prev,
//       skills: [...prev.skills, skill.trim()],
//     }));

//     setSkill("");
//   };

//   const removeSkill = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       skills: prev.skills.filter((_, i) => i !== index),
//     }));
//   };

//   // ==========================
//   // Responsibilities
//   // ==========================
//   const addResponsibility = () => {
//     if (!responsibility.trim()) return;

//     setFormData((prev) => ({
//       ...prev,
//       responsibilities: [...prev.responsibilities, responsibility.trim()],
//     }));

//     setResponsibility("");
//   };

//   const removeResponsibility = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       responsibilities: prev.responsibilities.filter((_, i) => i !== index),
//     }));
//   };

//   // ==========================
//   // Requirements
//   // ==========================
//   const addRequirement = () => {
//     if (!requirement.trim()) return;

//     setFormData((prev) => ({
//       ...prev,
//       requirements: [...prev.requirements, requirement.trim()],
//     }));

//     setRequirement("");
//   };

//   const removeRequirement = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       requirements: prev.requirements.filter((_, i) => i !== index),
//     }));
//   };

//   // ==========================
//   // Submit
//   // ==========================
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.skills.length === 0) {
//       toast.error("Please add at least one skill.");
//       return;
//     }

//     if (formData.responsibilities.length === 0) {
//       toast.error("Please add at least one responsibility.");
//       return;
//     }

//     if (formData.requirements.length === 0) {
//       toast.error("Please add at least one requirement.");
//       return;
//     }

//     if (Number(formData.salary.min) > Number(formData.salary.max)) {
//       toast.error("Minimum salary cannot be greater than maximum salary.");
//       return;
//     }

//     try {
//       await dispatch(createJob(formData)).unwrap();

//       navigate("/recruiter/jobs");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow-lg">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Create Job</h1>

//           <p className="mt-2 text-gray-500">
//             Create a new job posting for your company.
//           </p>

//           <p className="mt-2 text-sm text-gray-500">
//             Fields marked with{" "}
//             <span className="font-semibold text-red-500">*</span> are required.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* ========================== */}
//           {/* Basic Information */}
//           {/* ========================== */}

//           <div className="rounded-xl border border-gray-200 p-6">
//             <h2 className="mb-6 text-xl font-semibold text-gray-800">
//               Basic Information
//             </h2>

//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//               {/* Job Title */}
//               <div className="md:col-span-2">
//                 <label className="mb-2 block font-medium text-gray-700">
//                   Job Title <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   placeholder="e.g. MERN Stack Developer"
//                   required
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>

//               {/* Location */}
//               <div>
//                 <label className="mb-2 block font-medium text-gray-700">
//                   Location <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   placeholder="Noida"
//                   required
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>

//               {/* Openings */}
//               <div>
//                 <label className="mb-2 block font-medium text-gray-700">
//                   Openings
//                 </label>

//                 <input
//                   type="number"
//                   min="1"
//                   name="openings"
//                   value={formData.openings}
//                   onChange={handleChange}
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>

//               {/* Employment Type */}
//               <div>
//                 <label className="mb-2 block font-medium text-gray-700">
//                   Employment Type <span className="text-red-500">*</span>
//                 </label>

//                 <select
//                   name="employmentType"
//                   value={formData.employmentType}
//                   onChange={handleChange}
//                   required
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//                 >
//                   <option value="">Select Employment Type</option>
//                   <option value="Full-time">Full-time</option>
//                   <option value="Part-time">Part-time</option>
//                   <option value="Internship">Internship</option>
//                   <option value="Contract">Contract</option>
//                 </select>
//               </div>

//               {/* Workplace Type */}
//               <div>
//                 <label className="mb-2 block font-medium text-gray-700">
//                   Workplace Type <span className="text-red-500">*</span>
//                 </label>

//                 <select
//                   name="workplaceType"
//                   value={formData.workplaceType}
//                   onChange={handleChange}
//                   required
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//                 >
//                   <option value="">Select Workplace Type</option>
//                   <option value="Remote">Remote</option>
//                   <option value="Hybrid">Hybrid</option>
//                   <option value="On-site">On-site</option>
//                 </select>
//               </div>

//               {/* Experience */}
//               <div>
//                 <label className="mb-2 block font-medium text-gray-700">
//                   Experience <span className="text-red-500">*</span>
//                 </label>

//                 <select
//                   name="experience"
//                   value={formData.experience}
//                   onChange={handleChange}
//                   required
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//                 >
//                   <option value="">Select Experience</option>
//                   <option value="Fresher">Fresher</option>
//                   <option value="0-1 Years">0-1 Years</option>
//                   <option value="1-3 Years">1-3 Years</option>
//                   <option value="3-5 Years">3-5 Years</option>
//                   <option value="5+ Years">5+ Years</option>
//                 </select>
//               </div>

//               {/* Application Deadline */}
//               <div>
//                 <label className="mb-2 block font-medium text-gray-700">
//                   Application Deadline <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                   type="date"
//                   name="applicationDeadline"
//                   value={formData.applicationDeadline}
//                   onChange={handleChange}
//                   required
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>
//             </div>
//           </div>
//           {/* ========================== */}
//           {/* Salary */}
//           {/* ========================== */}

//           <div className="rounded-xl border border-gray-200 p-6">
//             <h2 className="mb-6 text-xl font-semibold text-gray-800">Salary</h2>

//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//               {/* Minimum Salary */}
//               <div>
//                 <label className="mb-2 block font-medium text-gray-700">
//                   Minimum Salary <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                   type="number"
//                   name="min"
//                   value={formData.salary.min}
//                   onChange={handleSalaryChange}
//                   placeholder="500000"
//                   min="0"
//                   required
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>

//               {/* Maximum Salary */}
//               <div>
//                 <label className="mb-2 block font-medium text-gray-700">
//                   Maximum Salary <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                   type="number"
//                   name="max"
//                   value={formData.salary.max}
//                   onChange={handleSalaryChange}
//                   placeholder="1200000"
//                   min="0"
//                   required
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* ========================== */}
//           {/* Job Description */}
//           {/* ========================== */}

//           <div className="rounded-xl border border-gray-200 p-6">
//             <h2 className="mb-6 text-xl font-semibold text-gray-800">
//               Job Description
//             </h2>

//             <label className="mb-2 block font-medium text-gray-700">
//               Description <span className="text-red-500">*</span>
//             </label>

//             <textarea
//               rows={8}
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Write a detailed job description..."
//               required
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//             />
//           </div>
//           {/* ========================== */}
//           {/* Skills */}
//           {/* ========================== */}

//           <div className="rounded-xl border border-gray-200 p-6">
//             <h2 className="mb-6 text-xl font-semibold text-gray-800">Skills</h2>

//             <label className="mb-2 block font-medium text-gray-700">
//               Required Skills <span className="text-red-500">*</span>
//             </label>

//             <div className="flex gap-3">
//               <input
//                 type="text"
//                 value={skill}
//                 onChange={(e) => setSkill(e.target.value)}
//                 placeholder="e.g. React"
//                 className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//               />

//               <button
//                 type="button"
//                 onClick={addSkill}
//                 className="rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
//               >
//                 Add
//               </button>
//             </div>

//             {formData.skills.length > 0 && (
//               <div className="mt-6 flex flex-wrap gap-3">
//                 {formData.skills.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700"
//                   >
//                     <span>{item}</span>

//                     <button
//                       type="button"
//                       onClick={() => removeSkill(index)}
//                       className="font-bold text-red-500 hover:text-red-700"
//                     >
//                       ×
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* ========================== */}
//           {/* Responsibilities */}
//           {/* ========================== */}

//           <div className="rounded-xl border border-gray-200 p-6">
//             <h2 className="mb-6 text-xl font-semibold text-gray-800">
//               Responsibilities
//             </h2>

//             <label className="mb-2 block font-medium text-gray-700">
//               Job Responsibilities <span className="text-red-500">*</span>
//             </label>

//             <div className="flex gap-3">
//               <input
//                 type="text"
//                 value={responsibility}
//                 onChange={(e) => setResponsibility(e.target.value)}
//                 placeholder="e.g. Develop REST APIs"
//                 className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//               />

//               <button
//                 type="button"
//                 onClick={addResponsibility}
//                 className="rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
//               >
//                 Add
//               </button>
//             </div>

//             {formData.responsibilities.length > 0 && (
//               <div className="mt-6 flex flex-wrap gap-3">
//                 {formData.responsibilities.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700"
//                   >
//                     <span>{item}</span>

//                     <button
//                       type="button"
//                       onClick={() => removeResponsibility(index)}
//                       className="font-bold text-red-500 hover:text-red-700"
//                     >
//                       ×
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* ========================== */}
//           {/* Requirements */}
//           {/* ========================== */}

//           <div className="rounded-xl border border-gray-200 p-6">
//             <h2 className="mb-6 text-xl font-semibold text-gray-800">
//               Requirements
//             </h2>

//             <label className="mb-2 block font-medium text-gray-700">
//               Candidate Requirements <span className="text-red-500">*</span>
//             </label>

//             <div className="flex gap-3">
//               <input
//                 type="text"
//                 value={requirement}
//                 onChange={(e) => setRequirement(e.target.value)}
//                 placeholder="e.g. 2+ Years Experience"
//                 className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
//               />

//               <button
//                 type="button"
//                 onClick={addRequirement}
//                 className="rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
//               >
//                 Add
//               </button>
//             </div>

//             {formData.requirements.length > 0 && (
//               <div className="mt-6 flex flex-wrap gap-3">
//                 {formData.requirements.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-yellow-700"
//                   >
//                     <span>{item}</span>

//                     <button
//                       type="button"
//                       onClick={() => removeRequirement(index)}
//                       className="font-bold text-red-500 hover:text-red-700"
//                     >
//                       ×
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           {/* ========================== */}
//           {/* Actions */}
//           {/* ========================== */}

//           <div className="flex flex-col-reverse gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">
//             <button
//               type="button"
//               onClick={() => navigate("/recruiter/jobs")}
//               className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={loading}
//               className="rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {loading ? "Creating Job..." : "Create Job"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateJobPage;

import JobForm from "../../components/recruiter/jobForm/JobForm";

const CreateJobPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create Job</h1>

        <p className="mt-2 text-gray-600">
          Fill in the details below to publish a new job posting.
        </p>
      </div>

      {/* Job Form */}

      <JobForm mode="create" />
    </div>
  );
};

export default CreateJobPage;
