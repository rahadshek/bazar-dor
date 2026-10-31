
"use client";

import { useState } from "react";
import {
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import profile from "@/assets/profile.jpg";
import { CgLogOut } from "react-icons/cg";
import { useSession, signOut, authClient } from "../lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const [isUpdating, setIsUpdating] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  // Update Profile
  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedata = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    try {
      setIsUpdating(true);

      const { error } = await authClient.updateUser({
        name: updatedata.name.trim(),
      });

      if (error) {
        toast.error("তথ্য আপডেট করতে সমস্যা হয়েছে।");
        return;
      }

      toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
    } catch {
      toast.error("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsUpdating(false);
    }
  };

  // Sign Out
  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);

      const { error } = await signOut();

      if (error) {
        toast.error("সাইন আউট করতে সমস্যা হয়েছে।");
        return;
      }

      toast.success("সফলভাবে সাইন আউট হয়েছে!");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsSigningOut(false);
    }
  };

  // Loading State
  if (isPending) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  // Session Check
  if (!session) {
    router.replace("/sign-in");
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  return (
    <main className="container mx-auto min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

      {/* Page Heading */}
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          আমার প্রোফাইল
        </h1>

        <p className="mt-2 text-sm text-base-content/60 sm:text-base">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন এবং আপডেট করুন।
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">

        {/* User Information Card */}
        <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:shadow-md sm:p-6">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* User Information */}
            <div className="flex min-w-0 items-center gap-4">

              <div className="shrink-0">
                <img
                  src={session.user.image || profile.src}
                  alt="User Profile"
                  className="size-16 rounded-full border-2 border-primary object-cover sm:size-20"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="truncate text-base font-bold sm:text-lg">
                  {session.user.name}
                </h2>

                <p className="mt-1 truncate text-sm text-base-content/60">
                  {session.user.email}
                </p>

                <span className="mt-2 inline-flex rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                  Active Account
                </span>
              </div>
            </div>

            {/* Sign Out Button */}
            <button
              type="button"
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-error/10 px-5 py-3 text-sm font-semibold text-error transition hover:bg-error hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <CgLogOut className="text-xl" />

              <span>
                {isSigningOut ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}
              </span>
            </button>

          </div>
        </div>

        {/* Update Profile Card */}
        <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:shadow-md sm:p-7 md:p-8">

          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-xl font-bold sm:text-2xl">
              তথ্য আপডেট করুন
            </h2>

            <p className="mt-2 text-sm text-base-content/60 sm:text-base">
              আপনার ব্যক্তিগত তথ্য পরিবর্তন করুন।
            </p>
          </div>

          {/* Update Form */}
          <Form className="w-full" onSubmit={onSubmit}>
            <Fieldset className="w-full">
              <FieldGroup>

                <TextField
                  isRequired
                  name="name"
                  defaultValue={session.user.name}
                  validate={(value) => {
                    if (value.trim().length < 3) {
                      return "Name must be at least 3 characters";
                    }

                    return null;
                  }}
                >
                  <Label className="mb-2 text-sm font-semibold sm:text-base">
                    নাম
                  </Label>

                  <Input
                    placeholder="আপনার নাম লিখুন"
                    className="w-full"
                  />

                  <FieldError />
                </TextField>

              </FieldGroup>

              {/* Submit Button */}
              <Fieldset.Actions className="mt-6 w-full">
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="w-full rounded-xl bg-green-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-green-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-36"
                >
                  {isUpdating ? "আপডেট হচ্ছে..." : "আপডেট করুন"}
                </button>
              </Fieldset.Actions>

            </Fieldset>
          </Form>
        </div>

      </div>
    </main>
  );
};

export default ProfilePage;
