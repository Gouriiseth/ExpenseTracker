import AddTransaction from "./Components/AddTransaction"
import Balance from "./Components/Balance"
import ExpenseIncome from "./Components/ExpenseIncome"
import TransactionHistory from "./Components/TransactionHistory"
import ExpenseTracker from "./Components/expenseTracker"
import { useState } from "react"

function App() {
  // const handleAddTransaction

  return (
    <div className="flex flex-col items-center h-screen bg-gray-200">
    <ExpenseTracker />
    <Balance />
    <ExpenseIncome />
    <AddTransaction />
    <TransactionHistory />
    </div>
  )
}

export default App
