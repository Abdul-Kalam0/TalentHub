import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const emptyProject = {
  title: "",
  description: "",
  technologies: [],
  projectUrl: "",
  githubUrl: "",
};

const ProjectsSection = ({ formData, setFormData }) => {
  const projects = formData.projects || [];

  // ==========================================
  // Technology Input
  // ==========================================

  const [technologyInputs, setTechnologyInputs] = useState({});

  // ==========================================
  // Add Project
  // ==========================================

  const handleAddProject = () => {
    setFormData((previous) => ({
      ...previous,
      projects: [{ ...emptyProject }, ...previous.projects],
    }));
  };

  // ==========================================
  // Remove Project
  // ==========================================

  const handleRemoveProject = (projectIndex) => {
    setFormData((previous) => ({
      ...previous,
      projects: previous.projects.filter((_, index) => index !== projectIndex),
    }));
  };

  // ==========================================
  // Update Project Field
  // ==========================================

  const handleProjectChange = (projectIndex, field, value) => {
    setFormData((previous) => ({
      ...previous,
      projects: previous.projects.map((project, index) =>
        index === projectIndex
          ? {
              ...project,
              [field]: value,
            }
          : project,
      ),
    }));
  };

  // ==========================================
  // Technology Input Change
  // ==========================================

  const handleTechnologyInput = (projectIndex, value) => {
    setTechnologyInputs((previous) => ({
      ...previous,
      [projectIndex]: value,
    }));
  };

  // ==========================================
  // Add Technology
  // ==========================================

  const handleAddTechnology = (projectIndex) => {
    const technology = technologyInputs[projectIndex]?.trim();

    if (!technology) return;

    setFormData((previous) => ({
      ...previous,
      projects: previous.projects.map((project, index) => {
        if (index !== projectIndex) return project;

        if (project.technologies.includes(technology)) {
          return project;
        }

        return {
          ...project,
          technologies: [...project.technologies, technology],
        };
      }),
    }));

    setTechnologyInputs((previous) => ({
      ...previous,
      [projectIndex]: "",
    }));
  };

  // ==========================================
  // Remove Technology
  // ==========================================

  const handleRemoveTechnology = (projectIndex, technology) => {
    setFormData((previous) => ({
      ...previous,
      projects: previous.projects.map((project, index) =>
        index === projectIndex
          ? {
              ...project,
              technologies: project.technologies.filter(
                (item) => item !== technology,
              ),
            }
          : project,
      ),
    }));
  };

  return (
    <section>
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
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
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* Empty State */}

      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            No Projects Added
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Add your best projects to strengthen your profile.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {projects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="rounded-2xl border border-gray-200 p-7 shadow-sm"
            >
              {/* Card Header */}

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.title?.trim()
                      ? project.title
                      : projectIndex === 0
                        ? "New Project"
                        : `Project ${projectIndex + 1}`}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Add your project details, technologies and links.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveProject(projectIndex)}
                  className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Project Title */}

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Project Title
                  </label>

                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) =>
                      handleProjectChange(projectIndex, "title", e.target.value)
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
                      handleProjectChange(
                        projectIndex,
                        "description",
                        e.target.value,
                      )
                    }
                    placeholder="Describe your project..."
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Technologies */}

                <div className="md:col-span-2">
                  <div className="mb-3 flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">
                      Technologies
                    </label>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {project.technologies.length} Tech
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={technologyInputs[projectIndex] || ""}
                      onChange={(e) =>
                        handleTechnologyInput(projectIndex, e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTechnology(projectIndex);
                        }
                      }}
                      placeholder="React, Node.js, MongoDB..."
                      className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() => handleAddTechnology(projectIndex)}
                      className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Add
                    </button>
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    Press Enter or click Add.
                  </p>

                  {project.technologies.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.technologies.map((technology) => (
                        <div
                          key={technology}
                          className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                        >
                          <span>{technology}</span>

                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveTechnology(projectIndex, technology)
                            }
                            className="font-bold hover:text-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-5 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-5 text-center">
                      <p className="text-sm text-gray-500">
                        No technologies added yet.
                      </p>
                    </div>
                  )}
                </div>

                {/* Live URL */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Live Project URL
                  </label>

                  <input
                    type="url"
                    value={project.projectUrl}
                    onChange={(e) =>
                      handleProjectChange(
                        projectIndex,
                        "projectUrl",
                        e.target.value,
                      )
                    }
                    placeholder="https://yourproject.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* GitHub */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    GitHub Repository
                  </label>

                  <input
                    type="url"
                    value={project.githubUrl}
                    onChange={(e) =>
                      handleProjectChange(
                        projectIndex,
                        "githubUrl",
                        e.target.value,
                      )
                    }
                    placeholder="https://github.com/username/project"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
