import React, { useEffect } from 'react'
import addListeners from '../AppLogics/AddEventListener'

const Operands = (props) => {
  return (
    <div className='operand' draggable data-value={props.val}>
      {props.character}
    </div>
  )
}

export default Operands