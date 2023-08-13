import { GETACTIVITIES, GETOWNACTIVITIES } from '../Action/ActionType';

const init = {
  Activities: [],
  OwnActivitien: {},
};

const ActivitiesReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETACTIVITIES:
      return { ...state, Activities: payload };
    case GETOWNACTIVITIES:
      return { ...state, OwnActivitien: payload };
    default:
      return state;
  }
};
export default ActivitiesReducer;
