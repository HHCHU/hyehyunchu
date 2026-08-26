import { FC, memo } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { news } from "../../data/data";

const News: FC = memo(() => {
  return (
    <div className="space-y-8 md:space-y-10 pt-12 md:pt-20">
      <div>
        <h1 className="text-3xl md:text-4xl font-light text-black dark:text-white mb-3" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>News</h1>
        <p className="text-base md:text-lg text-black/60 dark:text-white/60 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Latest updates and announcements</p>
      </div>

      <div className="space-y-8 md:space-y-10 divide-y divide-black/10 dark:divide-white/10">
        {news.map((item, index) => (
          <div
            key={index}
            className={`${index > 0 ? 'pt-8 md:pt-10' : ''} transition-all`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5 text-black/60 dark:text-white/60 text-sm font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                <CalendarIcon className="h-4 w-4" />
                <span className="font-light">{item.date}</span>
              </div>
            </div>

            <h3 className="text-xl font-normal text-black dark:text-white mb-3 leading-snug" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              {item.title}
            </h3>

            <p className="text-black/80 dark:text-white/80 text-base leading-normal mb-0 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{item.description}</p>

            {item.link && item.link !== "#" && (
              <div className="mt-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base text-black dark:text-white hover:underline font-light transition-all"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  More
                  <span>→</span>
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
