import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export function Textareafield() {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg cursor-pointer hover:bg-gray-100 w-48">
      <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-2 w-8 h-8 text-gray-600"
            >
              <path d="M21 4H3V6H21V4ZM21 11H8V13H21V11ZM21 18H8V20H21V18ZM5 11H3V20H5V11Z"></path>
            </svg>
            <Button className="mt-2 text-sm">text area field</Button>
            <Input type="text" />
            </div>
  );
}
