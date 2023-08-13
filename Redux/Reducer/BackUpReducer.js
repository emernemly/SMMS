const { GETBACKUP } = require('../Action/ActionType');

const init = { BackUp: null };
const BackUpReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETBACKUP:
      return { ...state, BackUp: payload };

    default:
      return state;
  }
};
export default BackUpReducer;
