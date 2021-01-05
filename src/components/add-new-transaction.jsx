import React  from "react";


export default function AddNewTransaction({setValue,value}){
  const [amount,setAmount] = React.useState('')
  const [text,setText] = React.useState("")
  
  function handleSubmit(event){
    event.preventDefault()
    const inputs = {text,amount}
    setValue([...value, inputs])
    setAmount("")
    setText('')
  }
  return(
    <div>
    <div className="container d-flex justify-content-center">
      <h5 className="mb-1">Add New Transaction</h5>
    </div>
      <hr />
      <form 
      onSubmit={handleSubmit}
      className="d-flex-column">
        <label htmlFor="text">Text</label>
        <input 
        className="form-control"
        type="text"
        id="text"
        onChange={event=>setText(event.target.value)}
        value={text} 
        placeholder="Enter Expence(+) / Income(-)"
         />
        <div className="container d-flex justify-content-center my-2">
        <h6>Amount</h6>
        </div>
        
        <input 
        className="form-control"
        type="number" 
        onChange={event=>setAmount(event.target.value)}
        value={amount}
        placeholder="Enter amount here" />
        <div className="container d-flex justify-content-center">
        <button type="submit" className="btn btn-outline-primary mt-2 px-3">Add</button>
        </div>
      </form>
    </div>
  )
}