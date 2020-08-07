import React, {Component} from 'react';
import '../App.css';


class Header extends Component {
    render() {
      return (
        <div className="Header">
            <div id ="header"> 
           <p>ISSUE 079</p>
           <h1 id ="catalysts">Catalysts</h1>
           <p id = "agents">Agents of Change</p>
           <p><a href ="#">READ MORE</a></p>
           <button id ="fullissue">SEE FULL ISSUE</button>
           </div>
           <div id = "scroll">
               <p>SCROLL DOWN</p>
            </div> 
        </div>
      );
    }
  }


export default Header;