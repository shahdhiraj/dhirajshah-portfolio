import { useProjects } from "../../context/ProjectContext";
import { useNavigate } from "react-router";
import { FolderKanban, Tag, ExternalLink, FileText, ArrowRight } from "lucide-react";

export default function DashboardOverview() {
  const { projects } = useProjects();
  const navigate = useNavigate();

  // Calculate dynamic stats
  const totalProjects = projects.length;
  const allTags = projects.flatMap((p) =>
    p.tags.split(",").map((t) => t.trim()).filter(Boolean)
  );
  const uniqueTags = new Set(allTags).size;
  const totalLinks = projects.filter((p) => p.link).length;
  const totalWithContent = projects.filter((p) => p.content).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-zinc-400 mt-1">Real-time dashboard statistics and project summary.</p>
        </div>
        <button
          onClick={() => navigate("/dashboard/projects")}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
        >
          Manage Projects
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Projects */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors">
          <div className="flex items-center justify-between pb-3">
            <h3 className="text-sm font-medium text-zinc-400">Total Projects</h3>
            <div className="p-2 rounded-lg bg-blue-500/10">
              <FolderKanban className="h-4 w-4 text-blue-400" />
            </div>
          </div>
          <div className="text-3xl font-bold">{totalProjects}</div>
          <p className="text-xs text-zinc-500 mt-1">Across all categories</p>
        </div>

        {/* Active Tags */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors">
          <div className="flex items-center justify-between pb-3">
            <h3 className="text-sm font-medium text-zinc-400">Unique Tags</h3>
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <Tag className="h-4 w-4 text-emerald-400" />
            </div>
          </div>
          <div className="text-3xl font-bold">{uniqueTags}</div>
          <p className="text-xs text-zinc-500 mt-1">Across all projects</p>
        </div>

        {/* Projects with Links */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors">
          <div className="flex items-center justify-between pb-3">
            <h3 className="text-sm font-medium text-zinc-400">With Links</h3>
            <div className="p-2 rounded-lg bg-violet-500/10">
              <ExternalLink className="h-4 w-4 text-violet-400" />
            </div>
          </div>
          <div className="text-3xl font-bold">{totalLinks}</div>
          <p className="text-xs text-zinc-500 mt-1">Projects with live URLs</p>
        </div>

        {/* Projects with Content */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors">
          <div className="flex items-center justify-between pb-3">
            <h3 className="text-sm font-medium text-zinc-400">With Content</h3>
            <div className="p-2 rounded-lg bg-amber-500/10">
              <FileText className="h-4 w-4 text-amber-400" />
            </div>
          </div>
          <div className="text-3xl font-bold">{totalWithContent}</div>
          <p className="text-xs text-zinc-500 mt-1">Full case studies written</p>
        </div>
      </div>

      {/* Recent Projects Table */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-lg font-semibold">All Projects</h2>
          <span className="text-xs text-zinc-500">{totalProjects} total</span>
        </div>

        {projects.length === 0 ? (
          <div className="p-12 text-center">
            <FolderKanban className="w-10 h-10 text-zinc-700 mx-auto mb-3" />
            <p className="text-zinc-500">No projects yet. Go to Manage Projects to add one.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 text-left">
                  <th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Tags</th>
                  <th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Link</th>
                  <th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Content</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-zinc-800/30 transition-colors">
                    {/* Project Info */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800 overflow-hidden shrink-0">
                          {project.imageUrl ? (
                            <img src={project.imageUrl} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-zinc-600 text-xs">N/A</div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium truncate">{project.title}</div>
                          <div className="text-xs text-zinc-500 truncate max-w-[250px]">{project.description}</div>
                        </div>
                      </div>
                    </td>

                    {/* Tags */}
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.split(",").slice(0, 3).map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 bg-zinc-800 text-xs rounded text-zinc-400">
                            {tag.trim()}
                          </span>
                        ))}
                        {project.tags.split(",").length > 3 && (
                          <span className="px-2 py-0.5 text-xs text-zinc-600">
                            +{project.tags.split(",").length - 3}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Link */}
                    <td className="px-6 py-4">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-xs"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Visit
                        </a>
                      ) : (
                        <span className="text-zinc-600 text-xs">No link</span>
                      )}
                    </td>

                    {/* Content Status */}
                    <td className="px-6 py-4">
                      {project.content ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Written
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                          Empty
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
