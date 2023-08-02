 const TransactionHistory = (transactions) => {
  return (
    <div className=" w-2/5 overflow-y-auto h-40  ">
      {/* <div className="flex bg-green-300 rounded p-3 mb-3 ">
        <p className="text-1xl w-3/4">{transactions.amount}</p> */}

      {transactions.map((elem) => (
        // eslint-disable-next-line react/jsx-key
        <div className="flex bg-green-200 rounded p-3 mb-3 ">
          <p className="text-1xl w-3/4">{elem.amount}</p>
          console.log(elem);
        {/* <p>{amtType}</p> */}
      </div>
 ))}
     </div>
  )
}

export default TransactionHistory