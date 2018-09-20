import React, { Component } from 'react';
import './App.css';
import Weatherapp from './component/Hello'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Weatherapp/>
            </div>
        );
    }
}

export default App;