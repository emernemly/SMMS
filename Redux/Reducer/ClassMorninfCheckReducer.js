import {
  GETCLASSMORNIGCHECK,
  GETOWNCLASSMORNINGCKECK,
} from '../Action/ActionType';

const init = { ClassMorninCheck: [], OwnClassMorningCheck: {} };
const ClassMorninfCheckReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETCLASSMORNIGCHECK:
      return { ...state, ClassMorninCheck: payload };
    case GETOWNCLASSMORNINGCKECK:
      return { ...state, OwnClassMorningCheck: payload };
    default:
      return state;
  }
};
export default ClassMorninfCheckReducer;
