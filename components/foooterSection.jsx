import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-6 px-4 sm:px-8 lg:px-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Aryanbhx. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="https://github.com/Aryandec"><FaGithub className="h-5 w-5 hover:text-gray-900 dark:hover:text-white" /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
