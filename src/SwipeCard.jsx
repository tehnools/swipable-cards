import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { animated, useSpring } from "react-spring";

function SwipeCard({ name, onSwipeLeft, onSwipeRight }) {
  const [coord, setCoord] = useState({});
  const [poo, setPoo] = useState();
  const [endCoord, setEndCoord] = useState({ x: 0, y: 0 });

  const swipeRight = useSpring({
    transform: `translate(${endCoord.x + 9999}px, ${endCoord.y}px)`,
    from: { transform: `translate(${endCoord.x}px, ${endCoord.y}px)` }
  });

  const swipeLeft = useSpring({
    transform: `translate(${endCoord.x - 9999}px, ${endCoord.y}px)`,
    from: { transform: `translate(${endCoord.x}px, ${endCoord.y}px)` }
  });

  useEffect(() => {
    const element = document.querySelector(".swipe-card");
    const bodyRect = document.body.getBoundingClientRect();
    if (element) {
      const elemRect = element.getBoundingClientRect();
      const offsetY = elemRect.top - bodyRect.top;
      const offsetX = elemRect.left - bodyRect.left;
      setCoord({ x: offsetX, y: offsetY });
    }
  }, []);

  const handleDragStart = e => {
    const deltaX = e.clientX - coord.x;
    const deltaY = e.clientY - coord.y;
    setPoo({ x: deltaX, y: deltaY });
  };

  const handleDrag = e => {
    const deltaX = e.clientX - poo.x - coord.x;
    const deltaY = e.clientY - poo.y - coord.y;
    e.target.style.transform = `translate(${deltaX}px,${deltaY}px)`;
  };

  const handleDragEnd = e => {
    const deltaX = e.clientX - poo.x - coord.x;
    const deltaY = e.clientY - poo.y - coord.y;
    setEndCoord({ x: deltaX, y: deltaY });
    handleActions({ x: deltaX, y: deltaY });
    e.target.style.transform = `translate(0px,0px)`;
  };

  const handleActions = endCoords => {
    const deltaXPercent = ((coord.x + endCoords.x) / coord.x) * 100;
    if (deltaXPercent > 170) {
      console.log("swipeRight");
    } else if (deltaXPercent < 30) {
      console.log("swipeLeft");
    }
  };

  return (
    <animated.div
      className="ui card swipe-card"
      draggable="true"
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <Card.Header>
        <h1>{name}</h1>
      </Card.Header>
    </animated.div>
  );
}

export default SwipeCard;
