import React from 'react';
import '../App.css';
import Citycard from './CityCard.js';
import Addcity from './Addcity.js';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import fetchAPI from "../utils/fetchAPI.js";


class MainCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities:[],
            initialCities : [
                "tunis",
                "doha",
                "tokyo",
                "paris"],
            cityDelete:-1
        };
    }

    responsive = {
        0: { items: 1 },
        1100: { items: 2 },
        1500: { items: 3 },
    };


    fetchCities(){
        for(let i = 0;i<this.state.initialCities.length;i++){
            fetchAPI.FetchCurrentWeatherByCityName(this,this.state.initialCities,this.state.cities,i)
        }
        // console.log("fetch cities")
    }

    componentDidMount(){
        this.fetchCities()
        // console.log("did mount")
    }

    componentDidUpdate(){
        if(this.state.cityDelete !== -1){
            console.log("inside componentDidUpdate")
            let newCities = Array.from(this.state.cities);
            newCities.splice(this.state.cityDelete,1);
            this.setState({
                cities: newCities,
                cityDelete:-1
            });
        }
        else{
            console.log("inside else componentDidUpdate")
        }
    }

    deleteCard = (index)=> {
        console.log("index deleteCard = ",index)
        this.setState({
            cityDelete: index
        })
    }

    galleryItems() {
        return (
            this.state.cities.map((city, i) =>(
                <div>
                    <Citycard city={city}
                              darkmode={this.props.darkmode}
                              handleColorMode={this.props.handleColorMode}
                              changecolor={this.props.changecolor}
                              key={city.id}
                              deleteCard={this.deleteCard}
                              index={i}
                    />
                </div>
            ))
        )
    };


    handleColorMode=()=>{
        const mode = !this.state.darkmode;
        this.setState({darkmode: mode});
    };

    handleCities = (newCity) => {
        let nexCityLC = newCity.toLowerCase()
        if(!this.state.initialCities.includes(nexCityLC)){
            this.setState({
                initialCities: this.state.initialCities.push(nexCityLC)
            })
            this.fetchCities()
            console.log(nexCityLC," a été ajoutée avec succès")
        }
        else{
            console.log(nexCityLC," est déjà dans la liste")
        }
    }

    render(){
        let items = this.galleryItems();
        // console.log("this.state.cities = ",this.state.cities)
        return (
            <div>
                <Addcity darkmode={this.props.darkmode}
                         changecolor={this.props.changecolor}
                         cities={this.state.initialCities}
                         handleCities={this.handleCities}/>
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