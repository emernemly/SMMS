import {
  GETPERMISSION,
  GETROLEBYNAME,
  GETROLES,
  OWNROLE,
} from '../Action/ActionType';

const init = { Role: [], Permission: [], OwnRole: null, checkRole: null };
const RolesReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETPERMISSION:
      return { ...state, Permission: payload };
    case GETROLES:
      return { ...state, Role: payload };
    case OWNROLE:
      return { ...state, OwnRole: payload };
    case GETROLEBYNAME:
      return { ...state, checkRole: payload };
    default:
      return state;
  }
};
export default RolesReducer;
