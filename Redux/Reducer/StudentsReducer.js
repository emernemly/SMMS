import {
  GETSTUDENTBYCLASS,
  LOGOUTSTUDENT,
  OWNSTUDENTS,
  SIGNINSTUDENT,
  STUDENTS,
} from '../Action/ActionType';

const init = {
  Students: [],
  OwnStudent: {},
};

const StudentReducer = (state = init, { type, payload }) => {
  switch (type) {
    case STUDENTS:
      return { ...state, Students: payload };
    case OWNSTUDENTS:
      return { ...state, OwnStudent: payload };
    case GETSTUDENTBYCLASS:
      return { ...state, Students: payload };
    case SIGNINSTUDENT:
      localStorage.setItem('tokenStudent', payload.id);
      localStorage.setItem('Role', 'student');
      return { ...state, OwnStudent: payload };
    case LOGOUTSTUDENT:
      return { ...state, OwnStudent: null };
    default:
      return state;
  }
};

export default StudentReducer;
