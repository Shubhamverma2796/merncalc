import React, { useState, useEffect } from 'react'
import Operands from './Operands'
import axios from 'axios';
import addListeners from '../AppLogics/AddEventListener';
import { axiosInstance } from '../config';

const OperandBox = (props) => {
  const [operands, setOperands] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOperands = async () => {
    try {

      const {data} = await axiosInstance.get('/keys');
        const temp = (data[0].keys)
        setOperands(temp);
        setLoading(false);
        setTimeout(() => {
          addListeners();
        }, 2000)
    
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchOperands();

  }, [])

  return (
    <div className='operandBox'>
      {!loading ?
        operands.map((oper, id) => (
          <Operands key={id} character={oper.key} val={oper.val} />
        )) : <>Loading operands. Please wait for few seconds</>
      }
    </div>
  )
}

export default OperandBox;
