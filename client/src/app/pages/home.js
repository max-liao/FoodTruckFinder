'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Jumbotron = require('../components/Jumbotron');

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Form = require('../components/Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mandrill = require('node-mandrill')('n3E5yMhIVHv6avpIIU0FFA');

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.state = {
      isToggleOn: true,
      isEnabled: false,
      name: ["test"]
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(HomePage, [{
    key: 'handleClick',
    value: function handleClick() {
      console.log("HelloW");
      this.setState(function (prevState) {
        return {
          isToggleOn: !prevState.isToggleOn
        };
      });
    }
  }, {
    key: 'sendEmail',
    value: function sendEmail(_name, _email, _message) {
      mandrill('/messages/send', {
        message: {
          to: [{ email: "atlfoodtruckfinder@gmail.com", name: _name }],
          from_email: _email,
          subject: "FoodTruckFinder Contact Us",
          text: _message
        }
      }, function (error, response) {
        if (error) console.log(error);else console.log(response);
      });
    }
  }, {
    key: 'handleFormSubmit',
    value: function handleFormSubmit(event) {
      event.preventDefault();
      var cname = document.getElementById("Contact_Name");
      var email = document.getElementById("Contact_Email");
      var message = document.getElementById("Contact_Message");
      var thanks = document.getElementById("Thanks");

      this.setState({ name: cname }).catch(function (err) {
        return console.log(err);
      });;
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
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { backgroundColor: '#777474' } },
        _react2.default.createElement(
          'h1',
          { className: 'brand' },
          _react2.default.createElement(
            'a',
            { href: '/', style: { color: 'whitesmoke', "textTransform": "uppercase" } },
            'Food Truck Finder'
          )
        ),
        _react2.default.createElement(
          _Jumbotron2.default,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Email Us:'
          ),
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(_Form.Input, { id: 'Contact_Name', name: 'name', placeholder: 'Enter Your Name' }),
            _react2.default.createElement(_Form.Input, { id: 'Contact_Email', name: 'email', placeholder: 'Enter Your Email' }),
            _react2.default.createElement(_Form.TextArea, { id: 'Contact_Message', name: 'message', placeholder: 'Enter Your Message' }),
            _react2.default.createElement(
              _Form.FormBtn,
              { className: 'btn btn-primary', onClick: this.handleClick },
              'Submit!'
            )
          ),
          _react2.default.createElement(
            'h1',
            { id: 'Thanks', style: { display: 'none' } },
            'Thanks ',
            this.state.name,
            '!'
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

exports.default = HomePage;