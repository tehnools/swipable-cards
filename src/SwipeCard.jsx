import React, { useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import PropTypes from 'prop-types'
// const config = {tension: 170, friction: 26}
const transparentImage = new Image(0, 0)
transparentImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

function SwipeCard ({ children, as, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, className }) {
  const [coord, setCoord] = useState({})
  const [poo, setPoo] = useState()
  const [dragImage, setDrag] = useState(null)

  const [swipeAnimation, setSwipeAnimation] = useSpring(
    () => ({
      duration: 500
    }))

  useEffect(() => {
    const element = document.querySelector('.swipe-card')
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = element.getBoundingClientRect()

    setCoord({
      x: elemRect.left - bodyRect.left,
      y: elemRect.top - bodyRect.top
    })
    setDrag(transparentImage)
  }, [])

  const calcDelta = (e, p) => p
    ? [e.clientX - coord.x - p.x, e.clientY - coord.y - p.y]
    : [e.clientX - coord.x, e.clientY - coord.y]

  const handleTouchStart = e => {
    const [deltaX, deltaY] = calcDelta(e)
    setPoo({ x: deltaX, y: deltaY })
  }

  const handleDragStart = e => {
    e.dataTransfer.setData('text', '')
    e.dataTransfer.setDragImage(dragImage, 0, 0)
    const [deltaX, deltaY] = calcDelta(e)
    setPoo({ x: deltaX, y: deltaY })
  }

  const handleDrag = e => {
    const [deltaX, deltaY] = calcDelta(e, poo)
    e.target.style.transform = `translate(${deltaX}px,${deltaY}px)`
  }

  const handleDragEnd = e => {
    const [deltaX, deltaY] = calcDelta(e, poo)
    e.target.style.transform = 'translate(0px,0px)'
    handleActions({ x: deltaX, y: deltaY })
  }

  const handleActions = endCoords => {
    const deltaXPercent = endCoords.x / 330 * 100
    console.log('Swipe Diff Percentage', deltaXPercent)
    if (deltaXPercent > 50) {
      console.log('swipeRight')
      setSwipeAnimation({
        from: { transform: `translate(${endCoords.x}px,${endCoords.y}px)` },
        to: { transform: `translate(999px, ${endCoords.y}px)` }
      })
      onSwipeRight()
    } else if (deltaXPercent < -50) {
      console.log('swipeLeft')
      onSwipeLeft()
    }
  }

  const handleTouchCapture = e => {
    const [deltaX, deltaY] = calcDelta(e, poo)
    e.target.style.transform = `translate(${deltaX}px,${deltaY}px)`
  }

  return (
    <animated.div
      className={className}
      draggable="true"
      style={swipeAnimation}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onTouchStart={handleTouchStart}
      onTouchMoveCapture={handleTouchCapture}
    >
      {children}
    </animated.div>
  )
}

SwipeCard.propTypes =
  {
    children: PropTypes.node,
    as: PropTypes.func,
    onSwipeLeft: PropTypes.func,
    onSwipeRight: PropTypes.func,
    onSwipeUp: PropTypes.func,
    onSwipeDown: PropTypes.func,
    className: PropTypes.string
  }

export default SwipeCard
