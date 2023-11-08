import { Link } from "react-router-dom";
import Hero from "../assets/hero.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  coursesError,
  coursesLoaded,
  fetchCourses,
} from "../store/reducers/courseSlice";
import { useEffect } from "react";

const CourseListing = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.course.status);

  useEffect(() => {
    // Dispatch the action to fetch courses when the component mounts
    dispatch(fetchCourses())
      .then((response) => {
        if (response.error) {
          // Handle the error case
          dispatch(coursesError(response.error.message));
        } else {
          // Handle the success case
          dispatch(coursesLoaded(response.payload));
        }
      })
      .catch((error) => {
        // Handle any other unexpected errors
        dispatch(coursesError(error.message));
      });
  }, [dispatch]);

  const courses = useSelector((state) => state.course.courses);
  console.log(courses);

  return (
    <>
      {/* Hero Image */}
      <div className="w-full min-h-screen  relative ">
        <div className="relative">
          <h1 className="text-6xl font-semibold absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            Learn Everything
          </h1>
          <img src={Hero} alt="Hero" className="w-3/4 object-cover mx-auto" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        </div>

        {/* Course Cards */}
        <div className="absolute top-[60vh] w-full bg-transparent flex flex-wrap p-4">
          {courses.map((course) => (
            <div className="w-1/2 md:w-1/3 lg:w-1/4 p-4" key={course.id}>
              <Link to={`/courses/${course.id}`}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.name}
                    className="w-full object-cover"
                  />
                  <div className="p-6 bg-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {course.name}
                    </h3>
                    <p className="text-gray-600">{course.description}</p>
                    <p className="text-gray-600 font-semibold">
                      By {course.instructor}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseListing;
