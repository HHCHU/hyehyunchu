import { FC, memo } from "react";
import Image from "next/image";

import { portfolioItems } from "../../data/data";

const Projects: FC = memo(() => {
  return (
    <div className="space-y-6 md:space-y-10 pt-12 md:pt-20">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {portfolioItems.map((project, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 ${
              project.url
                ? "hover:shadow-xl hover:border-sky-300 hover:scale-[1.02] cursor-pointer"
                : "hover:shadow-lg"
            }`}
            onClick={() => {
              if (project.url) {
                window.open(project.url, "_blank", "noopener,noreferrer");
              }
            }}
          >
            <div className="relative h-48 md:h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="py-6 px-6 md:py-8 md:px-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight tracking-tight">
                {project.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line mb-0">
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
