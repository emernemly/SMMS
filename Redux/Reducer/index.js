import { combineReducers } from 'redux';
import HeadTeacherReducer from './HeadTeacherReducer';
import TeacherReducer from './TeacherReducer';
import StudentReducer from './StudentsReducer';
import ClassesReducer from './ClassesReducer';
import ScoreReducer from './ScoreReducer';
import UserRedcuer from './UserReducer';
import ScoreAddingReducer from './ScoreAddingReducer';
import ActivitiesReducer from './ActivitiesReducer';
import LeavesReducer from './LeavesReducer';
import HeterogeneityReducer from './HeterogeneityReducer';
import ClassMorninfCheckReducer from './ClassMorninfCheckReducer';
import RolesReducer from './RolesReducer';
import BackUpReducer from './BackUpReducer';
import LogsReducer from './LogsReducer';

const RootReducer = combineReducers({
  HeadTeacherReducer,
  TeacherReducer,
  StudentReducer,
  ClassesReducer,
  ScoreReducer,
  UserRedcuer,
  ScoreAddingReducer,
  ActivitiesReducer,
  LeavesReducer,
  ClassMorninfCheckReducer,
  HeterogeneityReducer,
  RolesReducer,
  BackUpReducer,
  LogsReducer,
});

export default RootReducer;
