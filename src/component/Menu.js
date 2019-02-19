// Created by benjamin on 19/12/2018.
// import React, { Component } from 'react';
import React from 'react';
import '../App.css';
import './Helper';

class Menu extends React.Component {

    render(){
        return (
            <header>
                <div className={"inlineblock headermenu "+this.props.changecolor("headermenu")}>
                    <div className="headerleft">
                        <div className="iconmenu inlineblock"></div>
                        <span className={"headertitle inlineblock " +this.props.changecolor("headertitle")}>Weather</span>
                    </div>
                    <span className={"todaytitle inlineblock "+this.props.changecolor("todaytitle")}>TODAY</span>
                    <div className="slidercontainer inlineblock">
                        <div className={"slider-menu inlineblock "+this.props.changecolor("slider-menu")}>Dark</div>
                        <label className="mainslider switch">
                            <input type="checkbox" onClick={()=>this.props.handleColorMode()}/>
                            <span className="slider round"></span>
                        </label>
                        <div className={"slider-menu inlineblock "+this.props.changecolor("slider-menu")}>Light</div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Menu;