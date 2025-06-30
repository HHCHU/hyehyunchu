import Image from "next/image";
import { FC, memo } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";

import { aboutData, news, heroData } from "../../data/data";
import Socials from "../Socials";

interface AboutProps {
  setActiveTab?: (tab: string) => void;
}

const About: FC<AboutProps> = memo(({ setActiveTab }) => {
  const { profileImageSrc, aboutItems } = aboutData;
  const { name, description, actions } = heroData;
  const latestNews = news.slice(0, 2); // 최신 뉴스 2개

  const handleViewAllNews = () => {
    if (setActiveTab) {
      setActiveTab("news");
    }
  };

  return (
    <div className="space-y-8 pt-16">
      <div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* 프로필 이미지 */}
          {profileImageSrc && (
            <div className="flex-shrink-0">
              <Image
                src={profileImageSrc}
                alt="profile"
                width={140}
                height={140}
                className="rounded-full border border-gray-200"
                priority
              />
            </div>
          )}
          {/* 텍스트 영역 */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {name}
            </h2>
            <div className="text-lg text-black leading-relaxed mb-6">
              {description}
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              {aboutItems.map(({ label, text, Icon }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {Icon && <Icon className="h-4 w-4 text-blue-400" />}
                  <span>{label}:</span>
                  <span className="font-normal text-gray-700">{text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mb-6">
              <Socials />
            </div>
            <div className="flex gap-3">
              {actions
                .filter((a) => a.text !== "Contact")
                .map(({ href, text, primary, Icon }) => (
                  <a
                    key={text}
                    href={href}
                    className={`px-6 py-2 rounded-md font-semibold text-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      primary
                        ? "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-400"
                        : "bg-white text-sky-600 border border-sky-200 hover:bg-sky-50"
                    }`}
                  >
                    {Icon && <Icon className="h-5 w-5 inline-block mr-1" />}
                    {text}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest News</h2>
          <p className="text-gray-600">Recent updates and announcements</p>
        </div>

        <div className="space-y-4">
          {latestNews.map((item, index) => (
            <div key={index} className="border-l-4 border-sky-500 pl-4 py-2">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <CalendarIcon className="h-4 w-4" />
                {item.date}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <button
            onClick={handleViewAllNews}
            className="text-sky-600 hover:text-sky-800 text-sm font-medium transition-colors cursor-pointer"
          >
            View all news →
          </button>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";
export default About;
