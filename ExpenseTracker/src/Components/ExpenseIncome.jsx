  import { useState } from "react";

  const ExpenseIncome = ({allTransactions}) => {

    const [expense, setExpense] = useState([])
    const [income, setIncome] = useState([])

    const handleExpense=()=>{
      const expensee=allTransactions.filter((transaction)=>transaction.amtType==='expense');
      
      setExpense(expensee)
      // console.log(expense);
    }
    const handleIncome=()=>{
      const incomee=allTransactions.filter((transaction)=>transaction.amtType==='income');
      setIncome(incomee)
    }

    return (
      <>
        <div className="flex flex-row max-w-md justify-between">
          <button className="text-2xl px-6 mx-2 rounded bg-red-500" onClick={handleExpense}>Expense</button>
          <button className="text-2xl px-6 mx-2 rounded bg-green-500" onClick={handleIncome}>Income</button>
      </div>


          <div>
            {expense.map((elem) => (
              
        // eslint-disable-next-line react/jsx-key
        <div className="flex flex-row justify-between bg-green-200 py-2 px-6 rounded  ">
          <p className="text-1xl ">{elem.amount}</p>
          < p className="text-1xl">{elem.amtType}</p>
      </div>
 ))}
          </div>

        <div>
          {income.map((elem) => (

            // eslint-disable-next-line react/jsx-key
            <div className="flex flex-row justify-between bg-green-200 py-2 px-6 rounded  ">
              <p className="text-1xl ">{elem.amount}</p>
              < p className="text-1xl">{elem.amtType}</p>
            </div>
          ))}
        </div>
        
      </>
    )
  }

  export default ExpenseIncome