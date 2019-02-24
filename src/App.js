import React, { Component } from 'react';
import './App.css';
import Weatherapp from './component/Weatherapp'

class App extends Component {

    state={
        darkmode:false
    };

    handleColorMode=()=>{
        const mode = !this.state.darkmode;
        this.setState({darkmode: mode});
    };

    changecolor(basicdesign){
        if(this.darkmode){
            // console.log(basicdesign+"-white")
            return(basicdesign+"-white")
        }
    };

    render() {
        return (
            <div className="App">
                <Weatherapp
                    darkmode={this.state.darkmode}
                    handleColorMode={this.handleColorMode}
                    changecolor={this.changecolor}/>
            </div>
        );
    }
}

export default App;