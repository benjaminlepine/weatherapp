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

        let init = this.getLocalStorage();
        this.state = {
            cities:[],
            initialCities : init,
            deleteCityName:""
        };
    }

    getLocalStorage = () => {
        let initialCities = [
            "londres",
            "berlin",
            "doha",
            "tokyo",
            "paris"];

        let cities = JSON.parse(localStorage.getItem("cities"));
        console.log("cities = ", cities);
        if(!cities || cities.length === 0){
            localStorage.setItem("cities", JSON.stringify(initialCities));
            return initialCities;
        } else {
            return cities;
        }
    };

    responsive = {
        0: { items: 1 },
        1100: { items: 2 },
        1500: { items: 3 },
    };


    fetchCities = () => {
        for(let i = 0;i<this.state.initialCities.length;i++){
            fetchAPI.FetchCurrentWeatherByCityName(this.state.initialCities[i],(city) => {
                let newCities = Array.from(this.state.cities);
                newCities[i] = city;
                this.setState({cities: newCities});
            });
        }
    }

    componentDidMount(){
        this.fetchCities()
    }

    componentDidUpdate(){
        if(this.state.deleteCityName.length > 0){
            let index = -1;
            this.state.cities.forEach((city, i)=>{
                if(city.name === this.state.deleteCityName){
                    index = i;
                }
            });
            if(index === -1){
                this.setState({
                    deleteCityName : ""
                })
            }
            else{

                let newCities = Array.from(this.state.cities);
                // delete city from cities info

                newCities.splice(index,1);

                // copy state initial cities array
                let newInitialCities = Array.from(this.state.initialCities);

                // remove cities deleted
                newInitialCities.splice(index, 1);
                localStorage.setItem("cities", JSON.stringify(newInitialCities));

                this.setState({
                    cities: newCities,
                    initialCities: newInitialCities,
                    deleteCityName:""
                });
            }
        }
        else{
            console.log("else nothing deleted")
        }
    }

    deleteCard = (name)=> {
        this.setState({
            deleteCityName: name
        })
    }

    checkAPI(city, i){
        if(city === undefined){
            console.log("Weather API is probably down for the moment")
        }
        else{
            return ( <Citycard key={ city === undefined ? 0 : city.id}
                               city={city}
                               darkmode={this.props.darkmode}
                               handleColorMode={this.props.handleColorMode}
                               changecolor={this.props.changecolor}
                               deleteCard={this.deleteCard}
                               index={i}
            />)
        }
    }

    galleryItems(){
        if(this.state.cities.length > 0){
            return (
                this.state.cities.map((city, i) => (
                    <div>
                        {this.checkAPI(city, i)}
                    </div>
                ))
            )
        }
    };


    handleColorMode=()=>{
        const mode = !this.state.darkmode;
        this.setState({darkmode: mode});
    };

    handleCities = (newCity) => {

        let nexCityLC = newCity.toLowerCase();
        if(!this.state.initialCities.includes(nexCityLC)){
            let copyInitialCities = Array.from(this.state.initialCities);
            copyInitialCities.splice(0,0, nexCityLC);

            // Add new city
            localStorage.setItem("cities", JSON.stringify(copyInitialCities));
            this.setState({
                initialCities: copyInitialCities
            });
            this.fetchCities();
            console.log(nexCityLC," a été ajoutée avec succès")
        }
        else{
            console.log(nexCityLC," est déjà dans la liste")
        }
    }

    render(){
        let items = this.galleryItems();
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
                        // startIndex = {0}
                        dotsDisabled = {true}
                        mouseDragEnabled={true}
                    />
                </div>
            </div>
        );
    }
}

export default MainCity;