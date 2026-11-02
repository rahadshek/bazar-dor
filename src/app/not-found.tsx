import Link from "next/link";
import { FaArrowLeft, FaBagShopping } from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="flex min-h-[75vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl text-center">
        {/* 404 Illustration */}
        <div className="relative mx-auto mb-8 flex size-40 items-center justify-center rounded-full bg-green-50 sm:size-48">
          <span className="text-7xl font-black tracking-tighter text-green-600 sm:text-8xl">
            404
          </span>

          <div className="absolute -right-1 bottom-5 flex size-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg sm:size-14">
            <FaBagShopping className="text-xl sm:text-2xl" />
          </div>
        </div>

        {/* Content */}
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-green-600">
          Page Not Found
        </p>

        <h1 className="mb-4 text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
          Oops! This page is missing.
        </h1>

        <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        <p className="mt-8 text-xs font-medium text-gray-400">
          Bazar-Dor · Your Daily Market Companion
        </p>
      </div>
    </main>
  );
};

export default NotFound;
