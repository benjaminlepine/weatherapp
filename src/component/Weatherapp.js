import React from 'react';
import Menu from './Menu.js';
import '../App.css';
import "react-alice-carousel/lib/alice-carousel.css";
import MainCity from "./MainCity.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailCityCard from "./DetailCityCard.js";


class Weatherapp extends React.Component {

    state={
        darkmode:false,
    };

    changecolor(basicdesign){
        if(this.darkmode){
            return(basicdesign+"-white");
        }
    };

    render() {
        return (
            <div className={"weatherapp "+this.props.changecolor("weatherapp")}>
                <Menu   darkmode={this.props.darkmode}
                        handleColorMode={this.props.handleColorMode}
                        changecolor={this.props.changecolor}/>
                <Router>
                    <div>
                        <Route
                            exact path='/'
                            render={() => <MainCity darkmode={this.props.darkmode}
                                                    changecolor={this.changecolor}/>}
                        />
                        <Route
                            path='/city-infos'
                            render={() => <DetailCityCard darkmode={this.props.darkmode}
                                                          changecolor={this.changecolor}/>}
                        />
                    </div>
                </Router>
                {/*<MainCity darkmode={this.props.darkmode}/>*/}
                {/*<WeatherRouter></WeatherRouter>*/}
            </div>
        );
    }
}

export default Weatherapp;

