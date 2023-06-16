import { combineReducers } from 'redux';
import HeadTeacherReducer from './HeadTeacherReducer';
import TeacherReducer from './TeacherReducer';
import StudentReducer from './StudentsReducer';
import ClassesReducer from './ClassesReducer';
import ScoreReducer from './ScoreReducer';
import UserRedcuer from './UserReducer';
const RootReducer = combineReducers({
  HeadTeacherReducer,
  TeacherReducer,
  StudentReducer,
  ClassesReducer,
  ScoreReducer,
  UserRedcuer,
});

export default RootReducer;
