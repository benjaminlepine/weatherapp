import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Citycard extends React.Component {

    // weatherIcon(){
    //     let weather = this.props.city.main.toLowerCase();
    //     if(this.props.darkmode === true){
    //         return("mainimage "+ weather);
    //     }
    //     else{
    //         weather = weather.concat("-white");
    //         return("mainimage "+ weather);
    //     }
    // }

    loadWeatherIcon(){
        let weather = this.props.city.main.toLowerCase();
        let weatherIcon = new Image();
        let weatherIconElem = this.refs.weatherIconElem;
        if(this.props.darkmode === true){
            weatherIcon.src = '../assets/weather/violet/'+weather+'.svg';
        }
        else{
            weatherIcon.src = '../assets/weather/white/'+weather+'.svg';
        }
        weatherIconElem.style.backgroundImage = "url("+weatherIcon.src+")";
    }

    componentDidUpdate(){
        this.loadWeatherIcon()
    }

    render(){
        return (
        <Link to="/city-infos">
            <div className={"card inlineblock "+this.props.changecolor("card")}>
                <div className="block">
                    <div className={"city "+this.props.changecolor("city")}><span>{this.props.city.name}</span></div>
                    {/*<div className={this.weatherIcon()}></div>*/}
                    <div className="mainimage" ref="weatherIconElem"></div>
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
        </Link>
        );
    }
}

export default Citycard;