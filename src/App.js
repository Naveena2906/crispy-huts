
import Landingpage from './Landingpage.jsx'
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Form from './form.js';
import RegisterForms from './signup.js';
import About from './about.js';
import { Home } from './payment.js';
import { Upi } from './upi.js';
import { Card } from './card.js';
import { Cash } from './cash.js';
import { Pay } from './pay.js';
import App1 from './App1.js';

import Login from './login.js';
import Refund from './refundpolicy.js';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
<Routes>
  <Route path='/' element={<Landingpage />}/>
  <Route path='/Home' element={<Landingpage />}/>
  <Route path='/Bookingform' element={<Form />}/>
  <Route path='/About' element={<About />}/>

  <Route path='/Login' element ={<Login/>}/>
  <Route path='/signup' element ={<RegisterForms/>}/>

        <Route path='/payment' element={<Home/>}/> 
          <Route path='/u' element={<Upi/>}/>
          <Route path='/c' element={<Card/>}/>
          <Route path='/d' element={<Cash/>}/>
          <Route path='/p' element={<Pay/>}/>
          <Route path='/refund-policy' element={<Refund/>}/>
          <Route path='/menu' element={<App1/>}/>


  {/* <Route path='/signup' element={<RegisterForms/>}/> */}

 


  
</Routes>
</BrowserRouter>
      
     
    </div>
  );
}

export default App;
