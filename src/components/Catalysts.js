import React, {Component} from 'react';
import '../App.css';


class Catalysts extends Component {
    render() {
      return (
        <div className="Catalysts">
            <div id ="chapters">
               <div>
                   <p>ISSUE 079</p>
                   <h2>CATALYSTS</h2>
                   <p>"What generates a new theory in science! .."</p>
                </div>
                <div>
                    <p>CHAPTER ONE</p>
                    <p>Art</p>   
                </div>
                <div>
                    <p>CHAPTER TWO</p>
                    <p>Mind</p>
                    <p>Coming December 13</p>   
                </div>
                <div>
                    <p>CHAPTER THREE</p>
                    <p>Energy</p>
                    <p>Coming December 19</p>
                </div>
                <div>
                    <p>CHAPTER FOUR</p>
                    <p>Stars</p>
                    <p>Coming December 26</p>   
                </div>
            </div>
            <div id= "catalysts_right">
              <div>
                  <div className="whitebox">
                      <p>ARTIFICIAL INTELLIGENCE</p>
                      <p>Best Screenplay Goes to the Algorithms</p>
                      <p>By Arthur I. Miller</p>
                  </div>
              </div>
              <div>
                  <div className="whitebox">
                      <p>MUSIC</p>
                      <p>How I Taught My Computer to Write Its Own Music</p>
                      <p>By John Supko</p>
                  </div>
              </div>
              <div>
                  <div className="whitebox">
                      <p>ART</p>
                      <p>Picasso's Got Nothing on AI Artists</p>
                      <p>By Kevin Berger</p>
                  </div>
              </div>      
            </div> 
        </div>
      );
    }
  }


export default Catalysts;