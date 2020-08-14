import React, {Component} from 'react';
import '../App.css';


class Prime extends Component {
    render() {
      return (
        <div className="Prime">
            
           <h1 id ="prime">Nautilus Prime</h1>
           <p>GET THE FULL NAUTILUS EXPERIENCE</p>
           <button id ="members">MEMBERS SIGN IN</button>
           
            <div id ="primecontent">
                <div id ="primeimage">
                <img src ={require('../images/hp_prime.jpg')} />
                </div> 
                <div id="primetext">
                    <p>Like Nautilus? Get Nautilus Prime.</p>
                    <p><span className="bold">Unlimited online reading</span> Read it all, whenever, wherever, and however you like.</p>
                    <p><span className="bold">Ad Free</span> Get a pristine, ad-free reading experience.</p>
                    <p><span className="bold underline">Tablet editions</span> All the content and design of our award-winning print magazine, in PDF format --perfect for reading on your tablet or desktop.</p>
                    <p><span className ="bold underline">eBook editions</span> We've made each monthly online issue into an eBook, compatible with most e-readers.</p>
                    <p><span className ="bold">Event Access</span> Prime members get priority access to Nautilus events.</p>
                    <button id ="learnmore">LEARN MORE</button>
                    <button id ="joinprime">JOIN PRIME</button>
                    <p>Current print subscriber?<br />You're already a Prime member.</p>
                </div>
                
            </div>  
        </div>
      );
    }
  }


export default Prime;