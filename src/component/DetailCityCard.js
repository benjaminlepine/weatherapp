import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import fetchAPI from "../utils/fetchAPI.js";

class DetailCityCard extends React.Component {


    componentDidMount(){
        // let tab_jour = new Array["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        // let result = {
        //     Humidity:"",
        //     Wind:"",
        //     Country:"",
        //     CityName:"",
        //
        //     Weather:"",
        //     Temperature:""};

        let detailledCityInfos = {}


        // console.log("RESULT detailled city = ",result)
        fetchAPI.FetchDetailledWeatherByCityName(detailledCityInfos)
        // console.log("RESULT detailled city 3 = ",result)
        console.log("RESULT detailled city = ",detailledCityInfos)

    }


    render(){
        return (
            <div className={"detail-city-card "+this.props.changecolor("detail-city-card")}>
                <div className="block">
                    <h1>DetailCityCard</h1>
                    <Link to="/">
                        <button>RETOUR</button>
                        <button onClick={this.blabla}>dfdf</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default DetailCityCard;
