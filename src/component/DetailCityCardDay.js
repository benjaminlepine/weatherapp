import React from 'react';
import '../App.css';

class DetailCityCardDay extends React.Component {

    loadWeatherIcon(){
        let weather = this.props.days[this.props.item].Weather.toLowerCase();
        let weatherIcon = new Image();
        let weatherIconElem = this.refs.weatherIconElem;
        weatherIcon.src = '../assets/weather/violet/'+weather+'.svg';
        weatherIconElem.style.backgroundImage = "url("+weatherIcon.src+")";
    }

    componentDidMount(){
        this.loadWeatherIcon()
    }

    componentDidUpdate(){
        this.loadWeatherIcon()
    }

    getDay(day){
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d = new Date(day);
        let dayName = days[d.getDay()];
        return (dayName);
    }

    render(){
        return (
            <div className="card-weather-detail">
                <h3 className="text-weather-detail-title">{this.getDay(this.props.days[this.props.item].Day)}</h3>
                <div className="icon-weather-detail" ref="weatherIconElem"></div>
                <h3 className="text-weather-detail">{this.props.days[this.props.item].Weather}</h3>
                <h3 className="text-weather-detail">{Math.round(this.props.days[this.props.item].Temp)}°</h3>
            </div>
        );
    }
}

export default DetailCityCardDay;