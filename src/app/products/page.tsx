import { IProducts } from "@/types/types";
import ProductsCard from "./productsCard";

const ProductsPage = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { cache: "force-cache" },
  );

  const products: IProducts[] = await res.json();

  return (
    <section className="container mx-auto space-y-6 px-4 py-8 sm:py-10 lg:py-14">
      {/* Heading */}
      <div className="flex flex-col gap-3 border-b border-green-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            বাজারদর তালিকা
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            সব পণ্য
          </h2>

          <p className="text-sm leading-6 text-gray-500 sm:text-base">
           মোট ৩৩টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

       
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-0 rounded-2xl transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/10 motion-reduce:transition-none"
          >
            <ProductsCard product={product} />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
