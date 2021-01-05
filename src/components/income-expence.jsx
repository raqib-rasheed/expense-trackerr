import PropTypes from 'prop-types';


export default function IncomeExpence({inputs,setBalance}){
  const income = inputs.reduce((acc,crr)=>{
    if(crr.amount && crr.amount>0){
      acc += parseInt(crr.amount);
    }return acc
  },0)
  const expence = inputs.reduce((acc,crr)=>{
    if(crr.amount && crr.amount<0){
      acc += parseInt(crr.amount);
    }return acc
  },0)
  if(income || expence){
   const balance = income + expence
    setBalance(balance)
  }
  return (
    <div className="d-flex justify-content-center mt-3">
    <div className="text-success p-4 bg-success "><span className="text-light">income: {income}</span></div>
    <div className="text-danger p-4 bg-danger "><span className="text-light">expence: {Math.abs(expence)}</span></div>
    </div>
  )
}
IncomeExpence.propTypes={
  inputs:PropTypes.array.isRequired,
  setBalance:PropTypes.func.isRequired
}