import { GET_POTS_SUCCESS } from "../actions/pot.actions";
import {
  SWIPE_LEFT,
  SWIPE_RIGHT,
  SWIPE_UP,
  SWIPE_DOWN
} from "../actions/swipe.actions";

export default function potsReducer(state = [], action) {
  switch (action.type) {
    case GET_POTS_SUCCESS:
      return action.cards;
    case SWIPE_LEFT:
      console.log(`swiped, ${action.cards[0].name} left`);
      return action.cards.pop();
    case SWIPE_RIGHT:
      console.log(`swiped, ${action.cards[0].name} right`);
      return action.cards.pop();
    case SWIPE_UP:
      console.log(`swiped, ${action.cards[0]} up`);
      return action.cards.pop();
    case SWIPE_DOWN:
      console.log(`swiped, ${action.cards[0]} down`);
      return action.cards.pop();
    default:
      return state;
  }
}
