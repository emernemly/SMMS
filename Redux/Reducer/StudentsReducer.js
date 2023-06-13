import { OWNSTUDENTS, STUDENTS } from '../Action/ActionType';

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
    default:
      return state;
  }
};

export default StudentReducer;
