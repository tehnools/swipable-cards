import React from "react";

function SwipeCards({ children }) {
  const onEnd = () => f => f;
  return <>{children.length > 0 ? children : onEnd()}</>;
}

export default SwipeCards;
