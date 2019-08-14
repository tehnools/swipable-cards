export const GET_POTS_PENDING = "GET_POTS_PENDING";
export const GET_POTS_SUCCESS = "GET_POTS_SUCCESS";
export const GET_POTS_ERROR = "GET_POTS_ERROR";

const cards = [
  {
    name: "Constance"
  },
  {
    name: "yeet"
  },
  {
    name: "Trinity"
  }
];

export function getCardsPending() {
  return {
    type: GET_POTS_PENDING
  };
}

export function getCardsSucess() {
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
