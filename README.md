# React Swipable Cards  

React-Spring  
Semantic-ui  
React v16  

A react component that allows for swipable cards.  

## Features  

* [x] Can Drag card  
* [x] Can Swipe Card  
* [x] Can Dispatch Given Actions  
* [ ] Animated to given direction  

### Demo
Link to [demo](https://csb-dm1kh.netlify.com/)

### Example Code 
Example code using React-Redux...  

```javascript
import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { SwipeCard, SwipeCards } from "@tehnools/swipable-cards";
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
              className={'ui card swipe-card'}
              onSwipeLeft={() => dispatch(swipeLeft(card.id))}
              onSwipeRight={() => dispatch(swipeRight(card.id))}
            >
              <Card.Header>
                <h1>{card.name}</h1>
              </Card.Header>
            </SwipeCard>
          ))}
      </SwipeCards>
    </div>
  )
}

export default Pot

```
