/**
 * Created by benjamin on 06/11/2018.
 */
//import React, { Component } from 'react';
import React from 'react';
import '../App.css';

class Citycard extends React.Component {

    weatherIcon(){
        let weather = this.props.city.main.toLowerCase();
        if(this.props.darkmode === true){
            return("mainimage "+ weather);
        }
        else{
            weather = weather.concat("-white");
            return("mainimage "+ weather);
        }
    }

    // weatherIcon2() {
    //     let iconUrl;
    //     if (this.props.darkmode === true) {
    //         iconUrl = "../assets/weather/white/" + this.props.city.main.toLowerCase() + ".svg";
    //     }
    //     else {
    //         iconUrl = "../assets/weather/violet/" + this.props.city.main.toLowerCase() + ".svg";
    //     }
    //     console.log("iconUrl = ", iconUrl);
    //     return (iconUrl)
    //     // return ({
    //     //     backgroundimage: 'url('+iconUrl+')'
    //     // });
    // }
    // weatherIcon3() {
    //     if (this.props.darkmode === true) {
    //         return "../assets/weather/white/" + this.props.city.main.toLowerCase() + ".svg";
    //     }
    //     else {
    //         return "../assets/weather/violet/" + this.props.city.main.toLowerCase() + ".svg";
    //     }
    // }



    render(){
        // let path = this.weatherIcon3();
        // let path2 = "../assets/weather/violet/clouds.svg"
        // let path2 = `${process.env.REACT_APP_ASSETS}/weather/violet/clouds.svg`
        // console.log("path2 = ",path2);
        // let url = require("../assets/weather/violet/clouds.svg");
        // let url = require("../assets/weather/violet/clear.svg");
        // let url = require(this.weatherIcon2());
        // console.log("process.env = ",process.env)
        return (

            <div className={"card inlineblock "+this.props.changecolor("card")}>
                <div className="block">
                    <div className={"city "+this.props.changecolor("city")}><span>{this.props.city.name}</span></div>
                    <div className={this.weatherIcon()}></div>
                    {/*<div className="mainimage" style={{backgroundImage: `url(${url})`}} />*/}
                    {/*<div className="mainimage"  style={{backgroundimage: `url(${this.weatherIcon2()})`}}></div>*/}

                    <div className={"degree "+this.props.changecolor("degree")}><span>{this.props.city.temp}°</span></div>
                    <div className={"weather "+this.props.changecolor("weather")}><span>{this.props.city.main}</span></div>
                </div>
                <div className="temperaturemain">
                    <div className="inlineblock">
                        <div className="temp-icon cold"/>
                        <div className={"temperature "+this.props.changecolor("temperature")}><span>{Math.round(this.props.city.temp_min)}</span></div>
                        <div className="coldtext"><span>Min</span></div>
                    </div>
                    <div className="inlineblockright">
                        <div className="temp-icon hot"/>
                        <div className={"temperature "+this.props.changecolor("temperature")}><span>{Math.round(this.props.city.temp_max)}</span></div>
                        <div className="hottext"><span>max</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Citycard;