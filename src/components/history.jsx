import React from 'react'
import PropTypes from 'prop-types'; 

export default function History({ values }){
  return (
    <>
    <div className="container d-flex justify-content-center">
    <h3 className='mt-3 text-grey bg-light border p-2 rounded-2'>History</h3>
    </div>
    <ul className="list-group list-group-flush"> 
    {values.map((item)=>(<li className="list-group-item">{item.text}    {item.amount}</li>))}
    </ul>
  </>
  )
}

History.propTypes = {
  values:PropTypes.array.isRequired
}
