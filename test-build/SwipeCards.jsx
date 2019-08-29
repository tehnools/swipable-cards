import React from 'react'
import PropTypes from 'prop-types'

function SwipeCards ({ children, onEnd }) {
  return <>{children || onEnd()}</>
}

SwipeCards.propTypes = {
  children: PropTypes.node.isRequired,
  onEnd: PropTypes.func
}

export default SwipeCards
