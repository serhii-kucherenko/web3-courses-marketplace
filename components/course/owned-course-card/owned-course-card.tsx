import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { ECourseState, TCourseNormilized } from "types/course";

const STATE_COLORS = {
  [ECourseState.Purchased]: "indigo",
  [ECourseState.Activated]: "green",
  [ECourseState.Deactivated]: "red",
};

interface IProps {
  course: TCourseNormilized;
}

export const OwnedCourseCard = ({
  course,
  children,
}: PropsWithChildren<IProps>) => {
  const stateColor = STATE_COLORS[course.state];

  return (
    <div className="bg-white border shadow overflow-hidden sm:rounded-lg mb-3">
      <div className="flex">
        <div className="flex-1">
          <div className="h-full next-image-wrapper">
            <Image
              className="object-cover"
              src={course.coverImage}
              height="45"
              width="45"
              layout="responsive"
              alt={course.title}
            />
          </div>
        </div>

        <div className="flex-4">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg break-word leading-6 font-medium text-gray-900">
              <span className="mr-2">{course.title}</span>
              <span
                className={`text-xs text-${stateColor}-700 bg-${stateColor}-200 rounded-full p-2`}
              >
                {course.state.toLowerCase()}
              </span>
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {course.price} ETH
            </p>
          </div>

          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-9 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Course ID</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {course.ownedCourseId}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-9 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Proof</dt>
                <dd className="break-words sm:break-normal mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {course.proof}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:px-6">{children}</div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
