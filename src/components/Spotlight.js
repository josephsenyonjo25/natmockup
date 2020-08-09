import React, {Component} from 'react';
import '../App.css';


class Spotlight extends Component {
    render() {
      return (
        <div className="Spotlight">
           <p id ="spotlight">THE NAUTILUS SPOTLIGHT</p>
           <h1 id ="laws">WHY THE LAWS OF PHYSICS ARE INEVITABLE</h1>
           <button id ="readnow">READ NOW</button>
        </div>
      );
    }
  }


export default Spotlight;