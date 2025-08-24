import { useParams } from "react-router-dom";
import { projects } from "../../../data/projects";

export default function ProjectsPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Project not found!</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <button onClick={() => window.history.back()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Return</button>
    </div>
  );
}
