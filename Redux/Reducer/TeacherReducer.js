import { GETOWNTEACHER, GETTEACHER } from '../Action/ActionType';

const init = {
  Teacher: [],
  OwnTeacher: {},
};
const TeacherReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETTEACHER:
      return { ...state, Teacher: payload };
    case GETOWNTEACHER:
      return { ...state, OwnTeacher: payload };

    default:
      return state;
  }
};
export default TeacherReducer;
