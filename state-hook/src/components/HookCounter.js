import React, {useState} from "react";

function HookCounter() {
    //let you use state in funct component
    //argument is the default value 0

    //Array destucting
    const [count, setCount] = useState(0)

  return (
    <div >
      <button onClick={() => setCount(count+1)}>Count {count}</button>     
    </div>
  );
}

export default HookCounter;