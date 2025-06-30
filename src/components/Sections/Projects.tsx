import { FC, memo } from "react";
import Image from "next/image";

import { portfolioItems } from "../../data/data";

const Projects: FC = memo(() => {
  return (
    <div className="space-y-8 pt-16">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioItems.map((project, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 rounded-lg overflow-hidden transition-all ${
              project.url
                ? "hover:shadow-lg hover:border-sky-300 cursor-pointer"
                : "hover:shadow-lg"
            }`}
            onClick={() => {
              if (project.url) {
                window.open(project.url, "_blank", "noopener,noreferrer");
              }
            }}
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Projects.displayName = "Projects";
export default Projects;
