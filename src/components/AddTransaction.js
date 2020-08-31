import React,{ useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
   const [text,setText]=useState('')
   const [amount,setAmount]=useState(0)
   const { addTransaction } =useContext(GlobalContext)

   const onSubmit=(e)=>{
    e.preventDefault();
    const transaction={
      id:Math.floor(Math.random()*1000000),
      text,
      amount
    }
    addTransaction(transaction)
   }

  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}> 
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  id="text" value={text} onChange={(e)=>setText(String(e.target.value.split('')[0].toUpperCase()+e.target.value.slice(1).toLowerCase()))} placeholder="Enter text..."/>
          </div>
        <div className="form-control">
          <label htmlFor="amount">Amount<br/>
          (negative-expenses, postive-income)
          </label>
          <input type="number" id="amount" onChange={(e)=>setAmount(Number(e.target.value))} value={amount} placeholder="Enter amount..."/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
