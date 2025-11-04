import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FC, memo, useState } from "react";

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
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              className="text-xl md:text-2xl font-bold text-gray-900 cursor-pointer tracking-tight hover:text-sky-600 transition-colors"
              onClick={() => setActiveTab("about")}
            >
              Hyehyun Chu
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base font-medium rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? "text-sky-600 bg-sky-50 shadow-sm"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
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
          <div className="md:hidden pb-3">
            <div className="pt-2 pb-2 space-y-1 bg-white">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? "text-sky-600 bg-sky-50 shadow-sm"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
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
