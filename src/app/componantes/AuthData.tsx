"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "../lib/auth-client";
import { toast } from "react-toastify";

const AuthData = () => {
  const { data: session, isPending } = useSession();

  const handleSignOut = async () => {
    try {
      const { error } = await signOut();

      if (error) {
        toast.error("সাইন আউট করতে সমস্যা হয়েছে।");
        return;
      }

      toast.success("সফলভাবে সাইন আউট হয়েছে!");
    } catch (error) {
      console.error(error);
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
        <div className="flex items-center gap-2 sm:gap-3">
          {/* User Image */}
          {session.user.image && (
            <Image
              src={session.user?.image}
              alt="User profile"
              width={36}
              height={36}
              className="size-8 rounded-full object-cover sm:size-9"
            />
          )}

          {/* User Name */}
          <span className="max-w-24 truncate text-xs font-semibold sm:max-w-36 sm:text-sm">
            {session.user?.name}
          </span>

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="btn btn-ghost btn-sm px-2 text-xs text-red-500 sm:text-sm"
          >
            <span>↩</span>
            <span className="hidden sm:inline">সাইন আউট</span>
          </button>
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
