import { useState } from "react";
import { Plus, Edit2, Trash2, FolderKanban, Eye, X, ExternalLink } from "lucide-react";
import ProjectForm from "../../components/Dashboard/ProjectForm";
import { useProjects } from "../../context/ProjectContext";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string;
  imageUrl: string;
  link: string;
}

export default function Projects() {
  const { projects, addProject, updateProject, deleteProject } = useProjects();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectData | null>(null);
  const [viewingProject, setViewingProject] = useState<ProjectData | null>(null);

  const handleSave = (project: Omit<ProjectData, "id">) => {
    if (editingProject) {
      updateProject({ ...project, id: editingProject.id });
    } else {
      addProject(project);
    }
    setIsFormOpen(false);
    setEditingProject(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      deleteProject(id);
    }
  };

  const openEdit = (project: ProjectData) => {
    setEditingProject(project);
    setIsFormOpen(true);
  };

  const openCreate = () => {
    setEditingProject(null);
    setIsFormOpen(true);
  };

  const openView = (project: ProjectData) => {
    setViewingProject(project);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Manage Projects</h1>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden"
          >
            <div className="aspect-video w-full bg-zinc-800 overflow-hidden">
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-600">No Image</div>
              )}
            </div>
            
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-zinc-400 mb-3 line-clamp-2">{project.description}</p>
              
              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors mb-3 w-fit"
                >
                  <ExternalLink className="w-3 h-3" />
                  {project.link.replace(/^https?:\/\//, '').slice(0, 30)}
                </a>
              )}
              
              {/* Content status */}
              <div className="mb-3">
                {project.content ? (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Content written
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                    No content
                  </span>
                )}
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.split(',').map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-800 text-xs rounded text-zinc-300">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <span className="text-xs text-zinc-500">
                    ID: {project.id}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openView(project)}
                      className="p-2 text-zinc-400 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-md transition-colors"
                      title="View Content"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => openEdit(project)}
                      className="p-2 text-zinc-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-md transition-colors"
                      title="Edit Project"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-20 border border-zinc-800 border-dashed rounded-xl">
          <FolderKanban className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium">No projects found</h3>
          <p className="text-zinc-500 mt-1">Get started by creating a new project.</p>
        </div>
      )}

      {isFormOpen && (
        <ProjectForm
          project={editingProject}
          onSave={handleSave}
          onClose={() => setIsFormOpen(false)}
        />
      )}

      {/* Content Preview Modal */}
      {viewingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-zinc-800 shrink-0">
              <h2 className="text-xl font-semibold">
                Preview: {viewingProject.title}
              </h2>
              <button
                onClick={() => setViewingProject(null)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto whitespace-pre-wrap text-zinc-300 font-serif leading-relaxed">
              {viewingProject.content || <span className="text-zinc-600 italic">No content provided for this project.</span>}
            </div>
            
            <div className="p-4 border-t border-zinc-800 flex justify-end shrink-0">
               <button
                onClick={() => setViewingProject(null)}
                className="px-4 py-2 text-sm font-medium bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
