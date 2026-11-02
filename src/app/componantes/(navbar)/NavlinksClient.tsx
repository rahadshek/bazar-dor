"use client";

import type { INavlinks } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavlinksClientProps {
  navs: INavlinks[];
}

const NavlinksClient = ({ navs }: NavlinksClientProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1 font-semibold lg:flex-row lg:items-center lg:gap-3">
      {navs.map((nav) => {
        const href = `/category/${nav.slug}`;
        const isActive = pathname === href;

        return (
          <Link
            key={nav.id}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors duration-200 lg:px-3 ${
              isActive
                ? "bg-[#05893e] text-white shadow-sm"
                : "text-gray-700 hover:bg-[#05893e]/10 hover:text-[#05893e]"
            }`}
          >
            <span className="text-lg" aria-hidden="true">
              {nav.icon}
            </span>

            <span>{nav.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavlinksClient;
