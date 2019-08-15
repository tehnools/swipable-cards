export const SWIPE_RIGHT = "SWIPE_RIGHT";
export const SWIPE_LEFT = "SWIPE_LEFT";
export const SWIPE_UP = "SWIPE_UP";
export const SWIPE_DOWN = "SWIPE_DOWN";

export function swipeLeft(cards) {
  return {
    type: SWIPE_LEFT,
    cards
  };
}

export function swipeRight(cards) {
  return {
    type: SWIPE_RIGHT,
    cards
  };
}

export function swipeUp(cards) {
  return {
    type: SWIPE_UP,
    cards
  };
}

export function swipeDown(cards) {
  return {
    type: SWIPE_DOWN,
    cards
  };
}
