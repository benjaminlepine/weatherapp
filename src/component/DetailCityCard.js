import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import fetchAPI from "../utils/fetchAPI.js";

class DetailCityCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detailledCityInfos: {}
            // testalacon:{
            //     pomme:"bonjour",
            //     poire:"aurevoir"
            // }
        };
    }

    componentWillMount(){

        // fetchAPI.FetchDetailledWeatherByCityName(this.state.detailledCityInfos)

    }


    componentDidMount(){
        const keyapi = "c456c057da472e4c57fabb1aecbeb70a";
        let city = window.location.pathname.split("/")[2];
        let url = "https://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&units=metric"
            + "&appid=" + keyapi;


        // console.log("RESULT detailled city = ",detailledWeather)
        fetch(url)
            .then(res => res.json())
            .then(result => {
                    let Days = [];
                    let j = 0;
                    for (let i = 0; i < 5; i++) {
                        let day = new Object();
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



        // fetchAPI.FetchDetailledWeatherByCityName(this.state.detailledCityInfos)


        // let tab_jour = new Array["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        // let result = {
        //     Humidity:"",
        //     Wind:"",
        //     Country:"",
        //     CityName:"",
        //
        //     Weather:"",
        //     Temperature:""};

        // let trueDetailledCityInfos = Object.assign({}, this.state.detailledCityInfos);
        // console.log("RESULT detailled city 3 = ",result)
        // console.log("RESULT detailled city = ",detailledCityInfos)
        this.loadBackgroundIcon()


        // console.log("this.state = ",this.state.detailledCityInfos)
        // console.log("trueDetailledCityInfos = ",this.state.detailledCityInfos)


    }


    loadBackgroundIcon(){
        // let weather = this.props.city.main.toLowerCase();
        let weatherIcon = new Image();
        let weatherIconElem = this.refs.weatherIconElem;
        // if(this.props.darkmode === true){
        //     weatherIcon.src = '../assets/weather/violet/'+weather+'.svg';
        // }
        // else{
        //     weatherIcon.src = '../assets/weather/white/'+weather+'.svg';
        // }
        // weatherIconElem.style.backgroundImage = "url("+weatherIcon.src+")";

    }

    componentDidUpdate(){
        this.loadBackgroundIcon()
    }

    isEmpty(val){
        if(this.state.detailledCityInfos.Days){
            return this.state.detailledCityInfos.Days[1].Day
        }
    }

    render(){
        return (
            <div>
                <Link to="/">
                    <button>RETOUR</button>
                </Link>
                <div>
                    <div className={"detail-city-card "+this.props.changecolor("detail-city-card")}>
                        <div className="background-city">
                            {console.log("this.state.detailledCityInfos = ",this.state.detailledCityInfos)}
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
                        {/*Component enfant dans un for 5 jours)*/}
                        <div>
                            <div className="inline">
                                <div>4 éléments</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailCityCard;
