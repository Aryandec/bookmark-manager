import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Save, organize, and rediscover <br /> what matters online
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Your personal web library, always at your fingertips. Bookmark links,
          add notes, and
          <br />
          access them instantly—anywhere, anytime. No more lost articles or
          forgotten tabs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button
            variant="ghost"
            className="text-sm/6 font-semibold text-gray-900"
          >
            <Link href="/about">
              {" "}
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
