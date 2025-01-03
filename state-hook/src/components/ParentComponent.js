import React, {useState, useEffect, useCallback} from "react";
import Tittle from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
    
   
    const[age, setAge] = useState(24)
    const [salary, setSalary] = useState(500000)

    const incrementAge = useCallback( () => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback( () =>{
        setSalary(salary + 1000)
    },[salary])

    return (
      <div >
        <Tittle />
        <Count text="age" count={age} />
        <Button handleClick={incrementAge}> Increment age</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick= {incrementSalary}>Increment salary</Button>
          
      </div>
    );
}

export default ParentComponent;