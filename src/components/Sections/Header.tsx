import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { FC, memo, useState } from "react";
import useTheme from "../../hooks/useTheme";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: FC<HeaderProps> = memo(({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const tabs = [
    { id: "about", label: "About" },
    { id: "publications", label: "Publications" },
    { id: "projects", label: "Projects" },
    { id: "news", label: "News" },
  ];

  const themeToggleButton = (
    <button
      className="text-black dark:text-white p-2 hover:bg-sky-100 dark:hover:bg-white/10 transition-all rounded-md"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );

  return (
    <header className="fixed top-0 z-50 w-full bg-sky-50 dark:bg-slate-900 border-b border-sky-200 dark:border-slate-700">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              className="text-xl md:text-2xl font-normal text-black dark:text-white cursor-pointer hover:underline transition-all"
              onClick={() => setActiveTab("about")}
            >
              Hyehyun Chu
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm md:text-base font-normal transition-all ${
                  activeTab === tab.id
                    ? "text-black dark:text-white underline"
                    : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
            {themeToggleButton}
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden">
            {themeToggleButton}
            <button
              className="text-black dark:text-white p-2 hover:bg-sky-100 dark:hover:bg-white/10 transition-all rounded-md"
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
          <div className="md:hidden pb-3 border-t border-sky-200 dark:border-slate-700">
            <div className="pt-2 pb-2 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 text-base font-normal transition-all ${
                    activeTab === tab.id
                      ? "text-black dark:text-white underline"
                      : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
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
