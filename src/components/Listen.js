import React, {Component} from 'react';
import '../App.css';


class Listen extends Component {
    render() {
      return (
        <div className="Listen">
            
           <h1 id ="listen">Listen To Nautilus</h1>
           <p>NARRATED VERSIONS OF OUR STORIES</p>
           <button id ="allaudio">ALL AUDIO ARTICLES</button>
           
            <div id ="listensmall"> 
                <div>
                    <img src ={require('../images/biology_03.png')} />
                    <p className="subject">BIOLOGY</p>
                    <p className="title">Turning Back the Clock on Human Evolution</p>
                    <p className="author">By Amy Maxmen</p>
                </div>
                <div>
                    <img src ={require('../images/biology_04.jpg')} />
                    <p className="subject">BIOLOGY</p>
                    <p className="title">Yes, Your Brain Does Process Information</p>
                    <p className="author">By Brian Gallagher</p>
                </div>
                <div>
                    <img src ={require('../images/culture.png')} />
                    <p className="subject">CULTURE</p>
                    <p className="title">Why the Russians Decapitated Major Tom</p>
                    
                    <p className="author">By Roberto Kaz</p>
                </div>
                
            </div>  
        </div>
      );
    }
  }


export default Listen;