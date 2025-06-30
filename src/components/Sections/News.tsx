import { FC, memo } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { news } from "../../data/data";

const News: FC = memo(() => {
  return (
    <div className="space-y-8 pt-16">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">News</h1>
        <p className="text-gray-600">Latest updates and announcements</p>
      </div>

      <div className="space-y-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <CalendarIcon className="h-4 w-4" />
                {item.date}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600">{item.description}</p>

            {item.link && item.link !== "#" && (
              <div className="mt-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-sky-600 hover:text-sky-800 transition-colors"
                >
                  Learn More
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
