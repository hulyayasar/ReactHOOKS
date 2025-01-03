import React from "react";

function Tittle() {
    
   console.log('Rendering Tittle')
    return (
      <div >
        <h2>
            usecallback Hook
        </h2>
      </div>
    );
}

export default React.memo(Tittle);