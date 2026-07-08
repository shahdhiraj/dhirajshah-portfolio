import { createContext, useContext, useState, ReactNode } from "react";
import { ProjectData } from "../pages/Dashboard/Projects";

interface ProjectContextType {
  projects: ProjectData[];
  addProject: (project: Omit<ProjectData, "id">) => void;
  updateProject: (project: ProjectData) => void;
  deleteProject: (id: string) => void;
}

const mockProjects: ProjectData[] = [
  {
    id: "1",
    title: "Portfolio Redesign",
    description: "A complete overhaul of my personal portfolio using Next.js and Tailwind CSS.",
    content: "## Overview\nThis project involved a complete redesign from the ground up, focusing on performance, accessibility, and modern aesthetics.\n\n## Technical Details\n- Built with Next.js App Router for optimal Server Side Rendering.\n- Used Tailwind CSS for rapid styling.\n- Implemented fluid animations using Framer Motion.",
    tags: "React, Tailwind, Framer Motion",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    link: "https://dhiraj.dev",
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with Stripe integration.",
    content: "## Overview\nDeveloped a full-stack e-commerce platform that allows users to browse products, add them to a cart, and securely checkout using Stripe.\n\n## Key Features\n- Secure authentication using JWT.\n- Real-time inventory tracking.\n- Stripe payment gateway integration.",
    tags: "Node.js, Express, React, MongoDB",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    link: "https://shop.example.com",
  },
];

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<ProjectData[]>(mockProjects);

  const addProject = (project: Omit<ProjectData, "id">) => {
    const newProject = { ...project, id: Math.random().toString(36).substring(7) };
    setProjects((prev) => [...prev, newProject]);
  };

  const updateProject = (project: ProjectData) => {
    setProjects((prev) => prev.map((p) => (p.id === project.id ? project : p)));
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
}
