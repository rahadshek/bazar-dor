import { IProducts } from "@/types/types";

const DetailsCard = ({ product }: { product: IProducts }) => {
  const unitBangla: Record<string, string> = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি টি",
  };
  return (
    <div>
      <div
        className={`group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 ease-out flex ${
          product.change.dir === "up"
            ? " hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/10 sm:p-5 motion-reduce:transition-none  "
            : product.change.dir === "down"
              ? " hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/10 sm:p-5 motion-reduce:transition-none"
              : " hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-900/10 sm:p-5 motion-reduce:transition-none flex "
        } `}
      >
        {/* Product Info */}
        <div className="flex items-start gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 bg-gray-50 ring-gray-100 items-center justify-center rounded-xl text-2xl ring-1 transition-transform duration-300 group-hover:scale-105 
             `}
          >
            {product.image}
          </div>

          <div className="min-w-0 flex-1">
            <h2
              className={`break-words text-base font-bold leading-7 text-gray-900 transition-colors sm:text-lg ${
                product.change.dir === "up"
                  ? "group-hover:text-red-700"
                  : product.change.dir === "down"
                    ? "group-hover:text-green-700"
                    : "group-hover:text-gray-800"
              }`}
            >
              {product.nameBn}
            </h2>

            <small
              className={`mt-1 inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors duration-300 sm:text-sm ${
                product.change.dir === "up"
                  ? " group-hover:text-red-700 group-hover:bg-red-100"
                  : product.change.dir === "down"
                    ? "group-hover:bg-green-100 group-hover:text-green-700"
                    : "group-hover:bg-gray-200 group-hover:text-gray-900"
              }`}
            >
              {unitBangla[product.unit] || product.unit}
            </small>

            <p>গতকালের তুলনায় আজ দাম বেড়েছে · ২ টাকা</p>
          </div>
        </div>

        {/* Price Section */}
        <div
          className={`mt-5 rounded-xl bg-gray-50 p-3 transition-colors duration-300 sm:p-4 ${
            product.change.dir === "up"
              ? "group-hover:bg-red-50/70"
              : product.change.dir === "down"
                ? "group-hover:bg-green-50/70"
                : "group-hover:bg-gray-200/80"
          }`}
        >
          <p className="text-sm font-medium text-gray-500">আজকের দাম</p>

          <div className="mt-2 gid gid-cold-1 items-center justify-between gap-2">
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
      </div>
    </div>
  );
};

export default DetailsCard;
