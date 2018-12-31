import React, { Component } from 'react';
import Citycard from './citycard.js';
import Menu from './Menu.js';
import '../App.css';

class Weatherapp extends React.Component {

    state={
        darkmode:true
    };

    handleColorMode=()=>{
        if(this.state.darkmode){
            this.setState({darkmode:false});
        }else{
            this.setState({darkmode:true});
        }
    }

    render() {
        return (
            <div className="Weatherapp">
                <Menu   darkmode={this.state.darkmode}
                        onColorMode={this.handleColorMode()}/>
                <Citycard city={'PARIS'}/>
                <Citycard city={'PARIS'}/>
                <Citycard city={'PARIS'}/>
            </div>
        );
    }
}

export default Weatherapp;

