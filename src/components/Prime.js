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
                <img src ={require('../images/hp_prime.jpg')} /> 
                <div>
                    <p>Like Nautilus? Get Nautilus Prime.</p>
                    <p>Unlimited online reading Read it all, whenever, wherever, and however you like.</p>
                    <p>Ad Free Get a pristine, ad-free reading experience.</p>
                    <p>Tablet editions All the content and design of our award-winning print magazine, in PDF format --perfect for reading on your tablet or desktop.</p>
                    <p>eBook editions We've made each monthly online issue into an eBook, compatible with most e-readers.</p>
                    <p> Event Access Prime members get priority access to Nautilus events.</p>
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