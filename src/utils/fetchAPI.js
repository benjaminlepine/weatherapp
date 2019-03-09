import React from 'react';

// const keyapi = "c456c057da472e4c57fabb1aecbeb70a"; // Clef de Benjamin
const keyapi = "ef0eb98d901c7306544b4ebab228204a"; // Clef de Naba

const fetchAPI =   {

    GetAPIKey(){
        return (keyapi);
    },

    async ifCityExist(city){
        let url = "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric"
            + "&appid=" + keyapi;
        // await fetch(url)
        //     .then(res => res.json())
        //     .then(result => {
        //         returnCode = result.cod
        //     })
        // // console.log("result.cod = ",returnCode)
        // return (returnCode)


        const response = await fetch(url);
        const json = await response.json();
        // console.log("json = ",json.cod)
        // this.setState({ data: json });
        return(json.cod)

    },

    ifCityExist2(city, callback){
        let url = "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric"
            + "&appid=" + keyapi;

         fetch(url)
            .then(res => res.json())
            .then(result => {
                callback(result.cod);
            })
    },

    FetchCurrentWeatherByCityName(thisContext, initialCities, cities, i) {

        let url = "https://api.openweathermap.org/data/2.5/weather?q="
            + initialCities[i]
            + "&units=metric"
            + "&appid=" + keyapi;

        fetch(url)
            .then(res => res.json())
            .then(result => {
                const city = {
                    name: result.name,
                    id: result.id,
                    main: result.weather[0].main,
                    description: result.weather[0].description,
                    temp: result.main.temp,
                    temp_min: result.main.temp_min,
                    temp_max: result.main.temp_max,
                    icon: result.weather[0].icon
                };
                cities.push(city);
                thisContext.setState({cities});
            })
    },

    // FetchDetailledWeatherByCityName(detailledCityInfos) {
    //     let city = window.location.pathname.split("/")[2];
    //     let url = "https://api.openweathermap.org/data/2.5/forecast?q="
    //         + city
    //         + "&units=metric"
    //         + "&appid=" + keyapi;
    //
    //     let j = 0;
    //
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(result => {
    //             detailledCityInfos.Temperature = result.list[0].main.temp;
    //             detailledCityInfos.Weather = result.list[0].weather[0].main;
    //             detailledCityInfos.Humidity = result.list[0].main.humidity;
    //             detailledCityInfos.Wind = result.list[0].wind.speed;
    //             detailledCityInfos.Country = result.city.country;
    //             detailledCityInfos.CityName = result.city.name;
    //             detailledCityInfos.Days = [];
    //
    //             // for(let j=0;j<40;j=j+8){
    //             for(let i=0;i<5;i++){
    //                 let day = new Object();
    //                 day.Day = result.list[j].dt_txt;
    //                 day.Weather = result.list[j].weather[0].main;
    //                 day.Temp =  result.list[j].main.temp;
    //                 detailledCityInfos.Days.push(day)
    //                 j=j+8
    //             }
    //
    //             return (detailledCityInfos)
    //         })
    //
    // },
};

export default fetchAPI


