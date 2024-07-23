import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";


export function NumberField() {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg cursor-pointer hover:bg-gray-100 w-48">
    <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-2 w-8 h-8 text-gray-600"
          >
            <path d="M9.00054 3L9 11H7V5.41L5 5.9485V3.61978L7.31304 3H9.00054ZM19 3V16H22L18 21L14 16H17V3H19ZM11 15.5C11 16.0645 10.8441 16.5926 10.5729 17.0436L8.28871 21H5.97931L7.45156 18.45C6.05661 18.1923 5 16.9695 5 15.5C5 13.8431 6.34315 12.5 8 12.5C9.65685 12.5 11 13.8431 11 15.5ZM8 16.5C8.55228 16.5 9 16.0523 9 15.5C9 14.9477 8.55228 14.5 8 14.5C7.44772 14.5 7 14.9477 7 15.5C7 16.0523 7.44772 16.5 8 16.5Z"></path></svg>
          <Button className="mt-2 text-sm">Number Field</Button>
          <Input type="text" />
    </div>
  );
}

