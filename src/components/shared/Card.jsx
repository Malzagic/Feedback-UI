import React from 'react';
import PropsTypes from 'prop-types';

function Card({ children, revers }) {
  return (
    <div className={`card ${revers && 'reverse'}`}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropsTypes.node.isRequired,
  reverse: PropsTypes.bool,
}

export default Card
