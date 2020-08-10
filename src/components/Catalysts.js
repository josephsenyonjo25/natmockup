import React, {Component} from 'react';
import '../App.css';


class Catalysts extends Component {
    render() {
      return (
        <div className="Catalysts">
            <div id ="chapters">
               <div>
                   <p id="issue">ISSUE 079</p>
                   <h2>CATALYSTS</h2>
                   <p id ="theory">"What generates a new theory in science! .."</p>
                </div>
                <div id = "chapter1" className="chapter">
                    <p>CHAPTER ONE</p>
                    <p>Art</p>   
                </div>
                <div className="chapter">
                    <p>CHAPTER TWO</p>
                    <p>Mind</p>
                    <p className="date">Coming December 12</p>   
                </div>
                <div className="chapter">
                    <p>CHAPTER THREE</p>
                    <p>Energy</p>
                    <p className="date">Coming December 19</p>
                </div>
                <div className="chapter">
                    <p>CHAPTER FOUR</p>
                    <p>Stars</p>
                    <p className="date">Coming December 26</p>   
                </div>
            </div>
            <div id= "catalysts_right">
              <div id="ai">
                  <div className="whitebox">
                      <p className="subject">ARTIFICIAL INTELLIGENCE</p>
                      <p>Best Screenplay Goes to the Algorithms</p>
                      <p className="author">By Arthur I. Miller</p>
                  </div>
              </div>
              <div id= "music_art">
              <div id="music"> 
                  <div className="whitebox">
                      <p className="subject">MUSIC</p>
                      <p>How I Taught My Computer to Write Its Own Music</p>
                      <p className="author">By John Supko</p>
                  </div>
              </div>
              <div id ="art">
                  <div className="whitebox">
                      <p className="subject">ART</p>
                      <p>Picasso's Got Nothing on AI Artists</p>
                      <p className="author">By Kevin Berger</p>
                  </div>
              </div>
              </div>      
            </div> 
        </div>
      );
    }
  }


export default Catalysts;