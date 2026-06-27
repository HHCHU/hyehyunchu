import { FC, memo } from "react";
import Image from "next/image";

import { portfolioItems } from "../../data/data";

const Projects: FC = memo(() => {
  return (
    <div className="space-y-8 md:space-y-10 pt-12 md:pt-20">
      <div>
        <h1 className="text-3xl md:text-4xl font-light text-black mb-3" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {portfolioItems.map((project, index) => (
          <div
            key={index}
            className={`transition-all ${
              project.url
                ? "hover:opacity-70 cursor-pointer"
                : ""
            }`}
            onClick={() => {
              if (project.url) {
                window.open(project.url, "_blank", "noopener,noreferrer");
              }
            }}
          >
            <div className="relative h-48 md:h-56 border border-black/20 rounded-md mb-4 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-normal text-black mb-3 leading-tight" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                {project.title}
              </h3>
              <p className="text-black/80 text-base leading-relaxed whitespace-pre-line mb-0 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
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
