import React, { Component } from 'react';
import Citycard from './citycard.js';
import Menu from './Menu.js';
import '../App.css';

class Weatherapp extends React.Component {

    state={
        darkmode:false
    };


    handleColorMode=()=>{
        const mode = !this.state.darkmode;
        this.setState({darkmode: mode});
    };

    changecolor(basicdesign){
        if(this.darkmode){
            console.log(basicdesign+"-white")

            return(basicdesign+"-white")

        }
    };

    render() {
        return (
            <div className={"weatherapp "+this.props.changecolor("weatherapp")}>
                <Menu   darkmode={this.props.darkmode}
                        handleColorMode={this.props.handleColorMode}
                        changecolor={this.props.changecolor}/>
                <Citycard city={'PARIS'}
                          darkmode={this.props.darkmode}
                          handleColorMode={this.props.handleColorMode}
                          changecolor={this.props.changecolor}/>
                <Citycard city={'PARIS'}
                          darkmode={this.props.darkmode}
                          handleColorMode={this.props.handleColorMode}
                          changecolor={this.props.changecolor}/>
                <Citycard city={'PARIS'}
                          darkmode={this.props.darkmode}
                          handleColorMode={this.props.handleColorMode}
                          changecolor={this.props.changecolor}/>
            </div>
        );
    }
}

export default Weatherapp;

