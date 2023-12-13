import Button from "../button";
import Link from "next/link";
import CourseCard from "./cards";

//This is a dummy data for testing purposes
const courses = [
  {
    name: "Course",
    image: "/course.svg",
    info: "Course info",
    instructor: "Course instructor",
    path: "/course",
  },
]
export default function Courses() {
  //this is the actual code
{/*  const courses=async function getCourses() {
    const res = await fetch("/api/courses");
    const courses = await res.json();
    return courses;
  }
*/}
  console.log(courses);
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="text-3xl font-bold">Welcome Username</h1>
      <div className="flex flex-row flex-wrap justify-center">
      {courses.map((course) => (
        <CourseCard
          name={course.name}
          image={course.image}
          info={course.info}
          instructor={course.instructor}
          path={course.path}
        />
      ))}
      </div>
      <Link href="/course">
        <Button>Add courses</Button>
      </Link>
    </div>
  );
}
