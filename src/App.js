import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Spotlight from './components/Spotlight';
import Catalysts from './components/Catalysts';
import Channels from './components/Channels';
import Popular from './components/Popular';
import Facts from './components/Facts';
import Footer from './components/Footer';

class App extends Component {
    render() {
      return (
        <div className="App"> 
            <Header />
            <Navigation />
            <Spotlight />
            <Catalysts />
            <Channels />
            <Popular />
            <Facts />
            <Footer />

        </div>
      );
    }
  }


export default App;
