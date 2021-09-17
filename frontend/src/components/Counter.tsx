import React, { useState } from 'react'
import { useCounter } from './hooks/useCounter';

const Counter = () => {

    const { valor, sumar} = useCounter(100);

    // is now in hook
    // const [valor, setValor] = useState(0);

    // const sumar = (numero: number) => {
    //      setValor(valor + numero);
    // }

    return (
        <div>
            <h3>Contador: {valor} </h3>

            <button className="btn btn-primary" onClick={ () => sumar(1) }>
                +1
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => sumar(-1)}>
                -1
            </button>
        </div>
    )
}

export default Counter
