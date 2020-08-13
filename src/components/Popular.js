import React, {Component} from 'react';
import '../App.css';


class Popular extends Component {
    render() {
      return (
        <div className="Popular">
            
           <h1 id ="popular">Popular On Nautilus</h1>
           <button id ="mostread">Most Read</button>
           <button id ="mostshared">Most Shared</button>
           <div id ="popularlarge">
               <div id ="article1">
                 <div className="popularimage">
                 <img src ={require('../images/popular_01.png')} />
                 </div>

                <div>
                 <p className="title">1 Does Theranos Mark the Peak of the Silicon Valley Bubble?</p>
                 <p className="description">John Carreyrou talks to Nautilus about the lessons of a $1 billion fraud.</p>
                 <p>BY MICHAEL SEGAL</p>    
                </div> 
                </div>
                <div id="article2">
                <div className="popularimage">
                 <img src ={require('../images/popular_02.png')} />
                 </div>
                <div>
                 <p className="title">2 The Smaller the Theater, the Faster the Music</p>
                 <p className="description">Composer Philip Glass talks time with painter Fredericka Foster.</p>
                 <p>BY PHILIP GLASS &amp; FREDERICKA FOSTER</p>    
                </div> 
                </div>  
            </div>
            <div id ="popularsmall"> 
                <div>
                    <p className="title">3 What Time Feels Like When You're Improvising</p>
                    <p className="description">The neurology of flow states.</p>
                    <p>BY HEATHER BERLIN</p>
                </div>
                <div>
                    <p className="title">4 A New View of Time</p>
                    <p className="description">Introducing the Nautilus Time Project.</p>
                    <p>BY BETH JACOBS &amp; LEE SMOLIN</p>
                </div>
                <div>
                    <p className="title">5 She'll Text Me, She'll Text Me Not</p>
                    <p className="description">The science of waiting in modern courtship.</p>
                    <p>BY AZIZ ANSARI &amp; ERIC KLINENBERG</p>
                </div>
                <div>
                    <p className="title">6 When Bad Things Happen in Slow Motion</p>
                    <p className="description">Is there more to our experience of time than the foibles of memory?</p>
                    <p>BY IVAN AMATO</p>
                </div>
            </div>  
        </div>
      );
    }
  }


export default Popular;