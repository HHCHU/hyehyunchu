import { FC, memo } from "react";
import { publications } from "../../data/data";

const Publications: FC = memo(() => {
  // equal contribution이 있는 논문이 있는지 확인
  const hasEqualContribution = publications.some(
    (pub) => pub.note && pub.note.includes("equal contribution")
  );

  // 내 이름을 bold 처리하는 함수
  const formatAuthors = (authors: string) => {
    const myName = "Hyehyun Chu";
    const parts = authors.split(myName);

    if (parts.length === 1) {
      // 내 이름이 없는 경우 원본 반환
      return authors;
    }

    return parts.map((part, index) => (
      <span key={index}>
        {part}
        {index < parts.length - 1 && (
          <strong className="font-bold">{myName}</strong>
        )}
      </span>
    ));
  };

  return (
    <div className="space-y-6 md:space-y-10 pt-12 md:pt-20">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Publications</h1>
      </div>

      <div className="space-y-4 md:space-y-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 rounded-xl py-6 px-6 md:py-8 md:px-10 transition-all duration-200 ${
              pub.link && pub.link !== "#"
                ? "hover:shadow-lg hover:border-sky-300 hover:scale-[1.01] cursor-pointer"
                : "hover:shadow-md"
            }`}
            onClick={() => {
              if (pub.link && pub.link !== "#") {
                window.open(pub.link, "_blank", "noopener,noreferrer");
              }
            }}
          >
            <h3 className="text-xl font-semibold text-gray-900 leading-tight tracking-tight mb-2">
              {pub.title}
            </h3>

            <p className="text-gray-700 text-base mb-2 leading-relaxed">{formatAuthors(pub.authors)}</p>

            <p className="text-sky-600 text-base font-semibold mb-0">{pub.venue}</p>
          </div>
        ))}
      </div>

      {/* Equal contribution note - 한 번만 표시 */}
      {hasEqualContribution && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-base italic">
            * indicates equal contribution
          </p>
        </div>
      )}
    </div>
  );
});

Publications.displayName = "Publications";
export default Publications;
