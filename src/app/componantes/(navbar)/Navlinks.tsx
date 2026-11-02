import { Suspense } from "react";
import type { INavlinks } from "@/types/types";
import NavlinksClient from "./NavlinksClient";

const Navlinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    {
      cache: "force-cache",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const navs: INavlinks[] = await res.json();

  return (
    <Suspense
      fallback={
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
          {navs.map((nav) => (
            <div
              key={nav.id}
              className="group flex h-10 w-full items-center gap-3 rounded-xl border border-gray-100 bg-white px-3 shadow-sm lg:w-28"
            >
              {/* Icon Skeleton */}
              <div className="size-5 shrink-0 animate-pulse rounded-md bg-green-100" />

              {/* Text Skeleton */}
              <div className="h-3 w-14 animate-pulse rounded-full bg-gray-200" />
            </div>
          ))}
        </div>
      }
    >
      <NavlinksClient navs={navs} />
    </Suspense>
  );
};

export default Navlinks;
