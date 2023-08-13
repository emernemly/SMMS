import { GETDEDUCTIONSCORES, OWNDEDUCTIONS } from '../Action/ActionType';

const init = {
  score: [],
  OwnScore: {},
};

const ScoreReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETDEDUCTIONSCORES:
      return { ...state, score: payload };
    case OWNDEDUCTIONS:
      return { ...state, OwnScore: payload };

    default:
      return state;
  }
};

export default ScoreReducer;
