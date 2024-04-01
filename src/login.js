import React from 'react';
import './login.css';
import pic1 from './images/fb.png' ;
import { Link } from 'react-router-dom';
import pic2 from './images/twitter.png';
import pic3 from './images/insta2.png';
// import pic4 from './images/img1.jpg';
class Login extends React.Component {
  
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    

    }

    submituserRegistrationForm(e) {
      console.log(this.validateForm());
      
      e.preventDefault();
      if (this.validateForm()) {
          console.log(this.state);
          let fields = {};
          fields["mobileno"] = "";
          fields["OTP"] = "";
          this.setState({fields:fields});
          console.log(this.state);
          alert("Welcome Back");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter OTP";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^[0-9]{4}$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter correct OTP";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
      <>
      <div className='logincontainerbox'>
      {/* <img src={pic4} className="image10" alt=""></img> */}
      <div id="register">
       <div id="main-registration-container">
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
       <center><h2>Login</h2></center>
        <label>Mobile No:</label> 
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}  placeholder='Enter Mobile Number' />
        <button className='button1'>Send OTP</button>
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>OTP:</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} placeholder='Enter OTP' />
        <div className="errorMsg">{this.state.errors.password}</div>
      <Link to='/Home'> <input type="submit" className="button10"  value="Submit"></input></Link> 
        </form>
        <div className='loginlogo'>
      <h3>Or login using :</h3>
  <Link to="/https://www.facebook.com/login">
</Link>
      <Link className='New'><img src={pic1} alt=""></img>
      </Link>
      <Link to="https://twitter.com/i/flow/login">
</Link>
      <Link className='New'><img src={pic2} alt=""></img>
      <Link to={{pathname:"https://www.instagram.com/"}} target ="blank">
</Link>
      </Link>
      <Link className='New'><img src={pic3} alt=""></img>
      </Link>
    </div>
    </div>
</div>
</div>
</>

      );
  }


}
export default Login;