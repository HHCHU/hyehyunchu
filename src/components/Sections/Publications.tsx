import { FC, memo } from "react";
import {
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
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
    <div className="space-y-8 pt-16">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Publications</h1>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 rounded-lg py-8 px-10 transition-all ${
              pub.link && pub.link !== "#"
                ? "hover:shadow-lg hover:border-sky-300 cursor-pointer"
                : "hover:shadow-md"
            }`}
            onClick={() => {
              if (pub.link && pub.link !== "#") {
                window.open(pub.link, "_blank", "noopener,noreferrer");
              }
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {pub.title}
              </h3>
            </div>

            <p className="text-gray-700 mb-2">{formatAuthors(pub.authors)}</p>

            <p className="text-sky-600 text-sm mb-3 font-medium">{pub.venue}</p>
          </div>
        ))}
      </div>

      {/* Equal contribution note - 한 번만 표시 */}
      {hasEqualContribution && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-gray-500 text-sm italic">
            * indicates equal contribution
          </p>
        </div>
      )}
    </div>
  );
});

Publications.displayName = "Publications";
export default Publications;
