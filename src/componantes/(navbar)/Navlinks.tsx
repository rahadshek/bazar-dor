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
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-3">
          {navs.map((nav) => (
            <div
              key={nav.id}
              className="h-10 w-24 animate-pulse rounded-lg bg-gray-100"
            />
          ))}
        </div>
      }
    >
      <NavlinksClient navs={navs} />
    </Suspense>
  );
};

export default Navlinks;
