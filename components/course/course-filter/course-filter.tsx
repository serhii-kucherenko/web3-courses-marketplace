import { UiButton } from "@components/common/ui-button/ui-button";
import React from "react";

export const CourseFilter = () => {
  return (
    <div className="flex flex-wrap sm:flex-row justify-center items-center my-4">
      <div className="flex mr-0 sm:mr-2 mb-4 relative rounded-md">
        <input
          type="text"
          name="account"
          id="account"
          className="w-52 xs:w-72 sm:w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
          placeholder="0x2341ab..."
        />
        <UiButton>Search</UiButton>
      </div>
      <div className="relative mb-4 text-gray-700">
        <select
          className="w-72 h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
          placeholder="Regular input"
        >
          <option>A regular sized select input</option>
          <option>Another option</option>
          <option>And one more</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
