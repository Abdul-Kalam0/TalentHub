import { LayoutDashboard, Search, BriefcaseBusiness, User } from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    path: "/applicant/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Browse Jobs",
    path: "/applicant/jobs",
    icon: Search,
  },
  {
    label: "Applied Jobs",
    path: "/applicant/applied-jobs",
    icon: BriefcaseBusiness,
  },
  {
    label: "Profile",
    path: "/applicant/profile",
    icon: User,
  },
];

export default navigation;
