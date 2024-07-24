import React from 'react'
import { increaseby1, increaseby10, increaseby5, increaseby20 } from '../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'


const Counter = () => {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => dispatch(increaseby1())}>Increase by 1</button>
            <button onClick={() => dispatch(increaseby5())}>Increase by 5</button>
            <button onClick={() => dispatch(increaseby10())}>Increase by 10</button>
            <button onClick={() => dispatch(increaseby20())}>Increase by 20</button>
        </div>
    )
}

export default Counter