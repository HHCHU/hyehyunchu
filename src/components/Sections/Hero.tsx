import { FC, memo } from "react";
import Image from "next/image";
import { heroData, aboutData } from "../../data/data";
import Socials from "../Socials";

const Hero: FC = memo(() => {
  const { name, description, actions } = heroData;
  const { profileImageSrc, aboutItems } = aboutData;

  return (
    <section className="flex items-center justify-center bg-white pt-16">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-10">
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {name}
          </h1>
          <div className="text-lg text-black leading-relaxed mb-6">
            {description}
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            {aboutItems.map(({ label, text, Icon }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-medium"
              >
                {Icon && <Icon className="h-4 w-4 text-sky-400" />}
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
                  className={`px-6 py-2 rounded-md font-semibold text-base transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 ${
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
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
