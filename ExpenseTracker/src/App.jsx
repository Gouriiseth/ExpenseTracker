import AddTransaction from "./Components/AddTransaction"
// import Balance from "./Components/Balance"
// import ExpenseIncome from "./Components/ExpenseIncome"
// import TransactionHistory from "./Components/TransactionHistory"
import ExpenseTracker from "./Components/expenseTracker"
// import Button from '@mui/material/Button';
function App() {

  return (
    <>
      {/* <Button variant="contained">Hello World</Button> */}
    <div className="flex flex-col items-center h-screen bg-gray-200">
    <ExpenseTracker />
    {/* <Balance />/ */}
    {/* <ExpenseIncome /> */}
    <AddTransaction
    />
    {/* <TransactionHistory /> */}
    </div>
    </>
  )
}

export default App
