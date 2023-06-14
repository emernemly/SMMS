import { GETDEDUCTIONSCORES } from '../Action/ActionType';

const init = {
  score: [],
};

const ScoreReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETDEDUCTIONSCORES:
      return { ...state, score: payload };

    default:
      return state;
  }
};

export default ScoreReducer;
