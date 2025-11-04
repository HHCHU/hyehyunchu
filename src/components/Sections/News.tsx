import { FC, memo } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { news } from "../../data/data";

const News: FC = memo(() => {
  return (
    <div className="space-y-6 md:space-y-10 pt-12 md:pt-20">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">News</h1>
        <p className="text-base md:text-lg text-gray-600">Latest updates and announcements</p>
      </div>

      <div className="space-y-4 md:space-y-8">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl py-6 px-6 md:py-8 md:px-10 hover:shadow-lg hover:border-sky-300 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2.5 text-gray-500 text-sm">
                <CalendarIcon className="h-4 w-4" />
                <span className="font-medium">{item.date}</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight tracking-tight">
              {item.title}
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>

            {item.link && item.link !== "#" && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base text-sky-600 hover:text-sky-700 font-semibold transition-colors group"
                >
                  More
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

News.displayName = "News";
export default News;
