import React, {Component} from 'react';
import '../App.css';
import {img} from '../images/logo.jpg';

class Navigation extends Component {
    render() {
      return (
        <div className="Navigation"> 
           <img src ={require("../images/logo.jpg")} alt="Nautilus Logo" />
            <a href="#">ISSUES</a>
            <a href="#">TOPICS</a>
            <a href="#">BLOG</a>
            <a href="#">NEWSLETTER</a>
            <a href ="#"><i class="fa fa-facebook-f"></i></a>
            <a href ="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="#">LOGIN</a>
            <button id ="subscribe">SUBSCRIBE</button>
        </div>
      );
    }
  }


export default Navigation;