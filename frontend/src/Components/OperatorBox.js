import React, { useEffect } from 'react'
import Operators from './Operators'
// import { getRhsInteger } from './SubmitButton'

const OperatorBox = () => {
    const operators = ['+', '-', '*', '/']

    const getRhsInteger = () => {
        const eqn = document.querySelector('.equation');
        let rhs = prompt('What should be the rhs integer?');
        if(!rhs) return;
        let spanEle = document.createElement('span');
        spanEle.classList.add('remove');
        spanEle.innerHTML = 'x';
        spanEle.addEventListener('click',(e)=>{
            let gp = (e.target.parentElement.parentElement);
            gp.removeChild(e.target.parentElement);
        })
        let alreadyRhs = eqn.querySelector('.rhs');
        if(alreadyRhs) {
            alreadyRhs.innerHTML = rhs;
            alreadyRhs.setAttribute("data-value",alreadyRhs.innerHTML);
            alreadyRhs.append(spanEle)
            return;
        }
        let div = document.createElement('div');
        div.innerHTML = rhs;
        div.classList.add('rhs');
        div.setAttribute("data-value",rhs);
        div.append(spanEle);

        eqn.append(div);
    }

    const pushComparator = (e) => {
        const eqn = document.querySelector('.equation');
        const comp = eqn.querySelector('.comparator');
        let spanEle = document.createElement('span');
        spanEle.classList.add('remove');
        spanEle.innerHTML = 'x';
        spanEle.addEventListener('click',(e)=>{
            let gp = (e.target.parentElement.parentElement);
            gp.removeChild(e.target.parentElement);
        })
        if(comp) {
            comp.innerHTML = e.target.innerHTML;
            comp.setAttribute("data-value",e.target.getAttribute("data-value"));
            comp.append(spanEle);
            return;
        }
        const rhs = eqn.querySelector('.rhs');
        const clone = e.target.cloneNode(true);
     
        clone.append(spanEle);
        if(rhs) eqn.insertBefore(clone,rhs);
        else eqn.append(clone);
    }


    return (
        <div className='operatorBox'>
            {
                operators.map((val, i) => (
                    <Operators key={i} val={val} />
                ))
            }
            <span className="space"></span>
            <div className='comparator' data-value={"<"} onClick={pushComparator}>{"<"} </div>
            <div className='comparator' data-value={">"} onClick={pushComparator}>{">"} </div>
            <span className="space"></span>
            <div className="rhs" onClick={getRhsInteger}>
                RHS Integer
            </div>
        </div>
    )
}

export default OperatorBox;
