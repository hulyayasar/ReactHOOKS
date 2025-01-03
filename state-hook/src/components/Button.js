import React from "react";

//<Button handleClick={incrementAge}> Increment age</Button>
//children refers to the Button Text 
//handleClikc refers to the prop function 

function Button({handleClick, children}) {
    
   console.log(`Rendering button - ${children}`)
    return (
      <button onClick = {handleClick}>
        {children}
      </button>
    );
}

export default React.memo(Button);