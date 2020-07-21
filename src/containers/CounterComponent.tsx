import React, {useState} from "react";
//프로퍼티로 number, onIncrease, onDecrease를 jsx에 전달한다.
//Dumb container
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase = () => ({type: INCREASE})
export const decrease = () => ({type: DECREASE})

const initialState = {
    number: 0
}

function counter(state, action){}


const CounterComponent = ({number:number, onIncrease, onDecrease}) => {
    return (<>
    <h1>숫자: {number}</h1>
        <br/>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
            </>
    )
}
export default CounterComponent

