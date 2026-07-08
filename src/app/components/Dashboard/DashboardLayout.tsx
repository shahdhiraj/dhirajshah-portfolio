import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { ProjectProvider } from "../../context/ProjectContext";

export default function DashboardLayout() {
  return (
    <ProjectProvider>
      <div className="flex h-screen w-full bg-zinc-950 text-zinc-50 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 relative">
          <div className="max-w-6xl mx-auto space-y-8">
            <Outlet />
          </div>
        </main>
      </div>
    </ProjectProvider>
  );
}
