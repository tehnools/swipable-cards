export const GET_POTS_PENDING = "GET_POTS_PENDING";
export const GET_POTS_SUCCESS = "GET_POTS_SUCCESS";
export const GET_POTS_ERROR = "GET_POTS_ERROR";

const cards = [
  {
    id: 1,
    name: "Constance"
  },
  {
    id: 2,

    name: "yeet"
  },
  {
    id: 3,
    name: "Trinity"
  }
];

export function getCardsPending() {
  return {
    type: GET_POTS_PENDING
  };
}
export function getCardsSuccess() {
  return {
    type: GET_POTS_SUCCESS,
    cards
  };
}

export function getCardsError(msg) {
  return {
    type: GET_POTS_ERROR,
    msg
  };
}
