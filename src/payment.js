import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/gpay.png'
import logo1 from './images/paytm.png'
import logo2 from './images/p.png'
import logo3 from './images/mcard.png'
import logo4 from './images/rcard.png'
import logo5 from './images/cash.png'
export const Home = () => {
  return (
    <>
      <h3 className='para'>How would you like to pay !.</h3>
      <div className='options'>
          <div className='Button'>
            <button><Link to='/u'><h4>Google Pay</h4><img src={logo} alt=''/></Link></button>
            <button><Link to='/u'><h4>Paytm</h4><img src={logo1} alt=''/></Link></button>
            <button><Link to='/u'><h4>Phonepe</h4><img src={logo2} alt=''/></Link></button>
          </div>
          <div className='Button'>
            <button><Link to='/c'><h4>Master Card</h4><img  src={logo3} alt=''/></Link></button>
            <button><Link to='/c'><h4>Rupay Card</h4><img src={logo4} alt=''/></Link></button>
            <button><Link to='/d'><h4>Cash</h4><img src={logo5} alt=''/></Link></button>
          </div>
      </div>
   </>
   )
}