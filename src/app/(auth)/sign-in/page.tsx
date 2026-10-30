"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { toast } from "react-toastify";
import { signIn } from "@/app/lib/auth-client";
import { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";

const SignIpPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      setIsLoading(true);

      const { data: user, error } = await signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        console.log(error);
        toast.error(
          error.message || "সাইন আপ করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        );
        return;
      }

      if (user) {
        toast.success("সফলভাবে সাইন আপ হয়েছে!");
        console.log(user);
      }
    } catch (error) {
      console.error(error);
      toast.error("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-8 sm:py-12">
      <div className="flex w-full max-w-md flex-col items-center">
        {/* Heading */}
        <div className="my-5 space-y-2 text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">সাইন ইন</h1>

          <p className="text-sm text-gray-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Signup Card */}
        <div className="w-full rounded-2xl border border-gray-300 bg-white p-4 shadow-lg sm:p-6">
          <Form
            className="flex w-full flex-col gap-4"
            render={(props) => <form {...props} data-custom="foo" />}
            onSubmit={onSubmit}
          >
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value: string) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "সঠিক ইমেইল দিন।";
                }
                return null;
              }}
            >
              <Label>ইমেইল</Label>
              <Input className="w-full" placeholder="you@example.com" />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              className="w-full"
              name="password"
              validate={(value: string) => {
                if (value.length < 8) {
                  return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                }
                return null;
              }}
            >
              <Label>পাসওয়ার্ড</Label>

              <InputGroup>
                <InputGroup.Input
                  name="password"
                  className="w-full"
                  type={isVisible ? "text" : "password"}
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <InputGroup.Suffix className="pe-0">
                  <Button
                    type="button"
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>

              <FieldError />
            </TextField>

            {/* Submit Button */}
            <div className="flex w-full justify-center">
              <Button
                type="submit"
                className="w-full bg-[#05893e] text-white"
                isDisabled={isLoading}
              >
                {isLoading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
              </Button>
            </div>

            <div className="divider">অথবা</div>
          </Form>

          {/* Social Login */}
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Button className="w-full" variant="tertiary">
              <Icon icon="devicon:google" />
              Google দিয়ে চালিয়ে যান
            </Button>

            <Button className="w-full" variant="tertiary">
              <Icon icon="mdi:github" />
              GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          {/* Sign In Link */}
          <p className="flex items-center justify-center gap-1 py-4 text-sm">
            অ্যাকাউন্ট আছে?
            <Link
              href="/signup"
              className="font-semibold text-[#05893e] hover:underline"
            >
              সাইন আপ করুন{" "}
            </Link>
          </p>
        </div>
      </div>
      <Link href={"/"} className="pt-6 text-[#717973]">
        <span>
          {" "}
          <span>← </span>হোম পেজে ফিরে যান
        </span>
      </Link>
    </div>
  );
};

export default SignIpPage;
