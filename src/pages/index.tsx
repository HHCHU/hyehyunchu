import dynamic from "next/dynamic";
import { FC, memo, useState } from "react";

import Page from "../components/Layout/Page";
import About from "../components/Sections/About";
import Publications from "../components/Sections/Publications";
import Projects from "../components/Sections/Projects";
import News from "../components/Sections/News";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import { homePageMeta } from "../data/data";

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import("../components/Sections/Header"), {
  ssr: false,
});

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;
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
    <Page description={description} title={title}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex flex-col items-center min-h-[70vh] bg-white">
        <div className="w-full max-w-4xl px-4 py-16 flex-1 flex flex-col justify-center">
          {renderContent()}
        </div>
      </main>
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
