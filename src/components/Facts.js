import React, {Component} from 'react';
import '../App.css';


class Facts extends Component {
    render() {
      return (
        <div className="Facts">
            
           <h1 id ="facts">Facts So Romantic</h1>
           <p>SCIENCE HAS A POWERFUL VOICE IN TODAY'S CULTURE. SO WHAT IS IT SAYING?</p>
           <button id ="seeall">SEE ALL BLOG POSTS</button>
           
            <div id ="factssmall"> 
                <div>
                    <img src ={require('../images/ideas.jpg')} />
                    <p className="subject">IDEAS</p>
                    <p className="title">Why the Laws of Physics Are Inevitable</p>
                    <p className="description">Represented with permission from Quanta Magazine's Abstractions blog. Compared to the unsolved mysteries of the universe, far less gets said about one of the most profound facts to have...</p>
                    <p className="readmore">READ MORE</p>
                </div>
                <div>
                    <img src ={require('../images/biology.jpg')} />
                    <p className="subject">BIOLOGY</p>
                    <p className="title">Do Butterflies Challenge the Meaning of Species?</p>
                    <p className="description">What is a species? It is a question that has agonized scientists since well before Darwin. With some exceptions, the thinking has landed on an evidently firm reproductive barrier: Members...</p>
                    <p className="readmore">READ MORE</p>
                </div>
                <div>
                    <img src ={require('../images/matter.jpg')} />
                    <p className="subject">MATTER</p>
                    <p className="title">Hologram Within a Hologram Hints at Fate of Black Holes</p>
                    <p className="description">Reprinted with permission from Quanta Magazine's Abstractions blog. Like cosmic hard drives, black holes pack troves of data into compact spaces. But ever since Stephen Hawking calculated...</p>
                    <p className="readmore">READ MORE</p>
                </div>
                <div>
                    <img src ={require('../images/biology_02.jpg')} />
                    <p className="subject">BIOLOGY</p>
                    <p className="title"> Where to See the Real Living Dead</p>
                    <p className="description">Talk of "Mother Trees," from a scientist studying plant life, can sound fanciful, like something out of a fairy tale. Suzanne Simard is here to tell you that it's not. For the past...</p>
                    <p className="readmore">READ MORE</p>
                </div>
            </div>  
        </div>
      );
    }
  }


export default Facts;