import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FC, memo, useState } from "react";
import { Link } from "react-scroll";

import { SectionId } from "../../data/data";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: FC<HeaderProps> = memo(({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: "about", label: "About" },
    { id: "publications", label: "Publications" },
    { id: "projects", label: "Projects" },
    { id: "news", label: "News" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link
              className="text-xl font-bold text-gray-900 cursor-pointer"
              to={SectionId.Hero}
              spy={true}
              smooth={true}
              duration={500}
            >
              Hyehyun Chu
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? "text-sky-600 bg-sky-50"
                    : "text-gray-700 hover:text-sky-600 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? "text-sky-600 bg-sky-50"
                      : "text-gray-700 hover:text-sky-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
