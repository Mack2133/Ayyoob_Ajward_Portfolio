import ProjectCard from "@/components/project-card";
import { getProjects } from "@/lib/utils";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <main className="flex py-10 flex-col">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-md font-medium text-primary/50">
          Over the past two years, I&#39;ve undertaken a diverse array of projects,
          encompassing both collaborative group endeavors and individual
          assignments. These projects have provided me with invaluable
          experience and expertise across various domains. Explore my portfolio
          to discover the range and depth of my contributions.
        </p>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.project_name} project={project} />
      ))}
    </main>
  );
}
