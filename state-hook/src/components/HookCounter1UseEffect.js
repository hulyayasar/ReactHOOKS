import React, {useState, useEffect} from "react";

function HookCounter1UseEffect() {
    
    const [count, setCount] = useState(0)
    const [name,setName] = useState('')


   //this useEffect function executed after every render of component
   //runs after firsr render and after every update
    useEffect(() =>{
        console.log("useEffect -updating doc title")
        document.title = `you clicked + ${count} + times`
    }, [count])

    //second paramenter is the value that useEffect depends on, 
    //if the value does not change, useEffect does not run

  return (
    <div >
        <input type="text" 
        value= {name} 
        onChange={(e) =>setName(e.target.value)}
        ></input>

      <button onClick={() => setCount(count+1)}>Count {count}</button>     
    </div>
  );
}

export default HookCounter1UseEffect;