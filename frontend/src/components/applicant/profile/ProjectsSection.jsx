import { Plus, Trash2 } from "lucide-react";

const emptyProject = {
  title: "",
  description: "",
  technologies: [],
  projectUrl: "",
  githubUrl: "",
};

const ProjectsSection = ({ formData, setFormData }) => {
  const projects = formData.projects;

  // ==========================
  // Add Project
  // ==========================

  const handleAddProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [{ ...emptyProject }, ...prev.projects],
    }));
  };

  // ==========================
  // Remove Project
  // ==========================

  const handleRemoveProject = (index) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  // ==========================
  // Input Change
  // ==========================

  const handleChange = (index, name, value) => {
    const updatedProjects = [...projects];

    updatedProjects[index][name] = value;

    setFormData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  // ==========================
  // Technologies
  // ==========================

  const handleTechnologies = (index, value) => {
    const updatedProjects = [...projects];

    updatedProjects[index].technologies = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    setFormData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  return (
    <section>
      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Projects
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Showcase projects that demonstrate your technical expertise.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddProject}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center sm:p-10">
          <h3 className="text-lg font-semibold text-gray-900">
            No Projects Added
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Add your best projects to strengthen your profile.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-5 sm:p-7"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Project {index + 1}
                </h3>

                <button
                  type="button"
                  onClick={() => handleRemoveProject(index)}
                  className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* Title */}

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Project Title
                  </label>

                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                    placeholder="InterviewMock AI"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Description */}

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Description
                  </label>

                  <textarea
                    rows={4}
                    value={project.description}
                    onChange={(e) =>
                      handleChange(index, "description", e.target.value)
                    }
                    placeholder="Describe your project..."
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
                {/* Technologies */}

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Technologies Used
                  </label>

                  <input
                    type="text"
                    value={project.technologies.join(", ")}
                    onChange={(e) => handleTechnologies(index, e.target.value)}
                    placeholder="React, Node.js, MongoDB"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-300
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    Separate multiple technologies using commas.
                  </p>
                </div>

                {/* Project URL */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Live Project URL
                  </label>

                  <input
                    type="url"
                    value={project.projectUrl}
                    onChange={(e) =>
                      handleChange(index, "projectUrl", e.target.value)
                    }
                    placeholder="https://yourproject.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-300
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>

                {/* GitHub URL */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    GitHub Repository
                  </label>

                  <input
                    type="url"
                    value={project.githubUrl}
                    onChange={(e) =>
                      handleChange(index, "githubUrl", e.target.value)
                    }
                    placeholder="https://github.com/username/repository"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-300
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
