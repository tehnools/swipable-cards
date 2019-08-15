import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import "./styles.css";
import rootReducer from "../reducers/index";
import SwipeCard from "./SwipeCard";
import SwipeCards from "./SwipeCards";
import { swipeLeft, swipeRight } from "../actions/swipe.actions";
import { getCardsSuccess } from "../actions/pot.actions";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Pot />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

function Pot() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.pots);
  const displayEmpty = () => <p>Sorry no more cards</p>;
  useEffect(() => {
    dispatch(getCardsSuccess());
  });

  return (
    <div className="pot">
      <SwipeCards onEnd={displayEmpty}>
        {cards &&
          cards.length > 0 &&
          cards.map((card, index) => (
            <SwipeCard
              key={index}
              name={card.name}
              onSwipeLeft={() => dispatch(swipeLeft(cards))}
              onSwipeRight={() => dispatch(swipeRight(cards))}
            />
          ))}
      </SwipeCards>
    </div>
  );
}
