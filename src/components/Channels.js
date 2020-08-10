import React, {Component} from 'react';
import '../App.css';

class Channels extends Component {
    render() {
      return (
        <div className="Channels">
            
            <h1 id ="channels">Channels</h1>
            <p id = "tunein">TUNE IN TO NAUTILUS' DEEP DIVE PORTALS</p>
            <div id ="channelitems">
                <div className ="channelitem">
                   <p className ="channel">BIOLOGY+BEYOND</p>
                   <img src={require("../images/bio_and_beyond.jpeg")} />
                   <p className ="title">Making Sense of the Genome, at Last</p>
                   <p className = "author">by Adam Piore</p> 
                </div>
                <div className ="channelitem">
                   <p className ="channel">Women in Science &amp; Engineering</p>
                   <img src={require("../images/wise_sci_and_engineering.png")} />
                   <p className ="title">Your Brain Is On the Brink of Chaos</p>
                   <p className = "author">by Kelly Clancy</p> 
                </div>
                <div className ="channelitem">
                   <p className ="channel">QUANTA ABSTRACTIONS</p>
                   <img src={require("../images/abstractions.jpeg")} />
                   <p className ="title">Mathematicians Calculate How Randomness Creeps In</p>
                   <p className = "author">by Marcus Woo</p> 
                </div> 
            </div> 
        </div>
      );
    }
  }


export default Channels;