import React from 'react';
import '../App.css';
import Citycard from './CityCard.js';
import Addcity from './Addcity.js';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import fetchAPI from "../utils/fetchAPI.js";


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
        let cities = [];
        let initialCities = [
            "Tunis",
            "Doha",
            "Tokyo",
            "Paris"];
        for(let i = 0;i<initialCities.length;i++){
            fetchAPI.FetchCurrentWeatherByCityName(this,initialCities,cities,i)
        }
        // fetchAPI.FetchDetailledWeatherByCityName()
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
        // console.log("MAIN CITY this.props.darkmode = ",this.props.darkmode)
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