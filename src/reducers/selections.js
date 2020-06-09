import { SELECT_STATE } from "actions/selections";

const INITIAL_STATE = {
  map_selected_state: null,
};

export default function selections(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_STATE:
      return {
        ...state,
        map_selected_state: action.state,
      };
    default:
      return state;
  }
}
