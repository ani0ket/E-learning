export const courseModel = {
  id: 1,
  name: "Introduction to React Native",
  instructor: "John Doe",
  description:
    "Learn the basics of React Native development and build your first mobile app.",
  enrollmentStatus: "Open",
  thumbnail: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg", // Replace with the actual image URL
  duration: "8 weeks",
  schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
  location: "Online",
  prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
  syllabus: [
    {
      week: 1,
      topic: "Introduction to React Native",
      content:
        "Overview of React Native, setting up your development environment.",
    },
    {
      week: 2,
      topic: "Building Your First App",
      content: "Creating a simple mobile app using React Native components.",
    },
    // Additional weeks and topics...
  ],
};

const courses = [
  {
    ...courseModel,
    id: 1,
    name: "Course 1",
    instructor: "Instructor A",
    thumbnail: "https://example.com/course1.jpg",
    description: "Description for Course 1",
    students: [
      {
        id: 201,
        name: "Student 1",
        email: "student1@example.com",
      },
      {
        id: 202,
        name: "Student 2",
        email: "student2@example.com",
      },
    ],
  },
  {
    ...courseModel,
    id: 2,
    name: "Course 2",
    instructor: "Instructor B",
    thumbnail: "https://example.com/course2.jpg",
    description: "Description for Course 2",
    students: [
      {
        id: 203,
        name: "Student 3",
        email: "student3@example.com",
      },
      {
        id: 204,
        name: "Student 4",
        email: "student4@example.com",
      },
    ],
  },
  {
    ...courseModel,
    id: 3,
    name: "Course 3",
    instructor: "Instructor C",
    thumbnail: "https://example.com/course3.jpg",
    description: "Description for Course 3",
    students: [
      {
        id: 205,
        name: "Student 5",
        email: "student5@example.com",
      },
      {
        id: 206,
        name: "Student 6",
        email: "student6@example.com",
      },
    ],
  },
  {
    ...courseModel,
    id: 4,
    name: "Course 4",
    instructor: "Instructor D",
    thumbnail: "https://example.com/course4.jpg",
    description: "Description for Course 4",
    students: [
      {
        id: 207,
        name: "Student 7",
        email: "student7@example.com",
      },
      {
        id: 208,
        name: "Student 8",
        email: "student8@example.com",
      },
    ],
  },
  {
    ...courseModel,
    id: 5,
    name: "Course 5",
    instructor: "Instructor E",
    thumbnail: "https://example.com/course5.jpg",
    description: "Description for Course 5",
    students: [
      {
        id: 209,
        name: "Student 9",
        email: "student9@example.com",
      },
      {
        id: 210,
        name: "Student 10",
        email: "student10@example.com",
      },
    ],
  },
  {
    ...courseModel,
    id: 6,
    name: "Course 6",
    instructor: "Instructor F",
    thumbnail: "https://example.com/course6.jpg",
    description: "Description for Course 6",
    students: [
      {
        id: 211,
        name: "Student 11",
        email: "student11@example.com",
      },
      {
        id: 212,
        name: "Student 12",
        email: "student12@example.com",
      },
    ],
  },
  {
    ...courseModel,
    id: 7,
    name: "Course 7",
    instructor: "Instructor G",
    thumbnail: "https://example.com/course7.jpg",
    description: "Description for Course 7",
    students: [
      {
        id: 213,
        name: "Student 13",
        email: "student13@example.com",
      },
      {
        id: 214,
        name: "Student 14",
        email: "student14@example.com",
      },
    ],
  },
  {
    ...courseModel,
    id: 8,
    name: "Course 8",
    instructor: "Instructor H",
    thumbnail: "https://example.com/course8.jpg",
    description: "Description for Course 8",
    students: [
      {
        id: 215,
        name: "Student 15",
        email: "student15@example.com",
      },
      {
        id: 216,
        name: "Student 16",
        email: "student16@example.com",
      },
    ],
  },
  {
    ...courseModel,
    id: 9,
    name: "Course 9",
    instructor: "Instructor I",
    thumbnail: "https://example.com/course9.jpg",
    description: "Description for Course 9",
    students: [
      {
        id: 217,
        name: "Student 17",
        email: "student17@example.com",
      },
      {
        id: 218,
        name: "Student 18",
        email: "student18@example.com",
      },
    ],
  },
  {
    ...courseModel,
    id: 10,
    name: "Course 10",
    instructor: "Instructor J",
    thumbnail: "https://example.com/course10.jpg",
    description: "Description for Course 10",
    students: [
      {
        id: 219,
        name: "Student 19",
        email: "student19@example.com",
      },
      {
        id: 220,
        name: "Student 20",
        email: "student20@example.com",
      },
    ],
  },
];

console.log(courses);
