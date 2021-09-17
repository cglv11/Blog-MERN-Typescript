import { useState } from 'react'

export const useCounter = (valorInicial: number) => {
    const [valor, setValor] = useState(valorInicial);

    const sumar = (numero: number) => {
         setValor(valor + numero);
    }

    return {
        valor,
        sumar
    }
}
