import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CourseDetails = () => {
  const { id } = useParams(); // Get the course ID from the URL params
  const courseId = parseInt(id, 10);
  const courses = useSelector((state) => state.course.courses);

  const courseDetail = courses.find((course) => course.id === courseId);

  console.log(courseDetail);
  return (
    <div className="max-w-5xl mx-auto p-4">
      <img
        src={courseDetail?.thumbnail}
        alt={courseDetail.name}
        className="w-1/2 object-cover mx-auto"
      />

      <h1 className="text-3xl font-semibold text-left my-4">
        {courseDetail.name}
      </h1>
      <p className="text-lg text-gray-700 text-left my-4">
        {courseDetail.description}
      </p>

      <div className="text-left my-4">
        <h2 className="text-xl font-semibold">
          Instructor: {courseDetail.instructor}
        </h2>
        <p className="text-gray-700">
          Enrollment Status: {courseDetail.enrollmentStatus}
        </p>
        <p className="text-gray-700">Duration: {courseDetail.duration}</p>
        <p className="text-gray-700">Schedule: {courseDetail.schedule}</p>
        <p className="text-gray-700">Location: {courseDetail.location}</p>
      </div>

      <div className="text-left my-4">
        <h2 className="text-xl font-semibold">Prerequisites:</h2>
        <ul className="list-disc pl-4">
          {courseDetail.prerequisites.map((prerequisite, index) => (
            <li key={index} className="text-gray-700">
              {prerequisite}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-left my-4">
        <h2 className="text-xl font-semibold">Syllabus:</h2>
        <ul className="list-decimal pl-4">
          {courseDetail.syllabus.map((item) => (
            <li key={item.week} className="text-gray-700">
              <span className="font-semibold">{`Week ${item.week}: `}</span>
              {item.topic}
              <p className="pl-4 text-gray-700">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
