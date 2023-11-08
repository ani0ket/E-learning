import { useState } from "react";

const StudentDashboard = () => {
  const enrolledCourses = [
    /* Your list of enrolled courses goes here */
    "Introduction to Python",
  ];

  // Create a state to track the completion status of courses
  const [completedCourses, setCompletedCourses] = useState([]);

  // Function to handle marking a course as completed
  const markCourseAsCompleted = (courseId) => {
    setCompletedCourses([...completedCourses, courseId]);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-semibold my-4">My Enrolled Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{course.name}</h3>
              <p className="text-gray-700">Instructor: {course.instructor}</p>
              <p className="text-gray-700">Due Date: {course.dueDate}</p>
              <div className="mt-2">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                        Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-teal-600">
                        {course.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex w-full bg-gray-200 items-center rounded-full">
                      <div
                        style={{ width: `${course.progress}%` }}
                        className="text-xs font-semibold inline-block py-1 px-3 rounded-full text-teal-600 bg-teal-500"
                      ></div>
                    </div>
                  </div>
                </div>
                <button
                  className={`${
                    completedCourses.includes(course.id)
                      ? "bg-gray-400"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white px-4 py-2 mt-2 rounded-full w-full`}
                  onClick={() => markCourseAsCompleted(course.id)}
                  disabled={completedCourses.includes(course.id)}
                >
                  {completedCourses.includes(course.id)
                    ? "Completed"
                    : "Mark as Completed"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
