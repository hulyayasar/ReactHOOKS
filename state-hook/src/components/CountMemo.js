import React, { useMemo, useState } from "react";

function CountMemo() {
    
  const [countOne, setCountOne]  = useState(0)
  const [countTwo, setCountTwo] = useState(0)


  const incrementOne = () =>{
    setCountOne(countOne + 1)
  }
  const incrementTwo = () =>{
    setCountTwo(countTwo + 1)
  }

  const isEven = useMemo( () => {
    let i=0
    console.log('i')
    while(i<2000000000) i++
    
    return countOne%2 === 0

  }, [countOne])

    return (
      <div >
        <div>
            <button onClick={incrementOne}> count one: {countOne}</button>
            <span>{isEven ? 'Even':'Odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}> count two: {countTwo}</button>
        </div>
        
      </div>
    );
}

export default CountMemo;