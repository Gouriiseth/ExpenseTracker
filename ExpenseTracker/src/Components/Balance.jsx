const Balance = ({balTransactions,selectedType}) => {


  const calBal=()=>{

      let totincome;
    if(selectedType==='expense')
    {
       totincome = balTransactions.filter((transaction) => transaction.amtType === 'income')
      .reduce((total, transaction) => total + parseInt(transaction.amount), 0);
    }

    let totexpense;
    if(selectedType==='income')
    {
     totexpense = balTransactions.filter((transaction) => transaction.amtType === 'expense')
      .reduce((total,transaction)=>total+parseInt(transaction.amount),0);
    }
  //   const totExpense = balTransactions.filter((transaction) => transaction.amtType === 'expense')
  //   .reduce((total,transaction)=>total+transaction.amount,0);
  //   const totIncome = balTransactions.filter((transaction) => transaction.amtType === 'income')
  //   .reduce((total, transaction) => total + transaction.amount, 0);

  // return totIncome-totExpense;
  return totincome-totexpense;
     
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