import React, {useContext} from "react";
import { CountContext } from "../App";

function CompD() {
    
    const countContext = useContext(CountContext)
    
    
    return (
      <div >
          Component D: {countContext.countState}
          <button onClick={() => countContext.countDispatch("increment") }>increment</button>
          <button onClick={() =>countContext.countDispatch("decrement") }>decrement</button>
          <button onClick={() => countContext.countDispatch("reset") }>reset</button>
      </div>
    );
}

export default CompD;