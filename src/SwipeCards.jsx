import React from "react";

function SwipeCards({ children, onEnd }) {
  return <>{children ? children : onEnd()}</>;
}

export default SwipeCards;
