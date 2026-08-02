import { Trophy, Users, BadgeCheck, Code2 } from "lucide-react";

const aiActions = [
  {
    id: "top-candidates",
    title: "Suggest Top 3 Candidates",
    description: "Find the strongest applicants for this job.",
    prompt: "Suggest the top 3 candidates.",
    icon: Trophy,
  },

  {
    id: "summary",
    title: "Summarize Applicants",
    description: "Generate a concise summary of every applicant.",
    prompt: "Summarize all applicants.",
    icon: Users,
  },

  {
    id: "interview",
    title: "Interview Recommendation",
    description: "Identify who should be interviewed first.",
    prompt: "Who should I interview first?",
    icon: BadgeCheck,
  },

  {
    id: "frontend",
    title: "Strongest Frontend Profile",
    description: "Find the applicant with the strongest frontend skills.",
    prompt: "Which applicant has the strongest frontend profile?",
    icon: Code2,
  },
];

export default aiActions;
