import { GETHEADTEACHER, OWNHEADTEACHER } from '../Action/ActionType';

const init = {
  HeadTeacher: [],
  UserHeadTeacher: {},
};
const HeadTeacherReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETHEADTEACHER:
      return { ...state, HeadTeacher: payload };
    case OWNHEADTEACHER:
      return { ...state, UserHeadTeacher: payload };
    default:
      return state;
  }
};
export default HeadTeacherReducer;
