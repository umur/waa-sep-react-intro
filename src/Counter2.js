import { useState } from "react";

export default function Counter2(){

    // subscription to change on the part of the state
    const value =  useSelector((state)=>state.counter.curValue);

    const dispatch = useDispatch();
    const onDecClicked = ()=>{
        dispatch(dec());
    }

    const onIncClicked = ()=>{
        dispatch(inc());
    }
    return (
        <div>
            <input 
            type="button"
            value='-'
            onClick={onDecClicked}
            />
            <div>{counterState}</div>
            <input 
            type="button"
            value='+'
            onClick={onIncClicked}
            />
        </div>

    )
}