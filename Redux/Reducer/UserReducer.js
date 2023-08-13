import { GETUSER, LOGOUT, SIGNIN } from '../Action/ActionType';

const init = {
  user: null,
};
const UserRedcuer = (state = init, { type, payload }) => {
  switch (type) {
    case SIGNIN:
      localStorage.setItem('token', payload.id);
      localStorage.setItem('Role', payload.Role);
      return { ...state, user: payload };
    case GETUSER:
      return { ...state, user: payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
export default UserRedcuer;
