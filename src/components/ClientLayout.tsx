"use client";

import { FC, memo, useState } from "react";
import dynamic from "next/dynamic";

import About from "./Sections/About";
import Publications from "./Sections/Publications";
import Projects from "./Sections/Projects";
import News from "./Sections/News";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const Header = dynamic(() => import("./Sections/Header"), {
  ssr: false,
});

const ClientLayout: FC = memo(() => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About setActiveTab={setActiveTab} />;
      case "publications":
        return <Publications />;
      case "projects":
        return <Projects />;
      case "news":
        return <News />;
      default:
        return <About setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex flex-col items-center min-h-[70vh]">
        <div className="w-full max-w-4xl px-6 md:px-12 lg:px-20 xl:px-24 py-12 md:py-20 flex-1 flex flex-col justify-center">
          <div key={activeTab} className="animate-fadeIn">
            {renderContent()}
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
});

ClientLayout.displayName = "ClientLayout";
export default ClientLayout;
