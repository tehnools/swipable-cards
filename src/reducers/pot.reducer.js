import { GET_POTS_SUCCESS } from '../actions/pot.actions'
import {
  SWIPE_LEFT,
  SWIPE_RIGHT,
  SWIPE_UP,
  SWIPE_DOWN
} from '../actions/swipe.actions'

export default function potsReducer (state = [], action) {
  switch (action.type) {
    case GET_POTS_SUCCESS:
      return [...action.cards]
    case SWIPE_LEFT:
    case SWIPE_RIGHT:
    case SWIPE_UP:
    case SWIPE_DOWN:
      return state.filter(card => card.id !== action.id)
    default:
      return state
  }
}
