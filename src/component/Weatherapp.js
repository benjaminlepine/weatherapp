// import React, { Component } from 'react';
import React from 'react';
import Citycard from './citycard.js';
import Addcity from './Addcity.js';
import Carousseltest from './Carousseltest.js';
import Menu from './Menu.js';
import '../App.css';
// import "react-alice-carousel/lib/alice-carousel.css" from ;
/**
 * Created by benjamin on 19/02/2019.
 */

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


class Weatherapp extends React.Component {

    responsive = {
        0: { items: 1 },
        1100: { items: 2 },
        1500: { items: 3 },
    };

    state={
        darkmode:false,
        cities:[]
    };

    componentDidMount(){
        const keyapi = "c456c057da472e4c57fabb1aecbeb70a";
        let cities = [];
        let initialCities = [
            // 9999999, // ADD CITY
            6455259, // Paris
            3846616, // Londres
            2172797, // Cairns
            5128581]; // New York

        for(let i = 0;i<4;i++){
            // console.log("initialCities = ",initialCities[i])
            let url = "https://api.openweathermap.org/data/2.5/weather?id=" +
                initialCities[i]
                +"&units=metric"
                +"&appid="+keyapi;
            fetch(url)
                .then(res=>res.json())
                .then(result=>{
                    // console.log(result);
                    const city = {
                        name:result.name,
                        id:result.id,
                        main:result.weather[0].main,
                        temp:result.main.temp,
                        temp_min:result.main.temp_min,
                        temp_max:result.main.temp_max,
                        icon:result.weather[0].icon
                    };
                    cities.push(city);
                    this.setState({cities});
                })
        }
    }

    handleColorMode=()=>{
        const mode = !this.state.darkmode;
        this.setState({darkmode: mode});
    };

    changecolor(basicdesign){
        if(this.darkmode){
            //console.log(basicdesign+"-white")
            return(basicdesign+"-white")

        }
    };

    galleryItems() {
        if(this.state.cities.length === 0){
            console.log("this.state.cities = ",this.state.cities);
            return (
                this.state.cities.map(city =>(
                    <Addcity changecolor={this.props.changecolor}/>
                ))
            )
        }
        else{
            return (
                this.state.cities.map(city =>(
                    <Citycard city={city}
                              darkmode={this.props.darkmode}
                              handleColorMode={this.props.handleColorMode}
                              changecolor={this.props.changecolor}
                              key={city.id} />
                ))
            )
        }
    };

    render() {
        let items = this.galleryItems();
        return (
            <div className={"weatherapp "+this.props.changecolor("weatherapp")}>
                <Menu   darkmode={this.props.darkmode}
                        handleColorMode={this.props.handleColorMode}
                        changecolor={this.props.changecolor}/>

                <Addcity changecolor={this.props.changecolor}/>

                <div className="margin-left50">
                    <AliceCarousel
                        items={items}
                        duration={400}
                        responsive={this.responsive}
                        startIndex = {1}
                        dotsDisabled = {true}
                        // buttonsDisabled={true}
                    />
                </div>

                <button onClick={() => this.Carousel._slidePrev()}>PREV</button>
                <button onClick={() => this.Carousel._slideNext()}>NEXT</button>
            </div>
        );
    }
}

export default Weatherapp;

