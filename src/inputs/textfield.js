import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import React from "react";

export function Textfield() {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg cursor-pointer hover:bg-gray-100 w-48">
      <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-2 w-8 h-8 text-gray-600"
            >
              <path d="M13 6V21H11V6H5V4H19V6H13Z"></path>
            </svg>
            <Button className="mt-2 text-sm">text field</Button>
            <Input type="text" />
          
    </div>
  );
}