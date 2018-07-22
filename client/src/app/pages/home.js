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

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
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
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      var name = document.getElementById("Contact_Name").value;
      var email = document.getElementById("Contact_Email").value;
      var message = document.getElementById("Contact_Message").value;

      if (name !== "") {
        console.log(name);
      }

      if (email !== "") {
        console.log(email);
      }

      if (message !== "") {
        console.log(message);
      }
      this.sendEmail(name, email, message);
      // window.open(`mailto:atlfoodtruckfinder@gmail.com?subject=From:${name}_@${email}&body=${message}`);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Jumbotron2.default,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Welcome: ',
            this.props.name
          ),
          _react2.default.createElement(
            'p',
            null,
            'Go to ',
            _react2.default.createElement(
              'a',
              { href: '/' + this.props.link },
              this.props.link
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Go ',
            _react2.default.createElement(
              'a',
              { href: '/' },
              'Home'
            )
          ),
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(
              'label',
              { id: 'formHead' },
              'Enter your Information:'
            ),
            _react2.default.createElement(_Form.Input, { id: 'Contact_Name', name: 'name', placeholder: 'Enter Your Name' }),
            _react2.default.createElement(_Form.Input, { id: 'Contact_Email', name: 'email', placeholder: 'Enter Your Email' }),
            _react2.default.createElement(_Form.TextArea, { id: 'Contact_Message', name: 'message', placeholder: 'Enter Your Message' }),
            _react2.default.createElement(
              _Form.FormBtn,
              { className: 'btn btn-primary', onClick: this.handleFormSubmit },
              'Send us an Email!'
            )
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

exports.default = HomePage;