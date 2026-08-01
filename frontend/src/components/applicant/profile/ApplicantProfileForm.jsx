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
    socialLinks: {
      github: "",
      linkedin: "",
      portfolio: "",
    },
  });

  const [skill, setSkill] = useState("");

  useEffect(() => {
    if (profile) {
      setFormData({
        headline: profile.headline || "",
        bio: profile.bio || "",
        phone: profile.phone || "",
        experience: profile.experience || "",
        education: profile.education || "",
        currentLocation: profile.currentLocation || "",
        skills: profile.skills || [],
        socialLinks: {
          github: profile.socialLinks?.github || "",
          linkedin: profile.socialLinks?.linkedin || "",
          portfolio: profile.socialLinks?.portfolio || "",
        },
      });
    }
  }, [profile]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Phone accepts only digits and max 10 characters
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

  const handlePhotoUpload = async (file) => {
    try {
      await dispatch(uploadApplicantPhoto(file)).unwrap();

      toast.success("Profile photo uploaded successfully.");
    } catch (error) {
      toast.error(error || "Failed to upload photo.");
    }
  };

  const handleResumeUpload = async (file) => {
    try {
      await dispatch(uploadApplicantResume(file)).unwrap();

      toast.success("Resume uploaded successfully.");
    } catch (error) {
      toast.error(error || "Failed to upload resume.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!profile?.photo) {
      return toast.error("Please upload your profile photo.");
    }

    if (!profile?.resume) {
      return toast.error("Please upload your resume.");
    }

    const phone = formData.phone.trim();

    if (!phone) {
      return toast.error("Phone number is required.");
    }

    if (phone.length !== 10) {
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

    try {
      await dispatch(updateApplicantProfile(formData)).unwrap();

      toast.success("Profile updated successfully.");
    } catch (error) {
      toast.error(error || "Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      <PhotoSection
        photo={profile?.photo}
        loading={photoLoading}
        onUpload={handlePhotoUpload}
      />

      <ResumeSection
        resume={profile?.resume}
        loading={resumeLoading}
        onUpload={handleResumeUpload}
      />

      <PersonalInformation
        profile={profile}
        formData={formData}
        handleChange={handleChange}
      />

      <ProfessionalInformation
        formData={formData}
        handleChange={handleChange}
      />

      <SkillsSection
        formData={formData}
        setFormData={setFormData}
        skill={skill}
        setSkill={setSkill}
      />

      <SocialLinksSection
        socialLinks={formData.socialLinks}
        handleChange={handleSocialChange}
      />

      <FormActions loading={updateLoading} />
    </form>
  );
};

export default ApplicantProfileForm;
