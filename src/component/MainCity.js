/**
 * Created by benjamin on 06/11/2018.
 */

import React from 'react';
import '../App.css';
import Citycard from './CityCard.js';
import Addcity from './Addcity.js';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class MainCity extends React.Component {

    responsive = {
        0: { items: 1 },
        1100: { items: 2 },
        1500: { items: 3 },
    };

    state={
        cities:[]
    };

    componentDidMount(){
        const keyapi = "c456c057da472e4c57fabb1aecbeb70a"; // Clef de Benjamin
        // const keyapi = "ef0eb98d901c7306544b4ebab228204a"; // Clef de Naba
        let cities = [];
        let initialCities = [
            6455259, // Paris
            3846616, // Londres
            2172797, // Cairns
            5128581]; // New York

        for(let i = 0;i<initialCities.length;i++){
            let url = "https://api.openweathermap.org/data/2.5/weather?id=" +
                initialCities[i]
                +"&units=metric"
                +"&appid="+keyapi;
            fetch(url)
                .then(res=>res.json())
                .then(result=>{
                    const city = {
                        name:result.name,
                        id:result.id,
                        main:result.weather[0].main,
                        description:result.weather[0].description,
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

    galleryItems() {
        return (
            this.state.cities.map(city =>(
                <div>
                    <Citycard city={city}
                              darkmode={this.props.darkmode}
                              handleColorMode={this.props.handleColorMode}
                              changecolor={this.props.changecolor}
                              key={city.id} />
                </div>
            ))
        )

    };

    handleColorMode=()=>{
        const mode = !this.state.darkmode;
        this.setState({darkmode: mode});
    };



    render(){
        let items = this.galleryItems();
        console.log("MAIN CITY this.props.darkmode = ",this.props.darkmode)
        return (
            <div>
                <Addcity darkmode={this.props.darkmode}
                         changecolor={this.props.changecolor}/>
                <div className="margin-left50">
                    <AliceCarousel
                        items={items}
                        duration={400}
                        responsive={this.responsive}
                        startIndex = {1}
                        dotsDisabled = {true}
                        mouseDragEnabled={true}
                    />
                </div>
            </div>
        );
    }
}

export default MainCity;