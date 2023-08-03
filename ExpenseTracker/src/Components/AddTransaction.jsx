import { useState } from "react"
import TransactionHistory from "./TransactionHistory"
import ExpenseIncome from "./ExpenseIncome"
import Balance from "./Balance"



const AddTransaction = ( ) => {
  const [amount, setAmount] = useState("")
  const [amtType, setAmtType] = useState("")
  const [transactions, setTransactions] = useState([])
  const [selectedType, setSelectedType] = useState("")

  
  // console.log(amount);


  const handleAddTransaction=()=>{
    const newTransaction={amount,amtType};
    if(amount!=='' && amtType!=''){
    setTransactions([...transactions,newTransaction])
    console.log(transactions);
    }
    setAmount('');
    setAmtType('');  
  }

  const handleType=()=>{
    if (amount !== '' && amtType != ''){
     if(selectedType==='expense')
      setSelectedType("income")
    else 
     setSelectedType("expense")
    }
  }
  
  
  return (
    <>
    <Balance 
      balTransactions={transactions}
    />

    <ExpenseIncome 
      allTransactions={transactions}
    />
    <div className="AmtDesc flex flex-col  max-w-md px-5 py-3 mt-4 ">
        <input type="number" placeholder="Enter Amount" value={amount} className="mb-3 text-2xl px-3 rounded" onChange={(event)=>setAmount(event.target.value)} />
      <input type="text" placeholder="Expense Type" value={amtType} className="mb-3 text-2xl px-3 rounded" onChange={(e)=>setAmtType(e.target.value)} />
      <div className="p-3">
      <label className="mr-2">
        
            <input type="radio" value="expense" name="typee" checked={selectedType==='expense'} onClick={handleType}/> Expense
      </label>
      <label className="mr-2">
            <input type="radio" value="income" name="typee"  /> Income
      </label>
        
      </div>
      <button className="text-2xl font-bold bg-red-500 p-2 rounded" onClick={handleAddTransaction}>Add Transaction</button>
      </div>

      <TransactionHistory 
        transactions={transactions}
        />
    </>
  )
}

export default AddTransaction