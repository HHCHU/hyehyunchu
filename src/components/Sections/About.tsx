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
  const latestNews = news.slice(0, 2);

  const handleViewAllNews = () => {
    if (setActiveTab) {
      setActiveTab("news");
    }
  };

  return (
    <div className="space-y-16 md:space-y-20 pt-12 md:pt-20">
      {/* Hero Section */}
      <div>
        {/* Top Row: Profile Image (left) + Title (right) */}
        <div className="grid grid-cols-1 md:grid-cols-[135px_1fr] gap-6 md:gap-12 mb-6 md:mb-8">
          {/* Left: Profile Image */}
          {profileImageSrc && (
            <div className="flex justify-start">
              <div className="relative w-[135px] h-[135px]">
                <Image
                  src={profileImageSrc}
                  alt="profile"
                  fill
                  className="border border-black/30 rounded-md object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Right: Title only */}
          <div className="flex flex-col justify-start text-left">
            <h1 className="text-4xl md:text-6xl font-light text-black">
              {name}
            </h1>
          </div>
        </div>

        {/* Description below profile image - left-aligned */}
        <div className="text-left mb-6 md:mb-8">
          <div className="text-lg md:text-xl text-black leading-relaxed font-light">
            {description}
          </div>
        </div>

        {/* Metadata Section: aligned to left column edge */}
        <div className="flex flex-col items-start gap-5 md:gap-6">
          {/* Interests and Study info */}
          <div className="flex flex-wrap justify-start gap-3 md:gap-4">
            {aboutItems.map(({ label, text, Icon }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-black text-sm md:text-base font-light"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {Icon && (
                  <Icon className="h-4 w-4 md:h-5 md:w-5 text-black/60" />
                )}
                <span className="font-light text-black/60">{label}:</span>
                <span className="font-light">{text}</span>
              </div>
            ))}
          </div>

          {/* Action buttons and socials */}
          <div className="flex flex-wrap items-center justify-start gap-3 md:gap-4">
            {actions
              .filter((a) => a.text !== "Contact")
              .map(({ href, text, Icon }) => (
                <a
                  key={text}
                  href={href}
                  className="px-5 py-2 md:px-6 md:py-2.5 border border-black/30 bg-white text-black font-light text-sm md:text-base transition-all hover:border-black focus:outline-none rounded-md"
                  style={{
                    fontFamily:
                      "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  }}
                >
                  {Icon && (
                    <Icon className="h-4 w-4 md:h-5 md:w-5 inline-block mr-1.5 md:mr-2" />
                  )}
                  {text}
                </a>
              ))}
            <Socials />
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="border-t border-black/20 pt-10 md:pt-12">
        <div className="mb-6 md:mb-8">
          <h2
            className="text-2xl md:text-3xl font-light text-black mb-2"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Latest News
          </h2>
          <p
            className="text-base md:text-lg text-black/60 font-light"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Recent updates and announcements
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {latestNews.map((item, index) => (
            <div
              key={index}
              className="border-l border-black/30 pl-4 md:pl-6 py-1"
            >
              <div
                className="flex items-center gap-2 md:gap-2.5 text-black/60 text-xs md:text-sm mb-1 md:mb-2 font-light"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                <CalendarIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span className="font-light">{item.date}</span>
              </div>
              <h3
                className="text-lg md:text-xl font-normal text-black mb-1 md:mb-2 leading-tight"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-black/80 text-sm md:text-base leading-relaxed font-light"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-black/10">
          <button
            onClick={handleViewAllNews}
            className="text-black hover:underline text-base font-light transition-all cursor-pointer inline-flex items-center gap-2"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            View all news
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";
export default About;
