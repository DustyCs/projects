import { useParams } from "react-router-dom";
import { projects } from "../../../data/projects";

export default function ProjectsPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Project not found!</p>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-extrabold mb-2">{project.title}</h1>
      <p className="mb-4 font-semibold font-sans text-lg">{project.description}</p>

      <div className={`flex gap-4 mb-6 ${ project.style === 'column' ? 'md:flex-col' : 'md:flex-row' }`}>
        {project.gallery.map((item, idx) => (
          <div key={idx} className="flex-1 rounded-lg overflow-hidden">
            <div className="flex justify-center gap-2 shadow-lg">
                {
                  item.image.map((image, idx) => (
                    <img key={idx} src={image} alt={item.description} className="max-w-[50%]" />
                  ))      
                  
                }
            </div>
            {item.description && (
              <p className="p-2 font-semibold font-sans text-md">{item.description}</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-3 mb-6">
        {project.links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex gap-2 mb-6">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={() => window.history.back()}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Return
      </button>
    </div>
  );
}