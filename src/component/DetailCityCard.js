import React from 'react';
import '../App.css';
import { BrowserRouter as Link } from "react-router-dom";
import fetchAPI from "../utils/fetchAPI.js";
import DetailCityCardDay from './DetailCityCardDay.js'

class DetailCityCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detailledCityInfos: {}
        };
    }

    componentDidMount(){
        const keyapi = fetchAPI.GetAPIKey()
        let city = window.location.pathname.split("/")[2];
        let url = "https://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&units=metric"
            + "&appid=" + keyapi;

        fetch(url)
            .then(res => res.json())
            .then(result => {
                    let Days = [];
                    let j = 0;
                    for (let i = 0; i < 5; i++) {
                        let day = {};
                        day.Day = result.list[j].dt_txt;
                        day.Weather = result.list[j].weather[0].main;
                        day.Temp = result.list[j].main.temp;
                        Days.push(day)
                        j = j + 8
                    }
                    this.setState({
                        detailledCityInfos: {
                            Temperature: result.list[0].main.temp,
                            Weather: result.list[0].weather[0].main,
                            Humidity: result.list[0].main.humidity,
                            Wind: result.list[0].wind.speed,
                            Country: result.city.country,
                            CityName: result.city.name,
                            Days: Days
                        }
                    })
                }
            )
        this.loadBackgroundIcon()
    }

    loadBackgroundIcon(){
        let country = this.state.detailledCityInfos.Country;
        let weatherIcon = new Image();
        let detailCityCard = this.refs.detailCityCard;
        weatherIcon.src = '../assets/country/'+country+'.png';
        detailCityCard.style.backgroundImage = "url("+weatherIcon.src+")";
    }

    componentDidUpdate(){
        this.loadBackgroundIcon()
    }

    displayDetailledDays() {
        let array1 = [0, 1, 2, 3, 4];
        if(this.state.detailledCityInfos.Days) {
            return (
                <div>{array1.map(x =>
                    <DetailCityCardDay
                        days={this.state.detailledCityInfos.Days}
                        item={x}
                        key={array1.id}
                    />)}
                </div>
            )
        }
    }


    render(){
        return (
            <div>
                <Link to="/">
                    <div>
                        <div className="backbutton"></div>
                        <div id="backbutton2" className="backbutton"></div>
                    </div>
                </Link>
                <div>
                    <div className={"detail-city-card "+this.props.changecolor("detail-city-card")}>
                        <div className="background-city" ref="detailCityCard">
                            <div className="grid-container2">
                                <div className="item6 no-bottom-margin"><span className="temperature-detail">{Math.round(this.state.detailledCityInfos.Temperature)}°</span></div>
                                <div className="item7 no-margin"><span className="weather-detail">{this.state.detailledCityInfos.Weather}</span></div>
                                <div className="item8 no-bottom-margin"><span className="weather-small-detail">Humidity</span></div>
                                <div className="item9 no-top-margin"><span className="weather-small-detail">{this.state.detailledCityInfos.Humidity}%</span></div>
                                <div className="item10 no-bottom-margin"><span className="weather-small-detail">Wind</span></div>
                                <div className="item11 no-top-margin"><span className="weather-small-detail">{Math.round(this.state.detailledCityInfos.Wind)}km/h</span></div>
                                <div className="item12"> </div>
                                <div className="item13"> </div>
                                <div className="item14"><h1 className="no-margin">{this.state.detailledCityInfos.CityName}</h1></div>
                                <div className="item15"> </div>
                            </div>
                        </div>
                        {this.displayDetailledDays()}
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailCityCard;
