"use client";

import Link from "next/link";
import { useSession, signOut } from "../lib/auth-client";
import { toast } from "react-toastify";
import profile from "@/assets/profile.jpg";
import { useState } from "react";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { ChevronDown } from "@gravity-ui/icons";

const AuthData = () => {
  const { data: session, isPending } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      const { error } = await signOut();
      // console.log("error console", error);
      if (error) {
        toast.error("সাইন আউট করতে সমস্যা হয়েছে।");
        return;
      }

      toast.error("সফলভাবে সাইন আউট হয়েছে!");
    } catch (error) {
      // console.error(error);
      toast.error("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  if (isPending) {
    return (
      <div className="navbar-end w-auto shrink-0">
        <span className="loading loading-spinner loading-sm"></span>
      </div>
    );
  }

  return (
    <div className="navbar-end w-auto shrink-0 gap-1.5 sm:gap-3">
      {session?.user ? (
        <div className="relative flex items-center gap-2 sm:gap-3">
          {/* User Avatar */}
          <div className="size-9 shrink-0 overflow-hidden rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 sm:size-10">
            <img
              src={session.user?.image || profile.src}
              alt="User Profile"
              className="h-full w-full object-cover"
            />
          </div>

          {/* User Name */}
          <div className="hidden min-w-0 sm:block">
            <p className="max-w-32 truncate text-sm font-semibold">
              {session.user?.name}
            </p>
            <p className="text-xs text-base-content/60">অ্যাকাউন্ট</p>
          </div>

          {/* Dropdown Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle profile menu"
            className="rounded-full p-1.5 transition hover:bg-base-200"
          >
            <ChevronDown
              size={19}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-3 w-64 max-w-[calc(100vw-1.5rem)] origin-top-right rounded-2xl border border-base-300 bg-base-100 p-3 shadow-xl sm:w-72">
              {/* User Information */}
              <div className="flex items-center gap-3 border-b border-base-300 px-2 pb-4">
                <img
                  src={session.user?.image || profile.src}
                  alt="User Profile"
                  className="size-11 shrink-0 rounded-full border-2 border-primary object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-sm font-bold">
                    {session.user?.name}
                  </h2>
                  <p className="truncate text-xs text-base-content/60">
                    {session.user?.email}
                  </p>
                </div>
              </div>

              {/* Profile Link */}
              <div className="space-y-1 py-3">
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-base-200"
                >
                  <CgProfile className="text-xl text-primary" />
                  <span>আমার প্রোফাইল</span>
                  <span className="ml-auto">›</span>
                </Link>
              </div>

              {/* Sign Out */}
              <div className="border-t border-base-300 pt-2">
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-error transition hover:bg-error/10"
                >
                  <CgLogOut className="text-xl" />
                  <span>সাইন আউট</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-1.5 sm:gap-3">
          <Link
            href="/sign-in"
            className="btn btn-ghost btn-sm px-2 text-xs sm:btn-md sm:px-4 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="btn btn-sm border-[#05893e] bg-[#05893e] px-2 text-xs text-white hover:border-[#047532] hover:bg-[#047532] sm:btn-md sm:px-4 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthData;
