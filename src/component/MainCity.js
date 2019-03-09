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
            deleteCityIndex:-1
        };
        console.log("init = ",init)
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

    // componentWillMount = () =>{
    //     console.log("componentWillMount")
    //
    //
    // }

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
        if(this.state.deleteCityIndex !== -1){
            console.log("inside componentDidUpdate")
            let newCities = Array.from(this.state.cities);
            // delete city from cities info
            console.log("cities = ",this.state.cities);
            console.log("index = ",this.state.deleteCityIndex);

            newCities.splice(this.state.deleteCityIndex,1);

            // copy state initial cities array
            let newInitialCities = Array.from(this.state.initialCities);

            // remove cities deleted
            newInitialCities.splice(this.state.deleteCityIndex, 1);

            // add new array of cities name to local storage
            localStorage.setItem("cities", JSON.stringify(newInitialCities));

            this.setState({
                cities: newCities,
                initialCities: newInitialCities,
                deleteCityIndex:-1
            });
        }
        else{
            console.log("inside else componentDidUpdate")
        }
        // console.log("this.state.initialCities = ",this.state.initialCities)
    }

    deleteCard = (index)=> {
        console.log("index deleteCard = ",index);
        this.setState({
            deleteCityIndex: index
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

        let nexCityLC = newCity.toLowerCase();
        // console.log("nexCityLC = ",this.state.initialCities.push(nexCityLC))
        if(!this.state.initialCities.includes(nexCityLC)){

            let copyInitialCities = Array.from(this.state.initialCities);
            copyInitialCities.splice(0,0, nexCityLC);
            // Add new city

            // console.log("this.state.initialCities = ",this.state.initialCities);
            // console.log("copyInitialCities = ",copyInitialCities);
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
                        startIndex = {0}
                        dotsDisabled = {true}
                        mouseDragEnabled={true}
                    />
                </div>
            </div>
        );
    }
}

export default MainCity;