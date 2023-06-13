import { combineReducers } from 'redux';
import HeadTeacherReducer from './HeadTeacherReducer';
import TeacherReducer from './TeacherReducer';
import StudentReducer from './StudentsReducer';
import ClassesReducer from './ClassesReducer';
const RootReducer = combineReducers({
  HeadTeacherReducer,
  TeacherReducer,
  StudentReducer,
  ClassesReducer,
});

export default RootReducer;
