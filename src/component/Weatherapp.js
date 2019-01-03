import React, { Component } from 'react';
import Citycard from './citycard.js';
import Menu from './Menu.js';
import '../App.css';

class Weatherapp extends React.Component {

    state={
        darkmode:false,
        cities:[]
    };

    componentDidMount(){
        let cities = [];
        let url = "https://api.openweathermap.org/data/2.5/weather?id=2172797"
            +"&units=metric"
            +"&appid=c456c057da472e4c57fabb1aecbeb70a";
        fetch(url)
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
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

    handleColorMode=()=>{
        const mode = !this.state.darkmode;
        this.setState({darkmode: mode});
    };

    changecolor(basicdesign){
        if(this.darkmode){
            console.log(basicdesign+"-white")

            return(basicdesign+"-white")

        }
    };

    render() {
        return (
            <div className={"weatherapp "+this.props.changecolor("weatherapp")}>
                <Menu   darkmode={this.props.darkmode}
                        handleColorMode={this.props.handleColorMode}
                        changecolor={this.props.changecolor}/>
                {this.state.cities.map(city=>(
                    <Citycard city={city}
                              darkmode={this.props.darkmode}
                              handleColorMode={this.props.handleColorMode}
                              changecolor={this.props.changecolor}/>
                ))}

            </div>
        );
    }
}

export default Weatherapp;

