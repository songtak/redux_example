import React, {useCallback} from "react";
import {useSelector, useDispatch ,connect} from 'react-redux'
import CounterComponent from "./CounterComponent";
import {increase, decrease} from './counter.reducer'


const CounterContainer = () => {
    const number = useSelector(state => state.counterReducer.number)
    const dispatch = useDispatch()
    const onIncrease = useCallback(()=>dispatch(increase()), [dispatch])
    const onDecrease = useCallback(()=>dispatch(decrease()), [dispatch])
    return (
        <CounterComponent number={number} onDecrease={onDecrease} onIncrease={onIncrease}/>
    )
}
export default CounterContainer


