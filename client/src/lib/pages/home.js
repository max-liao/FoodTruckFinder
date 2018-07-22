import React, { Component, PropTypes } from 'react';
import Jumbotron from '../components/Jumbotron'
import { Input, TextArea, FormBtn } from '../components/Form'

export default class HomePage extends Component {

  handleFormSubmit(event){
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    var name = document.getElementById("Contact_Name").value;
    var email = document.getElementById("Contact_Email").value;
    var message = document.getElementById("Contact_Message").value;

    if (name !== ""){
      console.log(name);
    }

    if (email !== ""){
      console.log(email);
    }
    
    if (message !== ""){
      console.log(message);
    }
    window.open(`mailto:atlfoodtruckfinder@gmail.com?subject=From:${name}_@${email}&body=${message}`);
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome: {this.props.name}</h1>
          <p>Go to <a href={'/' + this.props.link}>{this.props.link}</a></p>
          <p>Go <a href='/'>Home</a></p>
          <form>
            <label id="formHead">Enter your Information:</label>
            <Input id = "Contact_Name" name="name" placeholder="Enter Your Name" />
            <Input id = "Contact_Email" name="email" placeholder="Enter Your Email" />
            <TextArea id = "Contact_Message" name="message" placeholder="Enter Your Message" />
            <FormBtn className="btn btn-primary" onClick={this.handleFormSubmit}>Send us an Email!</FormBtn>
          </form>
        </ Jumbotron>
      </div>
    );
  }
}