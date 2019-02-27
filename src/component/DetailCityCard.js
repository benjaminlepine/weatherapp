import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DetailCityCard extends React.Component {

    render(){
        console.log("DETAIL CITY this.props.darkmode = ",this.props.darkmode)
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
