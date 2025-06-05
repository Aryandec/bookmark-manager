import Link from "next/link";
import { Button } from "@/components/ui/button"; // adjust path if needed

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed">
          Bookmark Manager was born out of frustration—too many open tabs, lost articles, and forgotten bookmarks. We set out to create a tool that helps you organize the web the way it should be: simple, fast, and accessible.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          To help people save and rediscover content that truly matters. Whether you're a student, researcher, or knowledge worker, our goal is to make digital memory effortless and intuitive.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What We Value</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li><strong>Simplicity:</strong> Every feature should make your workflow easier, not harder.</li>
          <li><strong>Speed:</strong> From saving to searching, we aim for instant action.</li>
          <li><strong>Privacy:</strong> Your data belongs to you, always.</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Meet the Founder</h2>
        <p className="text-lg leading-relaxed">
          Founded by Aryan, a student entrepreneur and AI builder, Bookmark Manager is part of a growing ecosystem of powerful, vertical AI agents designed to make life easier. Aryan believes in creating products that scale with simplicity and smart design.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-10 px-6 rounded-xl text-center shadow-md">
        <h3 className="text-3xl font-semibold mb-4 text-indigo-800">Ready to get organized?</h3>
        <p className="text-lg text-indigo-700 mb-6">
          Start using Bookmark Manager today and never lose a link again.
        </p>
        <Link href="/sign-in">
          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md text-lg">
            Get Started
          </Button>
        </Link>
      </section>
    </main>
  );
}
