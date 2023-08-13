import { GETOWNSCORE, GETSCORE } from '../Action/ActionType';

const init = {
  moralScore: [],
  OwnScore: {},
};
const ScoreAddingReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETSCORE:
      return { ...state, moralScore: payload };
    case GETOWNSCORE:
      return { ...state, OwnScore: payload };

    default:
      return state;
  }
};
export default ScoreAddingReducer;
