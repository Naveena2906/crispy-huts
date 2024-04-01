import React from 'react'
import { Link } from 'react-router-dom'

export const Upi = () => {
  return (
    <div className='lingesh'>
    <div className='pot'>

    <div className='container10'>
        {/* <div className='inside'> */}
      <form>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <label style={{fontSize:'20px'}}><b>UPI ID : </b></label>&nbsp;
        <input type="text" placeholder='Enter your upi id' />
        <select style={{width:'100px',height:'50px',marginLeft:'3em',border:'3px solid black'}}>
          <br/>
          <option value="A" style={{fontSize:'15px'}}>@okhdfc</option>
          <option value="B" style={{fontSize:'15px'}}>@okicici</option>
          <option value="C" style={{fontSize:'15px'}}>@oksbi</option>
          <option value="C" style={{fontSize:'15px'}}>@okkvb</option>
        </select>
        <br />
        <br />
        <button className='b'><Link to='/p' style={{textDecoration:'none',color:'white'}}>Pay Now</Link></button>
       
        
      </form>
        {/* </div> */}
    
    </div>
   </div>
   </div>
  )
}