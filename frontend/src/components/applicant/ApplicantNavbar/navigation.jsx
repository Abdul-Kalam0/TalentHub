import {
  LayoutDashboard,
  Search,
  BriefcaseBusiness,
  Bookmark,
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
];

export default navigation;
