import { GETLOGS } from '../Action/ActionType';

const init = { Logs: null };
const LogsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETLOGS:
      return { ...state, Logs: payload };

    default:
      return state;
  }
};
export default LogsReducer;
