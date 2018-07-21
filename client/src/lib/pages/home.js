import React, { Component, PropTypes } from 'react';
import Jumbotron from '../components/Jumbotron'
import { Input, TextArea, FormBtn } from '../components/Form'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome: {this.props.name}</h1>
          <p>Go to <a href={'/' + this.props.link}>{this.props.link}</a></p>
          <p>Go <a href='/'>Home</a> {this.props.name}</p>
          <form style="width:100%">
            <label id="formHead">Enter your Information:</label>
            <Input id = "Contact_Name" name="name" placeholder="Enter Your Name" />
            <Input id = "Contact_Email" name="email" placeholder="Enter Your Email" />
            <TextArea id = "Contact_Message" name="name" placeholder="Enter Your Message" />
          </form>
        </ Jumbotron>
      </div>
    );
  }
}