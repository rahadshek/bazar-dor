import ProductsCard from "@/app/products/productsCard";
import type { IProducts } from "@/types/types";
import Link from "next/link";

interface ICategory {
  icon: string;
  nameBn: string;
  id: number;
}

interface ICategoryContentProps {
  params: Promise<{
    slug: string;
  }>;
}

const CategoryContent = async ({ params }: ICategoryContentProps) => {
  const { slug } = await params;

  const [res, res2] = await Promise.all([
    fetch(
      `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(slug)}`,
      { cache: "force-cache" },
    ),
    fetch(
      `https://openapi.programming-hero.com/api/bazardor/categories/${encodeURIComponent(slug)}`,
      { cache: "force-cache" },
    ),
  ]);

  if (!res.ok || !res2.ok) {
    throw new Error("Failed to fetch category data");
  }

  const products: IProducts[] = await res.json();
  const category: ICategory = await res2.json();

  return (
    <section className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      {/* Category Header */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:gap-4 sm:p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-2xl text-green-700 sm:h-14 sm:w-14 sm:text-3xl">
          {category.icon}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold leading-tight text-gray-900 sm:text-2xl">
            {category.nameBn}
          </h2>

          <p className="mt-1.5 text-xs leading-relaxed text-gray-500 sm:text-sm">
            <span className="font-semibold text-green-700">
              {products.length.toLocaleString("bn-BD")}
            </span>{" "}
            টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {/* Product Count */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 sm:mb-7">
        <p className="text-sm text-gray-600 sm:text-base">
          মোট{" "}
          <span className="font-bold text-gray-900">
            {products.length.toLocaleString("bn-BD")}
          </span>{" "}
          টি পণ্য দেখানো হচ্ছে
        </p>
      </div>

      {/* Responsive Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/details/${product.id}`}
              className="block min-w-0 rounded-2xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-green-600"
              aria-label={`${product.nameBn} এর বিস্তারিত দেখুন`}
            >
              <ProductsCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 px-4 py-12 text-center">
          <p className="text-lg font-semibold text-gray-700">
            কোনো পণ্য পাওয়া যায়নি
          </p>

          <p className="mt-2 text-sm text-gray-500">
            অন্য একটি ক্যাটাগরি নির্বাচন করে দেখুন।
          </p>

          <Link
            href="/products"
            className="mt-5 inline-flex rounded-xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
          >
            সব পণ্য দেখুন
          </Link>
        </div>
      )}
    </section>
  );
};

export default CategoryContent;
