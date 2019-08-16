export const SWIPE_RIGHT = "SWIPE_RIGHT";
export const SWIPE_LEFT = "SWIPE_LEFT";
export const SWIPE_UP = "SWIPE_UP";
export const SWIPE_DOWN = "SWIPE_DOWN";

export function swipeLeft(id) {
  return {
    type: SWIPE_LEFT,
    id
  };
}

export function swipeRight(id) {
  return {
    type: SWIPE_RIGHT,
    id
  };
}

export function swipeUp(id) {
  return {
    type: SWIPE_UP,
    id
  };
}

export function swipeDown(id) {
  return {
    type: SWIPE_DOWN,
    id
  };
}
