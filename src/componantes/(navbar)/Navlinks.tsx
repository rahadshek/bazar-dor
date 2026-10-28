import { INavlinks } from "@/types/types";
import Link from "next/link";

const Navlinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    { cache: "force-cache" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const navs: INavlinks[] = await res.json();

  return (
    <div className="flex flex-col gap-1 font-semibold lg:flex-row lg:items-center lg:gap-6">
      {navs.map((nav) => (
        <Link
          href={`/categories/${nav.slug}`}
          key={nav.id}
          className="flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:bg-[#05893e]/10 hover:text-[#05893e] lg:px-2"
        >
          <span className="text-lg" aria-hidden="true">
            {nav.icon}
          </span>

          <span>{nav.nameBn}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
