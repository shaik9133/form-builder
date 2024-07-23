import { Checkbox } from "../components/ui/checkbox";


export function Check() {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg cursor-pointer hover:bg-gray-100 w-48">
      <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-2 w-8 h-8 text-gray-600"
            >
              <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
              <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        
        checkbox field
      </label>
    </div>
  )
}