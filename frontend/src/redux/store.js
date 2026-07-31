import { configureStore } from "@reduxjs/toolkit";

import jobsReducer from "./jobs/jobsSlice";
import applicationsReducer from "./applications/applicationsSlice";
import bookmarksReducer from "./bookmarks/bookmarksSlice";
import recruiterReducer from "./recruiter/recruiterSlice";
import dashboardReducer from "./dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    applications: applicationsReducer,
    bookmarks: bookmarksReducer,
    recruiter: recruiterReducer,
    dashboard: dashboardReducer,
  },
});
