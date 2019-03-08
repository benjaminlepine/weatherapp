// Created by benjamin on 19/12/2018.
// import React, { Component } from 'react';
import React from 'react';
import '../App.css';
import './Helper';

class Menu extends React.Component {

    newDate(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = mm + '/' + dd + '/' + yyyy;
        return(today)

    }

    render(){
        return (
            <header>
                <div className={"inlineblock headermenu "+this.props.changecolor("headermenu")}>
                    <div className="headerleft">
                        <div className="iconmenu inlineblock"></div>
                        <span className={"headertitle inlineblock " +this.props.changecolor("headertitle")}>Weather</span>
                    </div>
                    <span className={"todaytitle inlineblock "+this.props.changecolor("todaytitle")}>{this.newDate()}</span>
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