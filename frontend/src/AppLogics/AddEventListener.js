const addListeners = () => {
    const operands = document.getElementsByClassName('operand');
    const operators = document.getElementsByClassName('operator');
    const eqnbox = document.querySelector('.equation');

    let dragged = null; 

    for (var i = 0; i < operands.length; i++) {
        operands[i].addEventListener('dragstart', (e) => {
            dragged = e.target;
        })
    }
    for (var i = 0; i < operands.length; i++) {
        operands[i].addEventListener('dragend', () => {
        })
    }

    for (var i = 0; i < operators.length; i++) {
        operators[i].addEventListener('dragstart', (e) => {
            dragged = e.target;
        })
    }
    for (var i = 0; i < operators.length; i++) {
        operators[i].addEventListener('dragend', () => {
        })
    }
    eqnbox.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    eqnbox.addEventListener('dragenter', () => {

    })
    eqnbox.addEventListener('dragleave', () => {

    })
    eqnbox.addEventListener('drop', (e) => {
        const eqn = document.querySelector('.equation');
        const comparator = eqn.querySelector('.comparator')
        const rhs = eqn.querySelector('.rhs');
        const clone = dragged.cloneNode(true);
        let spanEle = document.createElement('span');
        spanEle.classList.add('remove');
        spanEle.innerHTML = 'x';
        clone.appendChild(spanEle);
        spanEle.addEventListener('click',(e)=>{
            let gp = (e.target.parentElement.parentElement);
            gp.removeChild(e.target.parentElement);
        })
        if(comparator) eqn.insertBefore(clone,comparator);
        else if (rhs) eqn.insertBefore(clone,rhs);
        else  eqn.appendChild(clone);
    })
}

const removeElem = () => {

}

export default addListeners;
