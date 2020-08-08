import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Spotlight from './components/Spotlight';
import Footer from './components/Footer';

class App extends Component {
    render() {
      return (
        <div className="App"> 
            <Header />
            <Navigation />
            <Spotlight />
            <Footer />

        </div>
      );
    }
  }


export default App;
