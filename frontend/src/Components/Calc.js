import React from 'react'
import OperandBox from './OperandBox'
import OperatorBox from './OperatorBox'
import EquationBox from './EquationBox'
import SubmitButton from './SubmitButton'

const Calc = (props) => {
    return (
        <div>
            <OperandBox />
            <OperatorBox />
            <EquationBox />
            <SubmitButton />
        </div>
    )
}

export default Calc;