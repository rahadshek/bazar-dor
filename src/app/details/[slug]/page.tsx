import DetailsCard from "@/app/componantes/DetailsCard";
import type { IProducts } from "@/types/types";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IParamsProps {
  params: Promise<{ slug: string }>;
}

const getProducts = async (): Promise<IProducts[]> => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { cache: "force-cache" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

const Page = async ({ params }: IParamsProps) => {
  const { slug } = await params;

  const productData = await getProducts();

  const product = productData.find((pro) => pro.id === Number(slug));

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50/70">
      <div className="container mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm sm:mb-8 sm:px-5"
        >
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm sm:gap-x-3">
            <li>
              <Link
                href="/"
                className="font-medium text-blue-500 transition-colors hover:text-green-700  "
              >
                হোম
              </Link>
            </li>

            <li aria-hidden="true" className="text-gray-300">
              <span>→</span>
            </li>

            <li>
              <span className="font-medium text-gray-500">
                {product.categoryNameBn}
              </span>
            </li>

            <li aria-hidden="true" className="text-gray-300">
              <span>→</span>
            </li>

            <li
              aria-current="page"
              className="max-w-full break-words font-bold text-green-700"
            >
              {product.nameBn}
            </li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="min-w-0">
          <DetailsCard product={product} />
        </div>

        {/* Back to Home */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/details"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            <span aria-hidden="true">←</span>
            সব পণ্যে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
