import { GETUSER, SIGNIN } from '../Action/ActionType';

const init = {
  user: null,
};
const UserRedcuer = (state = init, { type, payload }) => {
  switch (type) {
    case SIGNIN:
      localStorage.setItem('token', payload.id);
      return { ...state, user: payload };
    case GETUSER:
      return { ...state, user: payload };

    default:
      return state;
  }
};
export default UserRedcuer;
