/**
 * Created by benjamin on 06/11/2018.
 */

import React, { Component } from 'react';

const API ="https://api.openweathermap.org/data/2.5/forecast?";
const APIDAYS = "https://api.openweathermap.org/data/2.5/forecast/daily?";

const COUNTRY = "q=Paris";
const  units="&units=metric";
const nbdays =  "&cnt=7"
const API_ID = "&appid=c456c057da472e4c57fabb1aecbeb70a";
const ICONURL = "http://openweathermap.org/img/w/"//add icon name with .png
const paris = {
    id: 6455259,
    name: "Paris",
    country: "FR",
    coord: {
        lon: 2.35236,
        lat: 48.856461
    }
};

class Fetcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: [],
            city: {}
        };
    }

    componentDidMount() {
        var url = APIDAYS+"id="+paris.id+API_ID;
        console.log("url");
        console.log("https://api.openweathermap.org/data/2.5/forecast/daily?");
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);

                    this.setState({
                        isLoaded: true,
                        list: result.list,
                        city: result.city
                    });
                },

                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            )
    }

    render(){
        const {error, isLoaded, list, city} = this.state;
        if (error){
            return <div>error: {error.message} </div>;
        } else {
            console.log(list);
            return (
                <div>
                    <h1>{city.name}</h1>
                    <ul>
                        {list.map(time =>
                            <li>{time.dt_txt} {time.weather[0].description}
                                <img src={ICONURL+time.weather[0].icon+".png"}/>
                            </li>
                        )}
                    </ul>
                </div>
            );
        }
    }
}

export default Fetcher;