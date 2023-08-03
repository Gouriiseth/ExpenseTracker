const Balance = ({balTransactions}) => {


  const calBal=()=>{
    const totExpense = balTransactions.filter((transaction) => transaction.amtType === 'expense')
    .reduce((total,transaction)=>total+transaction.amount,0);
    const totIncome = balTransactions.filter((transaction) => transaction.amtType === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0);

  return totIncome-totExpense;
     
  }

  const bal=calBal();
  return (  
    <div className="flex flex-row w-fit px-4 my-4 ">
      <div className="text-3xl ">Balance</div>
      <pre className="text-3xl">${bal}</pre>
    </div>
  )
}

export default Balance