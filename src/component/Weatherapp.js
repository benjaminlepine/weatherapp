import React, { Component } from 'react';
import Citycard from './citycard.js';
import Menu from './Menu.js';
import '../App.css';

class Weatherapp extends React.Component {
    render() {
        return (
            <div className="Weatherapp">
                <Menu/>
                <Citycard city={'PARIS'}/>
                <Citycard city={'PARIS'}/>
                <Citycard city={'PARIS'}/>
            </div>
        );
    }
}

export default Weatherapp;

