import { combineReducers } from "redux";
import courseReducer from "./reducers/courseSlice";

const rootReducer = combineReducers({
  course: courseReducer,
  // Add other reducers if you have more slices
});

export default rootReducer;
