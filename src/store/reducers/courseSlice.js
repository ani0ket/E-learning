import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const headers = new Headers();
headers.append("Authorization", "Bearer SOME-VALUE");

export const fetchCourses = createAsyncThunk(
  "course/fetchCourses",
  async () => {
    const response = await fetch(
      "https://mpc1f9314cf1b9c0ac5c.free.beeceptor.com/courses",
      {
        method: "GET",
        headers: headers,
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [], // Initialize the courses state as an empty array
    status: "idle", // Possible statuses: 'idle', 'loading', 'succeeded', 'failed'
    error: null, // Store any potential error
  },
  reducers: {
    // Additional reducers for updating courses or other state properties if needed
    coursesLoading: (state) => {
      state.status = "loading";
    },
    coursesLoaded: (state, action) => {
      state.status = "succeeded";
      state.courses = action.payload; // Update the courses state with fetched data
    },
    coursesError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { coursesLoading, coursesLoaded, coursesError } =
  courseSlice.actions;

export default courseSlice.reducer;
