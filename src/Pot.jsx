
import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Card } from 'semantic-ui-react'

import SwipeCard from './SwipeCard'
import SwipeCards from './SwipeCards'
import { swipeLeft, swipeRight } from './actions/swipe.actions'
import { getCardsSuccess } from './actions/pot.actions'

const Pot = () => {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.pots, shallowEqual)
  const displayEmpty = () => <p>Sorry no more cards</p>
  useEffect(() => {
    dispatch(getCardsSuccess())
  }, [])

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
