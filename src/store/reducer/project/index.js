import { PROJECT_SELECT_CONST ,PROJECT_CONFIRMATION_DATA_CONST} from "../../constraint";

const INITIAL_STATE = {
  selectedProject: "",
  projectConfirmData:""
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROJECT_SELECT_CONST:
      return {
        ...states,
        selectedProject: action.payload,
      };
      case PROJECT_CONFIRMATION_DATA_CONST:
        return {
          ...states,
          projectConfirmData: action.payload,
        };
  
    default:
      return states;
  }
};
