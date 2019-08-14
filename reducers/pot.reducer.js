import { GET_POTS_SUCCESS } from "../actions/pot.actions";

export default function potsReducer(state = [], action) {
  switch (action.type) {
    case GET_POTS_SUCCESS:
      return action.cards;
    default:
      return state;
  }
}
