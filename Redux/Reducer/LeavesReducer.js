import { GETLEAVES, GETOWNLEAVES } from '../Action/ActionType';

const init = {
  Leaves: [],
  OwnLeaves: {},
};
const LeavesReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETLEAVES:
      return { ...state, Leaves: payload };
    case GETOWNLEAVES:
      return { ...state, OwnLeaves: payload };

    default:
      return state;
  }
};
export default LeavesReducer;
