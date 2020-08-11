import React, {Component} from 'react';
import '../App.css';

class Channels extends Component {
    render() {
      return (
        <div className="Channels">
            
            <h1 id ="channels">Channels</h1>
            <p id = "tunein">TUNE IN TO NAUTILUS' DEEP DIVE PORTALS</p>
            <div className ="channelitems">
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
                 <div className ="channelitem">
                   <p className ="channel">EARTH</p>
                   <img src={require("../images/earth.jpeg")} />
                   <p className ="title">The Deep Time of Walden Pond</p>
                   <p className = "author">by Curt Stager</p> 
                </div>
                <div className ="channelitem">
                   <p className ="channel">THINK LIKE A SCIENTIST</p>
                   <img src={require("../images/tlas.jpeg")} />
                   <p className ="title">The Best Burger Place is a Lab</p>
                   <p className = "author">by Thomas King</p> 
                </div> 
                <div className ="channelitem">
                   <p className ="channel">cosmos</p>
                   <img src={require("../images/cosmos.jpeg")} />
                   <p className ="title">How Much Should Expectation Drive Science?</p>
                   <p className = "author">by Claudia Geib</p> 
                </div>
                <div className ="channelitem">
                   <p className ="channel">POETRY IN SCIENCE</p>
                   <img src={require("../images/poetry.jpeg")} />
                   <p className ="title">On Observation and Imagination</p>
                   <p className = "author">by Gillian Osborne</p> 
                </div>
                <div className ="channelitem">
                   <p className ="channel">Aging</p>
                   <img src={require("../images/aging.png")} />
                   <p className ="title">Yes, Life in the Fast Lane Kills You</p>
                   <p className = "author">by Philip Ball</p> 
                </div>
                <div className ="channelitem">
                   <p className ="channel">SCIENCE PHILANTHROPY ALLIANCE</p>
                   <img src={require("../images/alliance.png")} />
                   <p className ="title">Taking to the Stars</p>
                   <p className = "author">by Science Philanthropy Alliance</p> 
                </div>
               
                <div className ="channelitem">
                   <p className ="channel">MPNeuro</p>
                   <img src={require("../images/maxplanck.jpeg")} />
                   <p className ="title">Understanding the Brain with the Help of Artificial Intelligence</p>
                   <p className = "author">by Max Planck Institute of Neurobiology</p> 
                </div> 
                <div className="blank"></div>
                <div className="blank"></div>           
                </div>
        </div>
      );
    }
  }


export default Channels;