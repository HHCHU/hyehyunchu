import { FC, memo } from "react";

const Footer: FC = memo(() => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Hyehyun Chu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
