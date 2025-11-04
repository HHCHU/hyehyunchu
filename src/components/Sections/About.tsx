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
    <div className="space-y-8 md:space-y-12 pt-12 md:pt-20">
      <div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* 프로필 이미지 */}
          {profileImageSrc && (
            <div className="flex-shrink-0">
              <Image
                src={profileImageSrc}
                alt="profile"
                width={120}
                height={120}
                className="rounded-full border-2 border-gray-200 shadow-sm md:w-[160px] md:h-[160px]"
                priority
              />
            </div>
          )}
          {/* 텍스트 영역 */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
              {name}
            </h1>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 max-w-2xl">
              {description}
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mb-6 md:mb-8">
              {aboutItems.map(({ label, text, Icon }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-sky-50 text-sky-700 rounded-full text-sm md:text-base font-medium shadow-sm"
                >
                  {Icon && <Icon className="h-4 w-4 md:h-5 md:w-5 text-sky-500" />}
                  <span className="font-semibold">{label}:</span>
                  <span className="font-normal text-gray-700">{text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 md:gap-5 mb-6 md:mb-8">
              <Socials />
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              {actions
                .filter((a) => a.text !== "Contact")
                .map(({ href, text, primary, Icon }) => (
                  <a
                    key={text}
                    href={href}
                    className={`px-5 py-2.5 md:px-7 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 ${
                      primary
                        ? "bg-sky-500 text-white hover:bg-sky-600 shadow-sm hover:shadow-md"
                        : "bg-white text-sky-600 border-2 border-sky-200 hover:bg-sky-50 hover:border-sky-300"
                    }`}
                  >
                    {Icon && <Icon className="h-4 w-4 md:h-5 md:w-5 inline-block mr-1.5 md:mr-2" />}
                    {text}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl py-6 px-6 md:py-8 md:px-10 shadow-sm">
        <div className="mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">Latest News</h2>
          <p className="text-base md:text-lg text-gray-600">Recent updates and announcements</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {latestNews.map((item, index) => (
            <div key={index} className="border-l-4 border-sky-500 pl-4 md:pl-6 py-2 md:py-3 hover:border-sky-600 transition-colors">
              <div className="flex items-center gap-2 md:gap-2.5 text-gray-500 text-xs md:text-sm mb-1 md:mb-2">
                <CalendarIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span className="font-medium">{item.date}</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
          <button
            onClick={handleViewAllNews}
            className="text-sky-600 hover:text-sky-700 text-base font-semibold transition-colors cursor-pointer inline-flex items-center gap-2 group"
          >
            View all news
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";
export default About;
