# React Swipable Cards  

React-Spring  
Semantic-ui  
React v16  

A react component that allows for swipable cards.  

## Features  

* [x] Can Drag card  
* [x] Can Swipe Card  
* [x] Can Dispatch Given Actions  
* [] Animated to given direction  

### Demo
Link to (Demo)[https://codesandbox.io/s/github/tehnools/swipable-cards/tree/master/?fontsize=14&view=preview]

### Example Code 
Example code using React-Redux...  

```javascript
import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import SwipeCard from "./SwipeCard";
import SwipeCards from "./SwipeCards";
import { swipeLeft, swipeRight } from "./actions/swipe.actions";
import { getCardsSuccess } from "./actions/pot.actions";

const Pot = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.pots, shallowEqual);
  const displayEmpty = () => <p>Sorry no more cards</p>;
  useEffect(() => {
    dispatch(getCardsSuccess());
  },[]);

  return (
    <div className="pot">
      <SwipeCards onEnd={displayEmpty}>
        {cards &&
          cards.length > 0 &&
          cards.map((card, index) => (
            <SwipeCard
              key={index}
              name={card.name}
              onSwipeLeft={() => dispatch(swipeLeft(card.id))}
              onSwipeRight={() => dispatch(swipeRight(card.id))}
            />
          ))}
      </SwipeCards>
    </div>
  );
}

export default Pot

```
