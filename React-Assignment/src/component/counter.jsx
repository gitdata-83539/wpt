import {useDispatch,useSelector} from 'react-redux'
import {increment,decrement} from './counterSlice'

function Counter()
{
    const counter= useSelector((state)=>
    {
        return state.counter
    })
    const dispatch=useDispatch()
    const onIncrement=()=>{
        dispatch(increment())
    }
    const onDecrement=()=>
    {
        dispatch(decrement())
    }
    return (
        <div>
          <h2>Counter</h2>
          <div>Counter: {counter.value}</div>
          <hr />
          <div>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>
          </div>
        </div>
      )
    }
    
    export default Counter
