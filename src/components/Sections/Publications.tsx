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

  return (
    <div className="space-y-8 pt-16">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Publications</h1>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {pub.title}
              </h3>
            </div>

            <p className="text-gray-700 mb-2">{pub.authors}</p>

            <p className="text-sky-600 text-sm mb-3 font-medium">{pub.venue}</p>

            {pub.link && pub.link !== "#" && (
              <div className="flex gap-3">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <DocumentTextIcon className="h-4 w-4" />
                  View Paper
                  <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                </a>
              </div>
            )}
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
