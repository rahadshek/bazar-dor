import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/bazar-hero.png";
import BanglaDate from "./(navbar)/BanglaDate";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-6 sm:py-8 lg:py-10">
      <div className="animate-[fadeIn_0.8s_ease-out] relative overflow-hidden rounded-3xl border border-green-100 bg-gradient-to-br from-[#f1f9f3] via-white to-[#e2f1e7] shadow-sm">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* Content */}
          <div className="animate-[slideUp_0.8s_ease-out] px-5 pb-2 pt-7 sm:px-8 sm:pt-10 lg:px-12 lg:py-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-3 py-2 text-sm font-medium text-green-700 shadow-sm transition-transform duration-300 hover:scale-105">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <BanglaDate />
            </div>

            <h1 className="max-w-xl text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              আজকের বাজারের দাম{" "}
             এক নজরে
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার সর্বশেষ দাম জানুন।
              বাজারভিত্তিক মূল্য এবং দামের পরিবর্তন দেখুন এক জায়গায়।
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#05893e] px-6 py-3 text-sm font-bold text-white shadow-md shadow-green-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#046f32] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                সব পণ্য দেখুন
                <span
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Banner Image */}
          <div className="animate-[fadeIn_1.2s_ease-out] relative min-h-56 overflow-hidden sm:min-h-72 md:min-h-[360px] lg:min-h-[420px]">
            <Image
              src={banner}
              alt="বাজার দর — নিত্যপ্রয়োজনীয় পণ্যের বাজার"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              className="animate-[float_4s_ease-in-out_infinite] object-contain object-center p-4 transition-transform duration-500 hover:scale-105 sm:p-6 md:p-5 lg:p-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
