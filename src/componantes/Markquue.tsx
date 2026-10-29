import { IProduct } from "@/types/types";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    {
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: IProduct[] = await res.json();

  const unitBangla: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "টি",
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white px-3 py-2 shadow-sm sm:px-5">
      <div className="container mx-auto overflow-hidden">
        <MarqueeText direction="right" duration={20}>
          <div className="flex items-center gap-6 whitespace-nowrap sm:gap-8">
            {products.slice(0, 10).map((product) => {
              const isUp = product.change.dir === "up";
              const isDown = product.change.dir === "down";

              const changeColor = isUp
                ? "text-red-600"
                : isDown
                  ? "text-green-600"
                  : "text-gray-500";

              return (
                <Link
                  key={product.id}
                  href={`/details/${product.id}`}
                  className="flex shrink-0 items-center gap-2 rounded-lg px-2 py-1 transition-opacity hover:opacity-70"
                  aria-label={`${product.nameBn}, দাম ${product.today} টাকা`}
                >
                  <span>{product.categoryIcon}</span>

                  <span className="text-sm font-semibold text-gray-800">
                    {product.nameBn}
                  </span>

                  <span className="text-sm text-gray-600">
                    ৳{product.today.toLocaleString("bn-BD")} /{" "}
                    {unitBangla[product.unit] || product.unit}
                  </span>

                  <span className={`text-xs font-semibold ${changeColor}`}>
                    {isUp ? "▲" : isDown ? "▼" : "◆"}{" "}
                    {product.change.pct.toLocaleString("bn-BD")}%
                  </span>
                </Link>
              );
            })}
          </div>
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
