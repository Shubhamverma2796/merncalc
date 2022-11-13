import React from 'react'



const evaluate = () => {
    let expression = ""
    const eqnBox = document.querySelector('.equation');
    const eqn = eqnBox.querySelectorAll('[data-value]');
    for (var i = 0; i < eqn.length; i++) {
        expression += eqn[i].getAttribute('data-value');
    }
    try {
        let result = eval(expression);
        if (typeof (result) === 'number' || typeof (result) === 'boolean') window.alert(result);
        else { window.alert("Not a valiiid equation"); }
    } catch (err) {
        window.alert("Not a valid equation");
    }
}

const SubmitButton = () => {
    return (
        <>
            <button className="submit" onClick={() => evaluate()}>
                Evaluate
            </button>
            <p>If you like my work, then please please consider me for the internship. I've tried my best.</p>
        </>
    )
}

export default SubmitButton;
