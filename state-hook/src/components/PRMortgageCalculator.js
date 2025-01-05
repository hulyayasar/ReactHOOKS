import React, { useState }  from "react";

function PRMortgageCalculator(){

    const [loanA, setLoanA] = useState("")
    const handleLoanA = (event) => {
        setLoanA(event.target.value)
    }

    const [rate,setRate] = useState(0)
    const handleRate = (event) => {
        setRate(event.target.value)
    }

    const [loanT, setloanT] = useState(0)
    const handleLoanT = (event) => {
        setloanT(event.target.value)
    }

    const calculateMortgage = () => {
        const mortgage = (loanA * (rate *((1+rate)^loanT ))) / (((1+rate)^loanT) -1)
        return mortgage
    }

    return (
        <form>

            <div>Loan amount ($) </div>
            <input type="text" value ={loanA} onChange={handleLoanA}  />

            <div>Annual interest rate (%) </div>
            <input type="text" value ={rate} onChange={handleRate}  />

            <div>Loan term (in years) </div>
            <input type="text" value ={loanT} onChange={handleLoanT}  />


          <div>Monthly mortgage payment: {calculateMortgage()}  </div>
          <div>Total payment amount:  </div>
          <div>Total interest paid:  </div>
          
        </form>
      );
}

export default PRMortgageCalculator