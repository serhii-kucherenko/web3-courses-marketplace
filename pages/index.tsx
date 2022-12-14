import { HomeHero } from "@components/common/home-hero/home-hero";
import { CourseCard } from "@components/course/course-card/course-card";
import { CourseList } from "@components/course/course-list/course-list";
import { BaseLayout } from "@components/layout/base-layout/base-layout";
import { getAllCourses } from "data/courses/fetcher";
import { InferGetStaticPropsType } from "next";

export default function Home({
  courses,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HomeHero />
      <CourseList courses={courses}>
        {(course) => <CourseCard key={course.id} course={course} />}
      </CourseList>
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();

  return {
    props: {
      courses: data,
    },
  };
}

Home.Layout = BaseLayout;
