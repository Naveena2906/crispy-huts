import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className="navi row ">
      <div>
        <Link to="/">
          <p className='morn'><i style={{fontSize:'2em',color:'white'}} class="fa-solid fa-utensils"></i> Crispy Huts- Have it your way</p>
        </Link>

      </div>
      <div className='navi '>
      </div>
      <div className='home1'>
        <Link to="/Home"><i class="fa-solid fa-house"></i>Home</Link>
        <Link to="/cart">
         <p className='morn'><i  class="fa-solid fa-cart-shopping"></i>Cart{' '}</p> 
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </Link>{' '}
        
      </div>
    </div>
  );
}
