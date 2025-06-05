import Link from "next/link";
import { FaBookBookmark } from "react-icons/fa6";
import NavItems from "./navitems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto w-full bg-white px-6 py-4 shadow-md">
      <Link href="/">
        <div className="flex items-center gap-3 cursor-pointer">
          <FaBookBookmark className="text-2xl text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Bookmark Manager</span>
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
            <SignInButton>
              <button>Sign In</button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
