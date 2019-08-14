import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./styles.css";
import rootReducer from "../reducers/index";
import SwipeCard from "./SwipeCard";
import SwipeCards from "./SwipeCards";

const cards = [{ name: "Constance" }, { name: "yeet" }, { name: "Trinity" }];

const store = createStore(rootReducer);

function App() {
  const displayEmpty = () => <p>Sorry no mor cards</p>;

  return (
    <Provider store={store}>
      <div className="App">
        <div className="pot">
          <SwipeCards onEnd={displayEmpty}>
            {cards.length > 0 &&
              cards.map((card, index) => (
                <SwipeCard key={index} name={card.name} />
              ))}
          </SwipeCards>
        </div>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
