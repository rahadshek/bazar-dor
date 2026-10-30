import { IProducts } from "@/types/types";
import BazarUp from "./BazarUp";
import Link from "next/link";
import BazarDown from "./BazarDown";

const TodayBazarPage = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { cache: "force-cache" },
  );

  const products: IProducts[] = await res.json();
  const bazarUpFilter = products.filter((up) => up.change.dir === "up");
  const bazarDownFilter = products.filter((down) => down.change.dir === "down");
  return (
    <div className=" container mx-auto">
      {/* bazar up */}
      <div>
        <div className="my-5 flex items-center gap-2 border-b border-red-100 pb-4 pt-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl text-lg font-bold text-red-600 sm:h-11 sm:w-11 sm:text-2xl">
            ▲
          </span>
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
            আজ দাম বেড়েছে
          </h2>
          <div></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {bazarUpFilter.slice(0, 6).map((up) => (
            <Link href={`/details/${up.id}`} key={up.id}>
              {" "}
              <BazarUp up={up} />
            </Link>
          ))}
        </div>
      </div>

      {/* bazar down */}
      <div>
        <div className="my-5 flex items-center gap-2 border-b border-green-100 pb-4 pt-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl text-lg font-bold text-green-600 sm:h-11 sm:w-11 sm:text-2xl">
            ▼
          </span>
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
            আজ দাম কমেছে
          </h2>
          <div></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {bazarDownFilter.slice(0, 6).map((down) => (
            <Link href={`/details/${down.id}`} key={down.id}>
              <BazarDown down={down} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayBazarPage;
