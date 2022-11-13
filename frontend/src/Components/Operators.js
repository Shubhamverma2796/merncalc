import React from 'react'


const Operators = (props) => {
  return (
    <div className='operator' draggable data-value={props.val}>
      {props.val}
    </div>
  )
}

export default Operators