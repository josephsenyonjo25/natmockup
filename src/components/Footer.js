import React, {Component} from 'react';
import '../App.css';

class Footer extends Component {
    render() {
      return (
        <div className="Footer"> 
          <div id ="top">
            <div className ="links">
              <a href ="#">ABOUT</a>
              <a href ="#">CONTACT / WORK WITH US</a>
              <a href ="#">FAQ</a>
              <a href ="#">PRIME</a>
              <a href ="#">SUBSCRIBE</a>
            </div>
            <div className ="links">
              <a href ="#">AWARDS AND PRESS</a>
              <a href ="#">DONATE</a>
              <a href ="#">MEDIA KIT</a>
              <a href ="#">RSS</a>
              <a href ="#">TERMS OF SERVICES</a>
            </div>
            <div className ="connected">
              <p>NAUTILUS: SCIENCE CONNECTED</p>
              <p>Nautilus is a different kind of science magazine. We deliver big-picture science by reporting on a single monthly topic from multiple perspectives. Read a new chapter in the story every Thursday.</p>
            </div>
           
          </div>   

          <div id = "bottom">
            <p>&copy; 2020 NautilusThink Inc. All rights reserved.
              <span className ="code">Matter, Biology, Numbers, Ideas, Culture, <span className = "italic">Connected</span></span>
              </p>

            <p><span>Site by <span className ="code">CODE AND THEORY</span></span>
            </p>
          </div>
        </div>
      );
    }
  }


export default Footer;