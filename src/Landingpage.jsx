import React from "react";
import './Landingpage1.css'
// import  Button  from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.css';
// import { Button } from "bootstrap";
import { Link } from 'react-router-dom'


import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpeg'
import image9 from './images/image9.jpg'
import video2 from  './videos/video2.mp4'
// import { hover } from "@testing-library/user-event/dist/hover";
function Landingpage()
{
    return(
    <>     

    
{/*    
            <div className="landing">
            <header>
            <Link style={{fontSize:'1.7em'}} className='logo'><i style={{fontSize:'1em'}} class="fa-solid fa-utensils"></i> Crispy Huts- Have it your way</Link>
            <nav>
            <Link to='/menu' className='logo'><i class="fa-solid fa-bars"></i> Menu</Link>
            <Link  to='/About'className='logo'>About Us</Link> 
            <Link  to=''className='logo'><i class="fa-solid fa-location-dot"></i> Locations</Link>
            <Link to='/Login' style={{borderRadius:'100px',fontSize:'20px',padding:'6px 5px',marginBottom:'2px'}}className="login" href="">Login</Link>
            <Link to='/signup' className="signup">SignUp</Link>
            </nav>
            </header>
        </div>  */}
        <div className="fulltext">
            <div className="landing">
                
            <div className="navigation">
  <input type="checkbox" id="navigation-check"/>
  <div className="navigation-header">
    <div className="navigation-title">
    <Link style={{fontSize:'1.2em'}} className='logo'><i style={{fontSize:'1em'}} class="fa-solid fa-utensils"></i> Crispy Huts- Have it your way</Link>
      
    </div>
  </div>
  <div className="navigation-btn">
    <label for="navigation-check">
     <span></span>
     <span></span>
     <span></span>
    </label>
  </div>
  
  <div className="navigation-links">
  <Link to='/menu' className="logo">Menu</Link>
                        <Link className="logo" to='/About' >About Us</Link> 
                    <Link className="logo" to=''><i class="fa-solid fa-location-dot"></i> Locations</Link>
            
                    <Link className='logo'to='/Login'>Login</Link>
                    <Link to='/signup' className="logo">SignUp</Link>
 
  </div>
</div>
</div>

        <div className="background">
                <h1>
                    <span className="word">WELCOME BACK!</span>
                    <div className="message">
                        <div className="word1">Hungry?</div>
                        <div className="word2">Late Night?</div>
                        <div className="word3">Unexpected guests?</div>

                    </div>
                </h1>
        
                <div className="maintext">
                    <div className="tagline1">
                           <h1 className="t1"> Order food from our restaurant Soon.</h1>
                        </div>
                        <div className="tagline2">
                       <h1 className="t2"> Love well. Sleep well. Dine well.</h1>
                        </div>
                        <div style={{fontFamily:'serif',fontSize:'20px'}}className="callus">
                          <h1 className="t3"> Call us @+91 9843678219</h1> 
                        </div>
                       <button className='button1'style={{fontFamily:'Aerial'}} type="submit">Order Now</button>
                    </div>
                    </div>   
                </div>  

                

                   <div className="container2">
                    <div className="text">
                    KINDNESS IS A GIFT EVERYONE CAN AFFORD TO GIVE.
                  <div className="text1">
                  OUR DISHES
                 
                  </div>
                  <div className="List">
                    <ul>
                        <li className="list1">All</li>
                        <li>Awesome</li>
                        <li>Responsive</li>
                        <li>Created</li>
                        <li>Animated</li>
                    </ul>
                    </div>
                    <div className="imagediv">
                        
                        <div className="food-img">
                    <img className='img4' src={image4} alt="Food" />   <h1>Juice</h1>       
                      </div>
                     
                      <div className="food-img">

                    <img className='img5' src={image5} alt="Food" />  <h1>Cake</h1>
                    </div>

                    <div className="food-img">

                    <img className='img6' src={image6} alt="Food" /> <h1>Idly</h1>
                    </div> 

                    <div className="food-img">

                    <img className='img7' src={image7} alt="Food" />   <h1>Sweet</h1>
                     </div>
                    <div className="food-img">

                    <img className='img8' src={image8} alt="Food" />  <h1>Shake</h1>
                    </div>
                    </div>      
                              </div>
             
                    </div>  






            <div className="container3">
                <div className="contentbox">
                    <video className='v1'src={video2} width="100%" height="" controls autoPlay='autoplay' loop muted>
                    </video>
                </div>
                <div className="overlay">
                    <div className="vt">
                        <h2 className="vt1">The  Crispy Huts experience</h2>
                        <p className="vt2">Second only to the incredible food is our atmosphere at Crispy Huts. Located in TamilNadu, GA’s historic Castleberry Hill, 
                            this multi-level dining and entertainment complex, complete with two full bars and outdoor patio has a style that’s all its own.</p>
                        <button className="button20">GO INSIDE</button>
                    </div>
                </div>
            </div>  
         
              


         <div className="container4">
            <div className="bookcontainer">
                <div className="textbox3">
                <h1 className="">Events</h1>
               <p>Celebrate at one of India's most awarded restaurants, with panoramic views. From intimate dinner parties in the Private Dining Room, to long lunches in the spectacular Upper Tower, to large cocktail events in The Green Room – 
                Quay delivers an immersive dining experience with views like no other.</p> 
               </div>
              <Link className="button30" to='/Bookingform'>Book Table</Link>
            </div>



            <img  className='image9' src={image9} alt='diningtable'/>   
         </div>
  





<div id='map' className="container5">
   
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504194.66554959514!2d76.21455144999999!3d9.152591500000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0613990c0bfaf7%3A0x574093ab520cc73f!2sCrispy%20hut!5e0!3m2!1sen!2sin!4v1670524673427!5m2!1sen!2sin" width='100%' height='250'></iframe>


</div>

 <div>      
   <footer className="footer">
    <h4>Questions? Call 0421-8758-4945</h4>
    <div className="footer-cols">
        <ul>
    <h2>CRISPY HUTS</h2>
            <h2>About Crispy Huts</h2>
            <li><Link>Who we are</Link></li>
            <li><Link>Blog</Link></li>
            <li><Link>Work with Us</Link></li>
            <li><Link>Investor Relations</Link></li>
            <li><Link>Report Fraud</Link></li>
        </ul>
        <ul>
            <h2>Opening hours</h2>
            <li ><Link><b>Monday :</b></Link> 9:00 A.M - 10:00 P.M</li>
            <li><Link><b>Tuesday :</b></Link> 9:00 A.M - 10:00 P.M</li>
            <li><Link><b>Wednesday :</b></Link> 9:00 A.M - 10:00 P.M</li>
            <li><Link><b>Thursday :</b></Link> 9:00 A.M - 10:00 P.M</li>
            <li><Link><b>Friday :</b></Link> 9:00 A.M - 10:00 P.M</li>
            <li><Link><b>Saturday :</b></Link> 8:00 A.M - 11:00 P.M</li>
            <li><Link><b>Sunday :</b></Link> 8:00 A.M - 11:00 P.M</li>
           
        </ul>
        <ul>
            <h2>We deliver to</h2>
            <li><Link>Kuniyamuthur</Link></li>
            <li><Link>Kovaipudur</Link></li>
            <li><Link>Gandhipuram</Link></li>
            <li><Link>Ukkadam</Link></li>
            <li><Link>Somanur</Link></li>
            <li><Link>Sulthanpettai</Link></li>
            <li><Link>Rayapuram</Link></li>
        </ul>
        <ul>

            <h2>Social Links</h2>
            <li><Link>Media Centre</Link></li>
            <li><Link>Terms of Use</Link></li>
            <li><Link>Contact Us</Link></li>
            <li><Link></Link></li>
            <h3>We are available at</h3>
            <Link className='fontbird'  style={{fontSize:'2em'}}><i class="fa-brands fa-twitter"></i> </Link>
            <Link    className='fontbird' style={{fontSize:'2em'}}><i class="fa-brands fa-facebook"></i> </Link>
            <Link  className='fontbird'  style={{fontSize:'2em'}}><i class="fa-brands fa-instagram"></i> </Link>
            <Link  className='fontbird'style={{fontSize:'2em'}}><i class="fa-brands fa-whatsapp"></i> </Link>
            
        </ul>
    </div>
</footer>
               </div>
             
   
  

</>

    );
}


export  default Landingpage;