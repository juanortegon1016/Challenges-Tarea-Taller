import React from 'react'
import { useFetch } from '../hooks/useFetch'
import {useCounter} from '../hooks/useCounter'

export const MultiCustomHooks = () => {
    const {counter, increment} = useCounter(1)
    const {data, isLoading, Error} = useFetch (`https://breakingbadapi.com/api/quotes/${counter}`)

    return (
        <>
            <h1></h1>
            <hr/>
            {
                isLoading ? (
                <div className='alert'> Cargando...</div>
                ):(
                    <blockquote className='blockquote end'>
                        <p clasName='prueb'> {data[0]?.quote}</p>
                        <footer clasName='BlockFooter'>{data[0]?.quote}</footer>
                    </blockquote>
                )
                    
            }
            <button className= 'primary' onClick={() => increment()}> Siguiente Quote</button>
        </>
    )
}