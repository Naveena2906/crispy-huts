import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
class RegisterForms extends React.Component {
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
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          console.log(this.state);
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }
      
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
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{5,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "Password should contain 8 letters";
        }
      }
      this.setState({
        errors: errors
      });
      return formIsValid;
    }
  render() {
    return (
    <div className='naveena'>
    <div className='pos1'>
     <div id="registers">
        <h4>SIGN UP</h4>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Name</label>&nbsp;
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsgs">{this.state.errors.username}</div><br></br>
        <label>Email ID</label>&nbsp;
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsgs">{this.state.errors.emailid}</div><br></br>
        <label>Password</label>&nbsp;
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsgs">{this.state.errors.password}</div><br></br>
        <label>Phone number</label>&nbsp;
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsgs">{this.state.errors.mobileno}</div><br></br>
    <Link to='/menu'>  <input type="submit" className="buttons"  value="Register"/></Link>
        <h2>Or connect with</h2>
         <Button className='icon'startIcon={<FacebookIcon />}  variant="text"></Button>
        <Button className='icon'startIcon={<GoogleIcon />}  variant="text"></Button> 
        <Button className='icon' startIcon={<TwitterIcon />}  variant="text"></Button>  
        <h2 className='name'></h2>
        </form>
    </div>
</div>
</div>

      );
  }
}

export default RegisterForms;