import React, { Component } from 'react';
import './css/style.css';
import Jumbotron from "./Components/Jumbotron";
// import { Col, Row, Container } from "./Components/Grid";

class App extends Component {

  state = {
    truckInfo: [],
    twitterInfo: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.loadTruckInfo();
  }

  loadTruckInfo = () => {
        // API.getSavedArticles()
    //   .then(res =>
    //     this.setState({ savedArticles: res.data})
    //   )
    //   .catch(err => console.log(err));
  };

  render(){
    return(
    <div>
      <section id="about" className="section">
          <div className="container">
            <h4>Who We Are</h4>
            <div className="row">
              <div className="span4 offset1">
                <div>
                  <h2>Eat <strong>Food</strong></h2>
                  <p>
                    Want food from your favorite mobile dining establishment? Always know where it is with Food Truck Finder!
                    Updates from all your favorites mapped <strong>live</strong>!
                  </p>
                </div>
              </div>
              <div className="span6">
                <div className="aligncenter">
                  <img src={require("./css/img/icons/creativity.png")} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="span2 offset1 flyIn">
              </div>
              <div className="span2 flyIn">
                <div className="people">
                  <img className="team-thumb img-circle" src={require("./css/img/team/img-1.jpg")} alt="" />
                  <h3>Max Liao</h3>
                  <p>
                    Creator
                  </p>
                </div>
              </div>
              <div className="span2 flyIn">
                <div className="people">
                  <img className="team-thumb img-circle" src={require("./css/img/team/img-2.jpg")} alt="" />
                  <h3>Thomas Brown</h3>
                  <p>
                    Web developer
                  </p>
                </div>
              </div>
              <div className="span2 flyIn">
                <div className="people">
                  <img className="team-thumb img-circle" src={require("./css/img/team/img-3.jpg")} alt="" />
                  <h3>Carrie Kordys</h3>
                  <p>
                    Web designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Jumbotron>
          <div id="Mapjumbo">
            <h1 style={{ color: "ghostwhite" }}> <strong> Map </strong></h1>
            <hr />
            {/* <!-- <h1 class="text-center">Food Truck Info!</h1> --> */}
            <div className="row">
              <div className="col-lg-4">
                <p id="truck-name"></p>
                <p id="descr"></p>
                <p id="contact"></p>
              </div>
              <div className="col-lg-8">
                <ul id="menulist"></ul>
              </div>
            </div>
          </div>
        </Jumbotron>
      <link rel="shortcut icon" href={require("./css/img/food-truck.png")} />
      {/* <script type="text/javascript" src={require("./js/jquery.js")}></script> */}
      {/* <script type="text/javascript" src={require("./js/map.js")}></script> */}
      {/* <script type="text/javascript" src={require("./js/jquery.scrollTo.js")}></script> */}
      {/* <script type="text/javascript" src={require("./js/jquery.localScroll.js")}></script> */}
      {/* <script type="text/javascript" src={require("./js/bootstrap.js")}></script> */}
      {/* <script type="text/javascript" src={require("./js/jquery.prettyPhoto.js")}></script> */}
      {/* <script type="text/javascript" src={require("./js/isotope.js")}></script> */}
      {/* <script type="text/javascript" src={require("./js/jquery.flexslider.js")}></script> */}
      {/* <script type="text/javascript" src={require("./js/inview.js")}></script> */}
      {/* <script type="text/javascript" src={require("./js/animate.js")}></script> */}
      {/* <script type="text/javascript" src={require("./contactform/contactform.js")}></script> */} */}
    </div>
    )}


    
  // render() {
  //   return (
  //     <div className="App">
  //       
  //       <div className="navbar-wrapper">
  //         <div className="navbar navbar-inverse navbar-fixed-top">
  //           <div className="navbar-inner">
  //             <div className="container">
  //               {/* <!-- Responsive navbar --> */}
  //               <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
  //               </a>
  //               <h1 className="brand"><a href="index.html">Food Truck Finder</a></h1>
  //               {/* <!-- navigation --> */}
  //               <nav className="pull-right nav-collapse collapse">
  //                 <ul id="menu-main" className="nav">
  //                   <li><a title="team" href="#about">About</a></li>
  //                   <li><a title="search" href="#search">Search</a></li>
  //                   <li><a title="map" href="#mapContainer">Map</a></li>
  //                   <li><a title="map" href="#Twitter">Twitter</a></li>
  //                   <li><a title="map" href="#form">Form</a></li>
  //                   <li><a title="oldmap" href="map.html">Old Map</a></li>
  //                 </ul>
  //               </nav>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div id="header-wrapper" className="header-slider">
  //         <header className="clearfix">
  //           <div className="logo">
  //             <img src={require('./css/img/blueTruck.png')} alt="" />
  //           </div>
  //           <div className="container">
  //             <div className="row">
  //               <div className="span12">
  //                 <div id="main-flexslider" className="flexslider">
  //                   <ul className="slides">
  //                     <li>
  //                       <p className="home-slide-content">
  //                         <strong>Eat</strong> what you want
	// 								      </p>
  //                     </li>
  //                     {/* <!-- <li>
  //                       <p class="home-slide-content">
  //                         <italic> Casual dining </italic>
  //                       </p>
  //                     </li> --> */}
  //                     <li>
  //                       <p className="home-slide-content">
  //                         Food from a <strong>Truck</strong>
  //                       </p>
  //                     </li>
  //                   </ul>
  //                 </div>
  //                 {/* <!-- end slider --> */}
  //               </div>
  //             </div>
  //           </div>
  //         </header>
  //       </div>

  //       <section className="spacer green">
  //         <div className="container">
  //           <div className="row">
  //             <div className="span6 alignright flyLeft">
  //               <blockquote className="large">
  //                 GET YOUR FOOD FROM A TRUCK <cite>Max</cite>
  //               </blockquote>
  //             </div>
  //             <div className="span6 aligncenter flyRight">
  //               <i className="icon-food icon-10x"></i>
  //             </div>
  //           </div>
  //         </div>
  //       </section>



  //       <footer>
  //         <div className="container">
  //           <div className="row">
  //             <div className="span6 offset3">
  //               <ul className="social-networks">
  //                 <li><a href="https://twitter.com/finder_truck"><i className="icon-circled icon-bgdark icon-instagram icon-2x"></i></a></li>
  //                 <li><a href="https://twitter.com/finder_truck"><i className="icon-circled icon-bgdark icon-twitter icon-2x"></i></a></li>
  //                 <li><a href="https://twitter.com/finder_truck"><i className="icon-circled icon-bgdark icon-dribbble icon-2x"></i></a></li>
  //                 <li><a href="https://twitter.com/finder_truck"><i className="icon-circled icon-bgdark icon-pinterest icon-2x"></i></a></li>
  //                 <li><a href="https://github.com/max-liao"><i className="icon-circled icon-bgdark icon-github icon-2x"></i></a></li>
  //               </ul>
  //               <p className="copyright">
  //                 &copy; Max Liao. All rights reserved.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </footer>
      
      // <script type="text/javascript" src={require("./js/map.js")}></script>
      // <script type="text/javascript" src={require("./js/jquery.js")}></script>
      // <script type="text/javascript" src={require("./js/jquery.scrollTo.js")}></script>
      // <script type="text/javascript" src={require("./js/jquery.localScroll.js")}></script>
      // <script type="text/javascript" src={require("./js/bootstrap.js")}></script>
      // <script type="text/javascript" src={require("./js/jquery.prettyPhoto.js")}></script>
      // <script type="text/javascript" src={require("./js/isotope.js")}></script>
      // <script type="text/javascript" src={require("./js/jquery.flexslider.js")}></script>
      // <script type="text/javascript" src={require("./js/inview.js")}></script>
      // <script type="text/javascript" src={require("./js/animate.js")}></script>
      // <script type="text/javascript" src={require("./contactform/contactform.js")}></script>
  //     </div>
  //   );
  // }
}

export default App;

