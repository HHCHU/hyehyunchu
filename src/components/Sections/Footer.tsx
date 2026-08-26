import { FC, memo } from "react";

const Footer: FC = memo(() => {
  return (
    <footer className="bg-sky-50 dark:bg-slate-900 border-t border-sky-200 dark:border-slate-700 py-8">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="text-center">
          <p className="text-black/60 dark:text-white/60 text-sm font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            © 2025 Hyehyun Chu. All rights reserved. Last updated: June 2026.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
