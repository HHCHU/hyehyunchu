import { FC, memo } from "react";
import { publications } from "../../data/data";
import { Publication, PublicationType } from "../../data/dataDef";
import { TrophyIcon } from "@heroicons/react/24/solid";

const Publications: FC = memo(() => {
  const hasEqualContribution = publications.some(
    (pub) => pub.note && pub.note.includes("equal contribution"),
  );

  const fullPapers = publications.filter(
    (pub) =>
      (pub.type ?? PublicationType.FullPaper) === PublicationType.FullPaper,
  );
  const postersAndWorkshops = publications.filter(
    (pub) => pub.type === PublicationType.PosterWorkshop,
  );

  const formatAuthors = (authors: string) => {
    const myName = "Hyehyun Chu";
    const parts = authors.split(myName);

    if (parts.length === 1) {
      return authors;
    }

    return parts.map((part, index) => (
      <span key={index}>
        {part}
        {index < parts.length - 1 && (
          <strong className="font-semibold">{myName}</strong>
        )}
      </span>
    ));
  };

  const renderPublicationList = (items: Publication[]) => (
    <div className="space-y-5 md:space-y-6 divide-y divide-black/10 dark:divide-white/10">
      {items.map((pub, index) => (
        <div
          key={index}
          className={`${index > 0 ? "pt-5 md:pt-6" : ""} transition-all ${
            pub.link && pub.link !== "#"
              ? "hover:opacity-70 cursor-pointer"
              : ""
          }`}
          onClick={() => {
            if (pub.link && pub.link !== "#") {
              window.open(pub.link, "_blank", "noopener,noreferrer");
            }
          }}
        >
          {pub.award && (
            <div className="mb-3">
              <span
                className="inline-flex items-center gap-1 text-black dark:text-white border border-black/30 dark:border-white/30 px-2.5 py-1 text-xs font-light whitespace-nowrap rounded-md"
                title={pub.award}
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                <TrophyIcon className="h-4 w-4" aria-hidden="true" />
                <span aria-hidden="true">Best Paper Award</span>
                <span className="sr-only">{pub.award}</span>
              </span>
            </div>
          )}

          <h3
            className="text-lg md:text-xl font-normal text-black dark:text-white leading-snug mb-2"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            {pub.title}
          </h3>

          <p
            className="text-black/80 dark:text-white/80 text-base mb-2 leading-normal font-light"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            {formatAuthors(pub.authors)}
          </p>

          <p
            className="text-black/60 dark:text-white/60 text-base font-light mb-0"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            {pub.venue}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-8 md:space-y-10 pt-12 md:pt-20">
      <div>
        <h1
          className="text-3xl md:text-4xl font-light text-black dark:text-white mb-3"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          }}
        >
          Publications
        </h1>
      </div>

      {hasEqualContribution && (
        <div className="-mt-2">
          <p
            className="text-black/60 dark:text-white/60 text-base italic font-light"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            * indicates equal contribution
          </p>
        </div>
      )}

      {fullPapers.length > 0 && (
        <div className="space-y-5 md:space-y-6">
          <h2
            className="text-xs md:text-sm font-semibold text-black/50 dark:text-white/50 uppercase tracking-widest"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Full Papers
          </h2>
          {renderPublicationList(fullPapers)}
        </div>
      )}

      {postersAndWorkshops.length > 0 && (
        <div className="space-y-5 md:space-y-6 border-t border-black/10 dark:border-white/10 pt-8 md:pt-10">
          <h2
            className="text-xs md:text-sm font-semibold text-black/50 dark:text-white/50 uppercase tracking-widest"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Poster &amp; Workshop
          </h2>
          {renderPublicationList(postersAndWorkshops)}
        </div>
      )}
    </div>
  );
});

Publications.displayName = "Publications";
export default Publications;
