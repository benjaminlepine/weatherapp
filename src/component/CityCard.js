import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Citycard extends React.Component {

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

    componentDidMount(){
        if (this.props.city !== undefined) {
            this.loadWeatherIcon()
        }
    }

    componentDidUpdate(){
        if (this.props.city !== undefined) {
            this.loadWeatherIcon()
        }
    }

    geturl(){
        return("/city-infos/"+this.props.city.name)
    }

    render(){
        if (this.props.city === undefined){
            return <div></div>
        }
        return (
            <div>
                <div onClick={()=> this.props.deleteCard(this.props.city.name)}>
                    <div className="delete-button" ></div>
                    <div id="delete-button2" className="delete-button"></div>
                </div>
                {/*<button className="delete-button" onClick={()=> this.props.deleteCard(this.props.index)}>delete</button>*/}
                <Link to={this.geturl()}>
               <div className={"card inlineblock "+this.props.changecolor("card")}>
                    <div className="block">
                        <div className={"city "+this.props.changecolor("city")}><span>{this.props.city.name}</span></div>
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
            </div>
        );
    }
}

export default Citycard;