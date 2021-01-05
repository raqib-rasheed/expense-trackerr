import './App.css';
import React from 'react'
import AddNewTransaction from "./components/add-new-transaction"
import Balance from "./components/balance"
import History from "./components/history"
import IncomeExpence from "./components/income-expence"

export const stateContext = React.createContext()
export function App() {

  const [userInput,setUserInput] = React.useState([])
  const [balance,setBalance] = React.useState(0)
  

  return (
    <div className="card m-4 border border-3" id="card">
      <div className="card-body">
        <h3 className="card-title text-center">Expense Tracker</h3>
        <p className="card-text text-dark border d-inline border-dark p-1">YOUR BALANCE <Balance balance={balance} /></p>
        
        <IncomeExpence inputs={userInput} setBalance={setBalance}/>
        <History values={userInput} />
      </div>
    <div className="card-body">
      <AddNewTransaction setValue={setUserInput} value={userInput} />
    </div>
    </div>
  )
}

