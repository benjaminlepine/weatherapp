// Created by benjamin on 19/12/2018.
import React, { Component } from 'react';
import '../App.css';

class Menu extends React.Component {

    render(){
        return (
            <header>
                <div className="inlineblock headermenu">
                    <div className="headerleft">
                        <div className="iconmenu inlineblock"></div>
                        <span className="headertitle inlineblock">Minimis</span>
                    </div>
                    <span className="todaytitle inlineblock">TODAY</span>
                    <div className="slidercontainer inlineblock">
                        <div className="sliderlight inlineblock">Light</div>
                        <label className="mainslider switch">
                            <input type="checkbox"></input>
                            <span className="slider round"></span>
                        </label>
                        <div className="sliderdark inlineblock">Dark</div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Menu;