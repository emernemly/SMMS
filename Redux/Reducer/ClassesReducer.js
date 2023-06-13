import { FINDOWNCLASS, GETCLASS, OWNCLASS } from '../Action/ActionType';

const init = {
  Classes: [],
  OwnClass: {},
};

const ClassesReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETCLASS:
      return { ...state, Classes: payload };
    case OWNCLASS:
      return { ...state, OwnClass: payload };
    case FINDOWNCLASS:
      return { ...state, OWNCLASS: payload };

    default:
      return state;
  }
};
export default ClassesReducer;
