import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative isolate px-4 pt-10 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
          <span className="block">Save, organize, and</span>
          <span className="block">rediscover what matters</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-gray-600">
          Your personal web library, always at your fingertips. Bookmark links,
          add notes, and access them instantly—anywhere, anytime. No more lost
          articles or forgotten tabs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/signup">
              <Button className="w-full sm:w-auto rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">
                Sign Up
              </Button>
            </Link>

          <Link href="/about">
            <Button
              variant="ghost"
              className="w-full sm:w-auto text-sm font-semibold text-gray-900"
            >
              Learn more →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
