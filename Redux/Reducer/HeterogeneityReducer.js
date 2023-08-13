import { GETHETEROGENEITY, GETOWNHETEROGENEITY } from '../Action/ActionType';

const init = { Heterogeneity: [], OwnHeterogeneity: {} };
const HeterogeneityReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETHETEROGENEITY:
      return { ...state, Heterogeneity: payload };
    case GETOWNHETEROGENEITY:
      return { ...state, OwnHeterogeneity: payload };
    default:
      return state;
  }
};
export default HeterogeneityReducer;
