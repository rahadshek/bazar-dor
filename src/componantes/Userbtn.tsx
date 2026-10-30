"use client";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

const Userbtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex w-96 flex-col gap-4">
      {/* password */}
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
            className="w-full max-w-[280px]"
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

      {/* confirm password */}
      <TextField
        className="w-full max-w-[280px]"
        name="confirmPassword"
        validate={(value: string) => {
          if (password.length < 8) {
            return null;
          }

          if (value !== password) {
            return "পাসওয়ার্ড মিলছে না";
          }

          return null;
        }}
      >
        <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>

        <InputGroup>
          <InputGroup.Input
            name="confirmPassword"
            type={isConfirmVisible ? "text" : "password"}
            placeholder="আবার লিখুন"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <InputGroup.Suffix className="pe-0">
            <Button
              type="button"
              isIconOnly
              aria-label={isConfirmVisible ? "Hide password" : "Show password"}
              size="sm"
              variant="ghost"
              onPress={() => setIsConfirmVisible(!isConfirmVisible)}
            >
              {isConfirmVisible ? (
                <Eye className="size-4" />
              ) : (
                <EyeSlash className="size-4" />
              )}
            </Button>
          </InputGroup.Suffix>
        </InputGroup>

        <FieldError />
      </TextField>
    </div>
  );
};

export default Userbtn;
