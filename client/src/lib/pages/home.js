import React, { Component, PropTypes } from 'react';
import Jumbotron from '../components/Jumbotron'
import { Input, TextArea, FormBtn } from '../components/Form'
var mandrill = require('node-mandrill')('n3E5yMhIVHv6avpIIU0FFA');

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      isEnabled: false,
      name: ["test"]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("HelloW");
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  sendEmail(_name, _email, _message) {
    mandrill('/messages/send', {
      message: {
        to: [{ email: "atlfoodtruckfinder@gmail.com", name: _name }],
        from_email: _email,
        subject: "FoodTruckFinder Contact Us",
        text: _message
      }
    }, function (error, response) {
      if (error) console.log(error);
      else console.log(response);
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    var cname = document.getElementById("Contact_Name");
    var email = document.getElementById("Contact_Email");
    var message = document.getElementById("Contact_Message");
    var thanks = document.getElementById("Thanks");

    this.setState({ name: cname }).catch(err => console.log(err));;
    thanks.style.display = 'block';

    if (cname !== "") {
      console.log(name);
    }

    if (email !== "") {
      console.log(email);
    }

    if (message !== "") {
      console.log(message);
    }
    
    // this.state.name = cname;
    // this.sendEmail(cname, email, message);
    console.log("Email sent");
    // window.open(`mailto:atlfoodtruckfinder@gmail.com?subject=From:${name}_@${email}&body=${message}`);
  };


  render() {
    return (
      <div style = {{backgroundColor: '#777474'}}>
        <h1 className="brand">
            <a href="/" style = {{color: 'whitesmoke', "textTransform": "uppercase"}}>Food Truck Finder</a>
        </h1>
        <Jumbotron>
          <h1>Email Us:</h1>
          {/* <p>Go to <a href={'/' + this.props.link}>{this.props.link}</a></p> */}
          <form>
            {/* <label id="formHead">Enter your Information:</label> */}
            <Input id="Contact_Name" name="name" placeholder="Enter Your Name" />
            <Input id="Contact_Email" name="email" placeholder="Enter Your Email" />
            <TextArea id="Contact_Message" name="message" placeholder="Enter Your Message" />
            <FormBtn className="btn btn-primary" onClick={this.handleClick}>Submit!</FormBtn>
          </form>
          <h1 id="Thanks" style = {{display: 'none'}}>Thanks {this.state.name}!</h1>
        </ Jumbotron>
      </div>
    );
  }
}


export default HomePage;
