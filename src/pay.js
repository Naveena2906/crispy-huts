import React from 'react'
import logo from './images/pay.png'

export const Pay = () => {
  return (
    <div >
      <div className='options'>
        
        <img src={logo} alt='' style={{marginTop:'120px'}}></img>
        <h2>Payment Successful</h2>
      </div>
        <div className='bb'>
        {/* <h3>Thank you for ordering !</h3> */}
        <h4 style={{color:'blue'}}> Order Id : 542-672-454-327</h4>
        <h4> Pay Mode : Unified Payments-UPI </h4>
        <h4>Bank Ref # : 234457683033 </h4>
        </div>
    </div>
    )
}