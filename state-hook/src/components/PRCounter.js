// Counter with Increment/Decrement
// Description: Build a counter component with buttons to increment and decrement the count. The count should never go below 0.

import React, { useEffect, useState } from "react";





function PRCounter(){

    // const handleClick = (param) => {
    //     switch(param) {
    //         case "increment":
    //             setCount(count +1)
    //             case "decrement":
    //                 setCount(count-1)
    //                 default :
    //                 setCount(count)
    //     }
    // }

    const [count, setCount] = useState(0)
    const [customValue, setCustomValue] = useState(0)

    const changeValue = () => {
        setCount(customValue)
    }
    
    return(
        <div>
            <div>Count: {count}</div>

            <div>
                <input type="number" value = {customValue} onChange={(e) => setCustomValue(e.target.value)} />
                <button onClick={changeValue}>Handle custom value </button>

            </div>

            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            
            <div>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
            

        </div>
    );
}

export default PRCounter