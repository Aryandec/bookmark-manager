import { FaBookmark, FaSyncAlt, FaStickyNote, FaSearch, FaBookReader } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const features = [
  {
    icon: <FaBookmark className="h-6 w-6 text-indigo-600" />,
    title: "Smart Bookmarking",
    description: "Save links with one click, organize them with tags and folders.",
  },
  {
    icon: <FaStickyNote className="h-6 w-6 text-indigo-600" />,
    title: "Notes & Highlights",
    description: "Add notes or highlight text directly on saved articles.",
  },
  {
    icon: <FaSyncAlt className="h-6 w-6 text-indigo-600" />,
    title: "Cross-device Sync",
    description: "Access your bookmarks from any device, anywhere, anytime.",
  },
  {
    icon: <FaSearch className="h-6 w-6 text-indigo-600" />,
    title: "Powerful Search",
    description: " Instantly search through titles, URLs, and even the content of saved pages to find what you need—fast.",
  },
  {
    icon: <FaBarsStaggered className="h-6 w-6 text-indigo-600" />,
    title: "AI Auto-Tagging",
    description: "Smartly categorize your bookmarks with automatic tag suggestions powered by AI.",
  },
  {
    icon: <FaBookReader className="h-6 w-6 text-indigo-600" />,
    title: "Distraction-Free Reading",
    description: " Open saved articles in a clutter-free reading view that helps you stay focused",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-semibold leading-7 text-indigo-600">Features</h2>
        <p className="mt-2 p-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Tools that make bookmarking effortless
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
