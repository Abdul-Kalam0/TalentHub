import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  updateApplicantProfile,
  uploadApplicantPhoto,
  uploadApplicantResume,
} from "../../../redux/applicant/applicantThunks";

import PhotoSection from "./PhotoSection";
import ResumeSection from "./ResumeSection";
import PersonalInformation from "./PersonalInformation";
import ProfessionalInformation from "./ProfessionalInformation";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import SocialLinksSection from "./SocialLinksSection";
import FormActions from "./FormActions";

const ApplicantProfileForm = ({ profile }) => {
  const dispatch = useDispatch();

  const { updateLoading, photoLoading, resumeLoading } = useSelector(
    (state) => state.applicant,
  );

  const [formData, setFormData] = useState({
    headline: "",
    bio: "",
    phone: "",
    experience: "",
    education: "",
    currentLocation: "",
    skills: [],
    projects: [],
    socialLinks: {
      github: "",
      linkedin: "",
      portfolio: "",
    },
  });

  const [skill, setSkill] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // ==========================================
  // Populate Form
  // ==========================================

  useEffect(() => {
    if (!profile) return;

    setFormData({
      headline: profile.headline || "",
      bio: profile.bio || "",
      phone: profile.phone || "",
      experience: profile.experience || "",
      education: profile.education || "",
      currentLocation: profile.currentLocation || "",
      skills: profile.skills || [],

      // Technologies remain arrays
      projects:
        profile.projects?.map((project) => ({
          ...project,
          technologies: project.technologies || [],
        })) || [],

      socialLinks: {
        github: profile.socialLinks?.github || "",
        linkedin: profile.socialLinks?.linkedin || "",
        portfolio: profile.socialLinks?.portfolio || "",
      },
    });
  }, [profile]);

  // ==========================================
  // Input Change
  // ==========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "phone") {
      const phone = value.replace(/\D/g, "").slice(0, 10);

      setFormData((previous) => ({
        ...previous,
        phone,
      }));

      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ==========================================
  // Social Links
  // ==========================================

  const handleSocialChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      socialLinks: {
        ...previous.socialLinks,
        [name]: value,
      },
    }));
  };

  // ==========================================
  // Upload Photo
  // ==========================================

  const handlePhotoUpload = async (file) => {
    try {
      await dispatch(uploadApplicantPhoto(file)).unwrap();

      toast.success("Profile photo uploaded successfully.");
    } catch (error) {
      toast.error(error || "Failed to upload photo.");
    }
  };

  // ==========================================
  // Upload Resume
  // ==========================================

  const handleResumeUpload = async (file) => {
    try {
      await dispatch(uploadApplicantResume(file)).unwrap();

      toast.success("Resume uploaded successfully.");
    } catch (error) {
      toast.error(error || "Failed to upload resume.");
    }
  };

  // ==========================================
  // Submit
  // ==========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!profile?.photo) {
      return toast.error("Please upload your profile photo.");
    }

    if (!profile?.resume) {
      return toast.error("Please upload your resume.");
    }

    if (!formData.phone.trim()) {
      return toast.error("Phone number is required.");
    }

    if (formData.phone.length !== 10) {
      return toast.error("Phone number must be exactly 10 digits.");
    }

    if (!formData.currentLocation.trim()) {
      return toast.error("Current location is required.");
    }

    if (!formData.experience) {
      return toast.error("Please select your experience.");
    }

    if (!formData.education.trim()) {
      return toast.error("Education is required.");
    }

    if (formData.skills.length === 0) {
      return toast.error("Please add at least one skill.");
    }

    const payload = {
      ...formData,

      projects: formData.projects.map((project) => ({
        ...project,
        technologies: project.technologies || [],
      })),
    };

    try {
      await dispatch(updateApplicantProfile(payload)).unwrap();

      toast.success("Profile updated successfully.");

      setIsEditing(false);
    } catch (error) {
      toast.error(error || "Something went wrong.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm"
    >
      {/* Photo */}
      <PhotoSection
        photo={profile?.photo}
        loading={photoLoading}
        onUpload={handlePhotoUpload}
      />
      {/* Personal Information */}
      <PersonalInformation
        profile={profile}
        formData={formData}
        handleChange={handleChange}
      />
      {/* Professional Information */}
      <ProfessionalInformation
        formData={formData}
        handleChange={handleChange}
      />
      {/* Skills */}
      <SkillsSection
        formData={formData}
        setFormData={setFormData}
        skill={skill}
        setSkill={setSkill}
      />
      {/* Projects */}
      <ProjectsSection formData={formData} setFormData={setFormData} />
      {/* Resume */}
      <ResumeSection
        resume={profile?.resume}
        loading={resumeLoading}
        onUpload={handleResumeUpload}
      />
      {/* Social Links */}
      <SocialLinksSection
        socialLinks={formData.socialLinks}
        handleChange={handleSocialChange}
      />
      {/* Save Button */}
      <FormActions
        loading={updateLoading}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />{" "}
    </form>
  );
};

export default ApplicantProfileForm;
