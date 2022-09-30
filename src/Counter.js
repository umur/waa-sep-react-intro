import { useState } from "react";

export default function Counter(){

    const [counterState, setCounterState] = useState(0);

    const onDecClicked = ()=>{
        setCounterState(counterState-1);
    }

    const onIncClicked = ()=>{
        setCounterState(counterState+1);
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