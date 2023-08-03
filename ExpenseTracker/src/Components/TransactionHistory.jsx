 const TransactionHistory = ({transactions}) => {
  return (
    <div className=" w-2/5 overflow-y-auto h-40  ">
      {/* <div className="flex bg-green-300 rounded p-3 mb-3 ">
        <p className="text-1xl w-3/4">{transactions.amount}</p> */}

      {transactions.map((elem) => (
        // eslint-disable-next-line react/jsx-key
        <div className="flex flex-row justify-between bg-green-200 py-2 px-6 rounded  ">
          <p className="text-1xl ">{elem.amtType}</p>
          < p className="text-1xl">{elem.amount}</p>
      </div>
 ))}
     </div>
  )
}

export default TransactionHistory