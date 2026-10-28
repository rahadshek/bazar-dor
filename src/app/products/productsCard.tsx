import React from "react";
import { IProducts } from "@/types/types";
import Link from "next/link";

const ProductsCard = ({ product }: { product: IProducts }) => {
  const unitBangla: Record<string, string> = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি টি",
  };

  return (
    
      <Link href={"/"}>
        <div className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/10 sm:p-5 motion-reduce:transition-none">
          {/* Product Info */}
          <div className="flex items-start gap-3">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ring-1  transition-transform duration-300 group-hover:scale-105  ${
                product.change.dir === "up"
                  ? "bg-red-50 ring-red-100"
                  : product.change.dir === "down"
                    ? "bg-green-50 ring-green-100"
                    : "bg-gray-50 ring-gray-100"
              }`}
            >
              {product.image}
            </div>

            <div className="min-w-0 flex-1">
              <h2
                className={
                  product.change.dir === "up"
                    ? "break-words text-base font-bold leading-7 text-gray-900 transition-colors group-hover:text-red-700 sm:text-lg"
                    : product.change.dir === "down"
                      ? "break-words text-base font-bold leading-7 text-gray-900 transition-colors group-hover:text-green-700 sm:text-lg"
                      : "break-words text-base font-bold leading-7 text-gray-900 transition-colors group-hover:text-gray-800 sm:text-lg"
                }
              >
                {product.nameBn}
              </h2>

              <small
                className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors duration-300 sm:text-sm ${
                  product.change.dir === "up"
                    ? "bg-red-100 group-hover:text-red-700"
                    : product.change.dir === "down"
                      ? "bg-green-100 group-hover:text-green-700"
                      : "bg-gray-200 group-hover:text-gray-900"
                }`}
              >
                {unitBangla[product.unit] || product.unit}
              </small>
            </div>
          </div>

          {/* Price Section */}
          <div
            className={`mt-5 rounded-xl bg-gray-50 p-3 transition-colors duration-300  sm:p-4 ${
              product.change.dir === "up"
                ? "group-hover:bg-red-50/70"
                : product.change.dir === "down"
                  ? "group-hover:bg-green-50/70"
                  : "group-hover:bg-gray-200/80"
            }`}
          >
            <p className="text-sm font-medium text-gray-500">আজকের দাম</p>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {product.today.toLocaleString("bn-BD")}
                <span className="ml-1 text-sm font-semibold text-gray-600 sm:text-base">
                  টাকা
                </span>
              </p>

              <p
                className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold sm:text-sm ${
                  product.change.dir === "up"
                    ? "bg-red-50 text-red-600"
                    : product.change.dir === "down"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                }`}
              >
                <span>
                  {product.change.dir === "up"
                    ? "▲"
                    : product.change.dir === "down"
                      ? "▼"
                      : "◆"}
                </span>
                {product.change.pct.toLocaleString("bn-BD")}%
              </p>
            </div>
          </div>

          {/* Bottom Accent */}
          <div
            className={
              product.change.dir === "up"
                ? "mt-4 h-1 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"
                : product.change.dir === "down"
                  ? "mt-4 h-1 w-10 rounded-full bg-green-500 transition-all duration-300 group-hover:w-full"
                  : "mt-4 h-1 w-10 rounded-full bg-gray-500 transition-all duration-300 group-hover:w-full"
            }
          />
        </div>
      </Link>
    
  );
};

export default ProductsCard;
