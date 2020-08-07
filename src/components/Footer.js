import React, {Component} from 'react';
import '../App.css';

class Footer extends Component {
    render() {
      return (
        <div className="Footer"> 
          <div>
            <div class ="links">
              <a href ="#">ABOUT</a>
              <a href ="#">CONTACT / WORK WITH US</a>
              <a href ="#">FAQ</a>
              <a href ="#">PRIME</a>
              <a href ="#">SUBSCRIBE</a>
            </div>
            <div class ="links">
              <a href ="#">AWARDS AND PRESS</a>
              <a href ="#">DONATE</a>
              <a href ="#">MEDIA KIT</a>
              <a href ="#">RSS</a>
              <a href ="#">TERMS OF SERVICES</a>
            </div>
            <div class ="connected">
              <p>NAUTILUS: SCIENCE CONNECTED</p>
              <p>Nautilus is a different kind of science magazine. We deliver big-picture science by reporting on a single monthly topic from multiple perspectives. Read a new chapter in the story every Thursday.</p>
            </div>
           
          </div>   

        </div>
      );
    }
  }


export default Footer;