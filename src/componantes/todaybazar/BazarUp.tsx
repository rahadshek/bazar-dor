import { IProducts } from "@/types/types";

const BazarUp = ({ up }: { up: IProducts }) => {
  // console.log('bazzar up page',up)
  const unitBangla: Record<string, string> = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি টি",
  };

  return (
    <div>
      <div className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/10 sm:p-5 motion-reduce:transition-none">
        {/* Product Info */}
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-2xl ring-1 ring-red-100 transition-transform duration-300 group-hover:scale-105">
            {up.image}
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="break-words text-base font-bold leading-7 text-gray-900 transition-colors group-hover:text-red-700 sm:text-lg">
              {up.nameBn}
            </h2>

            <small className="mt-1 inline-flex rounded-full bg-red-100 group-hover:text-red-700 px-2.5 py-1 text-xs font-medium text-gray-600 sm:text-sm">
              {unitBangla[up.unit] || up.unit}
            </small>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-5 rounded-xl bg-gray-50 p-3 transition-colors duration-300 group-hover:bg-red-50/70 sm:p-4">
          <p className="text-sm font-medium text-gray-500">আজকের দাম</p>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
            <p className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {up.today.toLocaleString("bn-BD")}
              <span className="ml-1 text-sm font-semibold text-gray-600 sm:text-base">
                টাকা
              </span>
            </p>

            <p className="inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold sm:text-sm bg-red-100 text-red-700">
              <span>{up.change.dir === "up" ? "▲" : ""}</span>
              {up.change.pct.toLocaleString("bn-BD")}%
            </p>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-4 h-1 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:w-full" />
      </div>
    </div>
  );
};

export default BazarUp;
