import {
  LayoutDashboard,
  Search,
  BriefcaseBusiness,
  Bookmark,
  User,
} from "lucide-react";

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
    label: "Bookmarks",
    path: "/applicant/bookmarks",
    icon: Bookmark,
  },
  // {
  //   label: "Profile",
  //   path: "/applicant/profile",
  //   icon: User,
  // },
];

export default navigation;
