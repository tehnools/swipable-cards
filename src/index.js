import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import "./styles.css";
import rootReducer from "./reducers/index";
import Pot from './Pot'

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

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
